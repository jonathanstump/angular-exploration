import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  cs = inject(CounterService);

  get counterValue() { return this.cs.counterValue; }
  get multiplier()   { return this.cs.multiplier; }

  increment() { this.cs.increment(); }
  decrement() { this.cs.counterValue.update((val) => val - 1); }
  reset()     { this.cs.counterValue.set(0); }
  subtract(amount: number) { this.cs.subtract(amount); }
}
