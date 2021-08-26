import { Component, OnInit } from '@angular/core';
import {Email} from "../email";
import {AuthService} from "../../auth/auth.service";
import {EmailService} from "../email.service";
@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  showModal = false
  email: Email = {
    from: '',
    to: '',
    subject: '',
    text: '',
  }

  constructor(private authService: AuthService, private emailService: EmailService) {
    this.email.from = `${authService.username}@angular-email.com`
  }

  ngOnInit(): void {
  }

  onSubmit(email: Email) {
    // console.log('from email create:', email)
    this.emailService.sendEmail(email).subscribe(response => this.showModal = false)
  }
}
