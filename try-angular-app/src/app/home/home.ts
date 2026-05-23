import { Component, signal, ViewChild } from '@angular/core';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild(Counter) counter!: Counter;
  expanded = signal(false);

  increment() {
    this.counter.increment();
  }

  expand() {
    this.expanded.set(true);
    setTimeout(() => this.expanded.set(false), 300);
  }
}
