import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }
    return reverse;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `Reverse Machine: {{ word | reverse }}`,
  imports: [ReversePipe],
})
export class AppComponent {
  word = 'You are a champion';
}
