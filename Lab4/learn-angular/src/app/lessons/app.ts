import { Component } from '@angular/core';
import { UserComponent } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  template: `
    <app-user name="Simran"></app-user>
  `,
})
export class AppComponent {}
