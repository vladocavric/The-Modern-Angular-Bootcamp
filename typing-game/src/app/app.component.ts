import {Component, OnInit} from '@angular/core';
import chance from 'chance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  text = '';
  input = '';
  inputLength = -1;
  paste = '';

  ngOnInit() {
    this.text = chance().sentence();
  }

  compare() {
    console.log(this.text)
    this.inputLength = this.input.length - 1;
    this.paste = '';
  }

  onPaste() {
    this.paste = 'you can not paste text in this input';
    return false;

  }


}
