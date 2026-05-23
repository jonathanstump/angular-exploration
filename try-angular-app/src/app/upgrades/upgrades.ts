import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-upgrades',
  imports: [],
  templateUrl: './upgrades.html',
  styleUrl: './upgrades.scss',
})
export class Upgrades {
  cs = inject(CounterService);
}
