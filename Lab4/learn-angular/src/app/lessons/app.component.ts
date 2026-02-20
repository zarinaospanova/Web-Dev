import { Component } from '@angular/core';
import { ChildComponent } from './child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child (addItemEvent)="addItem($event)"></app-child>

    @for (item of items; track $index) {
      <p>{{ item }}</p>
    }
  `,
})
export class AppComponent {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}
