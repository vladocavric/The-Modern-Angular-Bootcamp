import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includesLetters = false;
  includesNumbers = false;
  includesSymbols = false;
  password = '';

  onChangeLength(length: string) {
    console.log(length);
    if (!isNaN(+length)) {
      this.length = +length;
    }
  }

  onUseLettersChange() {
    this.includesLetters = !this.includesLetters;
  }

  onUseNumbersChange() {
    this.includesNumbers = !this.includesNumbers;
  }

  onUseSymbolsChange() {
    this.includesSymbols = !this.includesSymbols;
  }

  onButtonClick() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includesNumbers) {
      validChars += numbers;
    }
    if (this.includesLetters) {
      validChars += letters;
    }
    if (this.includesSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i <= this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters() {

  }
}
