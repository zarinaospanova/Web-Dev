import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <p>Username: {{ username }}</p>
    <ul>
      <li>
        <img
          ngSrc="/logo.svg"
          alt="Angular logo"
          width="32"
          height="32"
        />
      </li>
    </ul>
  `,
})
export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  template: `
    <app-user></app-user>
  `,
})
export class AppComponent {}
