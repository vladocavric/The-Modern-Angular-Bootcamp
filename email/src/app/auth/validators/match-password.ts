import {Validators, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class MatchPassword implements Validators {
  validate(formGroup: FormGroup) {
    const {password, passwordConfirmation} = formGroup.value
    if (password === passwordConfirmation) {
      return null
    } else {
      return {passwordDontMatch: true}
    }
  }
}
