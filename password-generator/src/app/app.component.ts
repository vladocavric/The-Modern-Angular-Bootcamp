import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  length: number;
  letters = false;
  numbers = false;
  symbols = false;
  yourPassword: string;
  ultraString = '';
  numberString: string;
  letterString: string;
  specialCharString: string;
  passwordString: string;
  passwordArr: [];

  ngOnInit() {
    this.length = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    for (let i = 33; i <= 126; i++) {
      this.ultraString += String.fromCharCode(i);
    }
    this.numberString = this.ultraString.substring(15, 25);
    this.letterString = this.ultraString.substring(32, 58) + this.ultraString.substring(64, 90);
    this.specialCharString = this.ultraString.substring(0, 15) + this.ultraString.substring(25, 32)
      + this.ultraString.substring(58, 64) + this.ultraString.substring(90);
  }

  onGenerate() {
    this.yourPassword = '';
    this.passwordString = '';
    if (this.letters) {
      this.passwordString += this.letterString;
    }
    if (this.numbers) {
      this.passwordString += this.numberString;
    }
    if (this.symbols) {
      this.passwordString += this.specialCharString;
    }
    for (let i = 1; i <= this.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.passwordString.length);
      this.yourPassword += this.passwordString[randomIndex];
    }
  }
}
