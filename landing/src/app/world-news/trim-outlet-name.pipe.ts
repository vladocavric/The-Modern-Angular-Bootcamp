import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutletName'
})
export class TrimOutletNamePipe implements PipeTransform {

  transform(value: string, source: string): unknown {
    return value.replace(` - ${source}`, '')
  }

}
