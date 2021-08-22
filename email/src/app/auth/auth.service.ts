import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";


interface username {
  username: string
}
interface signedInResponse extends username{
  authenticated: boolean,
}

interface loginCred extends username {
  password: string,
}

interface newUser extends loginCred{
  passwordConfirmation: string | null
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'https://api.angular-email.com/auth/';
  signedIn$ = new BehaviorSubject(null)

  constructor(private http: HttpClient) {
  }

  checkUsername(username: string) {
    return this.http.post<{ available: boolean }>(`${this.baseURL}username`, {
      username
    })
  }

  signup(credentials: newUser) {
    return this.http.post<{ username: string }>(`${this.baseURL}signup`, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true)
      })
    )
  }

  checkAuth() {
    return this.http.get<signedInResponse>(`${this.baseURL}signedin`).pipe(
      tap(({authenticated}) => {
        this.signedIn$.next(authenticated)
        console.log('auth', authenticated)
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

  signIn(credentials: loginCred) {
    return this.http.post<username>(`${this.baseURL}signin`, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true)
      })
    )
  }
}
