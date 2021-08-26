import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() inputType: string;
  @Input() controlType = 'input';

  constructor() {
  }

  ngOnInit(): void {
  }

  showError() {
    const {errors, touched, dirty} = this.control
    if (errors && touched && dirty) {
      return true
    }

  }
}
