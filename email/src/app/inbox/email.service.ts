import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmailShort, Email} from "./email";



@Injectable({
  providedIn: 'root'
})
export class EmailService {
  baseURL = 'https://api.angular-email.com';
  //end points
  // get /emails
  // get /emails/:id
  // post /emails {subject: string, text: string, to: string, from: string }


  constructor(private http: HttpClient) {
  }

  getEmailList() {
    return this.http.get<EmailShort[]>(`${this.baseURL}/emails`)
  }

  getSingleEmail(id: string) {
    return this.http.get<Email>(`${this.baseURL}/emails/${id}`)
  }

  sendEmail(email: Email) {
    return this.http.post(`${this.baseURL}/emails`, email)
  }
}
