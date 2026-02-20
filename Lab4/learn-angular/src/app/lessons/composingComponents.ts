import {Component} from '@angular/core';

@Component({
  // Add a reference to User
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `<app-user />`, imports: [User],
})
export class App {}
