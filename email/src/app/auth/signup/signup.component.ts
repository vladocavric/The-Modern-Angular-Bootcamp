import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MatchPassword} from "../validators/match-password";
import {UniqueUsername} from "../validators/unique-username";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

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
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(20)]),
  }, {validators: [this.matchPass.validate]})

  constructor(
    private matchPass: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.signup(this.authForm.value)
      .subscribe({
        next:  () => {
          this.router.navigateByUrl('/inbox')
        },
        error: (err) => {
          console.log(err)
          if(!err.status) {
            this.authForm.setErrors({noInternet: true})
          } else {
            this.authForm.setErrors({unknownError: true})
          }
        }
    })
  }
}
