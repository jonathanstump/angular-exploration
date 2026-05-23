import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Upgrades } from './upgrades/upgrades';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Upgrades],
  template: `
    <app-header />
    <router-outlet />
    <app-upgrades />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('try-angular-app');
}
