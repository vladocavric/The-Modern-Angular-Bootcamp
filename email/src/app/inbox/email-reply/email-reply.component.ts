import {Component, Input, OnInit} from '@angular/core';
import {Email} from "../email";
import {AuthService} from "../../auth/auth.service";
import {EmailService} from "../email.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email: Email;


  constructor(private authService: AuthService, private route: ActivatedRoute, private emailService: EmailService) {

  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    // this will add > sign in every new line of text
    const text = this.email.text.replace(/\n/gi, '\n> ')
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n---------------- ${this.email.from} wrote: \n> ${text}`
    }
  }

  onSubmit(email: Email) {
    // console.log('from email create:', email)
    this.emailService.sendEmail(email).subscribe(response => this.showModal = false)
  }

}
