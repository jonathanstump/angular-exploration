import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  readonly requirements = [0, 50, 300, 1000, 5000];

  counterValue = signal(0);
  multiplier = signal(1);

  nextRequirement = computed(() => this.requirements[this.multiplier()] ?? Infinity);
  isMaxLevel = computed(() => this.multiplier() >= this.requirements.length);
  progress = computed(() => {
    if (this.isMaxLevel()) return 100;
    return Math.min((this.counterValue() / this.nextRequirement()) * 100, 100);
  });

  increment() {
    this.counterValue.update((val) => val + this.multiplier());
  }

  subtract(amount: number) {
    this.counterValue.update((val) => val - amount);
  }

  upgradeMultiplier() {
    if (!this.isMaxLevel() && this.counterValue() >= this.nextRequirement()) {
      this.subtract(this.nextRequirement());
      this.multiplier.update((val) => val + 1);
    }
  }
}
