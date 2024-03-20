import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majusculeUneSurX',
  standalone: true,
})
export class MajusculeUneSurXPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string | undefined {
    if (value == undefined) {
      return value;
    }
    let result = '';

    for (let i = 0; i < value.length; i++) {
      let c: string = value[i];

      if (i % 2 == 0) {
        c = c.toUpperCase();
      }

      result += c;
    }

    return result;
  }
}
