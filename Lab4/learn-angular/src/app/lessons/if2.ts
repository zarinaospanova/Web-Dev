import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @if (isServerRunning) {
      <p>Server is running </p>
    } @else {
      <p>Server is not running </p>
    }
  `,
})
export class AppComponent {
  isServerRunning = true;
}
