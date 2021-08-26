import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';

import {Email} from "./email";
import {EmailService} from "./email.service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmailResolver implements Resolve<Email> {
  constructor(private emailService: EmailService,
              private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot) {

    const {id} = route.params
    return this.emailService.getSingleEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    )
  }

}

