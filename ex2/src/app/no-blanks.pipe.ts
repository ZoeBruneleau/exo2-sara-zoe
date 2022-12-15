import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noBlanks'
})
export class NoBlanksPipe implements PipeTransform {

  transform(value: string | null): string{
    if (!value) {
      return '';
    }

    return value.replace(/\s/g,'');
  }

}
