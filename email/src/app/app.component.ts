import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // signedIn = false
  signedIn$: BehaviorSubject<boolean>

  constructor(private auth: AuthService) {
    this.signedIn$ = this.auth.signedIn$;
  }

  ngOnInit() {
    this.auth.checkAuth().subscribe(() => {})
    // this.auth.signedIn$.subscribe(singIn => {
    //   this.signedIn = singIn;
    // })
  }

  signOut() {
    console.log('click on signOut')
    this.auth.signOut().subscribe()
  }
}
