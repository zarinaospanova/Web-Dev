import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <button (click)="greet()">Click me</button>

    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      <p>{{ message }}</p>
    </section>
  `,
})
export class AppComponent {
  message = '';

  greet() {
    console.log('Hello, there 👋');
  }

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
