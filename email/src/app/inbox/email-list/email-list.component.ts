import { Component, OnInit } from '@angular/core';
import {EmailService} from "../email.service";

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  emails = []

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmailList().subscribe(emails => {
      this.emails.push(...emails)
    })
  }

}
