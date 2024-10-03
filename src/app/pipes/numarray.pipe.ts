import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numarray',
  standalone: true
})
export class NumarrayPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number[] {
    return Array(value).fill(0);
  }

}
