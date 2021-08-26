import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";


interface Username {
  username: string
}
interface SignedInResponse extends Username{
  authenticated: boolean,
  username: string
}

interface LoginCred extends Username {
  password: string,
}

interface NewUser extends LoginCred{
  passwordConfirmation: string | null
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'https://api.angular-email.com/auth/';
  signedIn$ = new BehaviorSubject(null)
  username = ''

  constructor(private http: HttpClient) {
  }

  checkUsername(username: string) {
    return this.http.post<{ available: boolean }>(`${this.baseURL}username`, {
      username
    })
  }

  signup(credentials: NewUser) {
    return this.http.post<{ username: string }>(`${this.baseURL}signup`, credentials).pipe(
      tap(({username}) => {
        this.signedIn$.next(true)
        this.username = username
      })
    )
  }

  checkAuth() {
    return this.http.get<SignedInResponse>(`${this.baseURL}signedin`).pipe(
      tap(({authenticated, username}) => {
        this.signedIn$.next(authenticated)
        this.username = username
      })
    )
  }

  signOut() {
    return this.http.post(`${this.baseURL}signout`, {}).pipe(
      tap(val => {
        console.log('this is from sign out')
        console.log(val)
        this.signedIn$.next(false)
      })
    )
  }

  signIn(credentials: LoginCred) {
    return this.http.post<Username>(`${this.baseURL}signin`, credentials).pipe(
      tap(({username}) => {
        this.signedIn$.next(true)
        this.username = username
      })
    )
  }
}
