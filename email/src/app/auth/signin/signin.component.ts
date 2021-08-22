import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(20)]),
  })

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
    this.auth.signIn(this.authForm.value)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/inbox')
        },
        error: ({error}) => {
          console.log('err:',error)

          if (error.username || error.pass) {
            this.authForm.setErrors({wrongCred: true})
          } else if (!error.status) {
            this.authForm.setErrors({noInternet: true})
          } else {
            this.authForm.setErrors({unknownError: true})
          }
        }
      })
  }

}
