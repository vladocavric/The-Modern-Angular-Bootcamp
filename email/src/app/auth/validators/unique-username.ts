// import {HttpClient} from "@angular/common/http";
import {AsyncValidator, FormControl, ValidationErrors} from "@angular/forms";
import {Injectable} from "@angular/core";

import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";

import {AuthService} from "../auth.service";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(
    // private http: HttpClient,
    private authService: AuthService) {
  }

  validate = (control: FormControl) => {
    const {value} = control

    // return this.http.post<any>('https://api.angular-email.com/auth/username', {
    //   username: value
    // })
    return this.authService.checkUsername(value)
      .pipe(
        map(value => {
          // if (value.available) {
          //   return null
          // }
          // return value
          //we can only return null because if there is some other issue
          //it will fail on request
          return null
        }),
        catchError((err) => {
          if (err.error.username) {
            return of({nonUniqueUsername: true})
          }
          return of({networkIssue: true})
        })
      )
    //   .subscribe((value) => {
    //   console.log(value)
    //     return null
    // })
    // return null
  }
}
