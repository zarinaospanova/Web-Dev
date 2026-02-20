import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <p>The user's name is {{ name() }}</p>
  `,
})
export class UserComponent {
  name = input<string>();
}
