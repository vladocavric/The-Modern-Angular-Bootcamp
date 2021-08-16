import {AbstractControl} from '@angular/forms';

export class MathValidators {
  static add(target: string, valueOne: string, valueTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNo = form.value[valueOne];
      const secondNo = form.value[valueTwo];
      if (firstNo + secondNo === parseInt(sum)) {
        return null;
      }
      return {math: 'not correct'};

    };
  }
}
