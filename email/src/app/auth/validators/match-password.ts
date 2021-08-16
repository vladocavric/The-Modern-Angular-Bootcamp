import {Validators, FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class MatchPassword implements Validators {
  validate(formGroup: FormGroup) {
    const {password, passwordConfirm} = formGroup.value
    if (password === passwordConfirm) {
      return null
    } else {
      return {passwordDontMatch: true}
    }
  }
}
