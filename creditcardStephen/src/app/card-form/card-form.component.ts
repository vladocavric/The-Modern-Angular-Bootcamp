import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormExpirationDate} from '../form-expiration-date';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    cardNo: new FormControl('', [Validators.required, Validators.minLength(16),
      Validators.maxLength(16)]),
    expiration: new FormExpirationDate('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(3)]),

  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('form is submited')
  }

  onReset() {
    this.cardForm.reset();
  }
}
