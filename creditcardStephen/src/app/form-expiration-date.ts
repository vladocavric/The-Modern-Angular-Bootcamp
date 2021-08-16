import {FormControl} from '@angular/forms';

export class FormExpirationDate extends FormControl {
  setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', {...options, emitModelToViewChange: true});
      return;
    }

    if (value.length === 1 && parseInt(value) > 1) {
      super.setValue('0' + value + '/', {...options, emitModelToViewChange: true});
      return;
    }
    //ne sme nista osim brojeva i slasha da se upise
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }

    //treba da mozemo da obrisemo slash
    if (value.length > 5) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, {...options, emitModelToViewChange: true});
      return;
    }
    if (value.length === 2) {
      super.setValue(value + '/', {...options, emitModelToViewChange: true});
      return;
    }
    super.setValue(value, {...options, emitModelToViewChange: true});
  }
}
