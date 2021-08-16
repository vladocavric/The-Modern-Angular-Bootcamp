import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MatchPassword} from "../validators/match-password";
import {UniqueUsername} from "../validators/unique-username";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)], [this.uniqueUsername.validate]),
    password: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(20)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(20)]),
  }, {validators: [this.matchPass.validate]})

  constructor(
    private matchPass: MatchPassword,
    private uniqueUsername: UniqueUsername) {
  }

  ngOnInit(): void {
  }

}
