import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  //Update the component template
  template: `
    Hello Universe
  `,
  // Update the component styles
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})
export class App {}
