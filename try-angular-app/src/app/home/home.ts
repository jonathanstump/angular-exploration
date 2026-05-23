import { Component, inject, signal } from '@angular/core';
import { Counter } from '../components/counter/counter';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-home',
  imports: [Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private cs = inject(CounterService);
  expanded = signal(false);

  increment() {
    this.cs.increment();
  }

  expand() {
    this.expanded.set(true);
    setTimeout(() => this.expanded.set(false), 300);
  }
}
