import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, units: string) {
    if (!value) {
      return '';
    }
    if (units === 'm') {
      return value * 1609;
    }
    switch (units) {
      case 'km':
        return  value * 1.60934;
      case 'm':
        return  value * 1609.34;
      case 'cm':
        return  value * 1609.34 * 100;
      default:
        throw new Error('not familiar unit');
    }
    return value * 1.609;
  }

}
