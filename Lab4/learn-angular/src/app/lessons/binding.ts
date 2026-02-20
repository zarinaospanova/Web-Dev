import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <img alt="photo" [src]="imageURL" />
  `,
})
export class AppComponent {
  imageURL = 'https://angular.dev/assets/images/tutorials/first-app/property-binding-example.png';
}
