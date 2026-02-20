import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` {{ username | lowercase }} `,
  imports: [LowerCasePipe],
})
export class AppComponent {
  username = 'yOunGTECh';
}
