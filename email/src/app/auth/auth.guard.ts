import {Injectable} from '@angular/core';
import {
  UrlTree,
  Route,
  UrlSegment,
  CanLoad, Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {skipWhile, take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {
  }
  canLoad(
    route: Route,
    state: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.signedIn$.pipe(
      skipWhile(vel => vel === null),
      take(1),
      tap(auth => {
        if(!auth) {
          this.router.navigateByUrl('/')
        }
      })
    )
  }

}
