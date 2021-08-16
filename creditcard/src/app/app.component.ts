import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {any} from 'codelyzer/util/function';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  creditCardForm: FormGroup;
  name = '';
  cardNumber: any;
  expirationDate = '';
  securityCode = '';
  cardBrand = '';
  cardBrandSrc = '';

//   if (this.cardBrand === 'masterCard' )  {
//   this.cardBrandSrc = '../assets/masterCard.png';
// }

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    this.creditCardForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      cardNumber: new FormControl(0, [Validators.required, Validators.maxLength(12),
        Validators.minLength(12),]),
      expirationDate: new FormControl(null),
      securityCode: new FormControl(null)
    });


    console.log(this.creditCardForm.value.cardNumber);
    // switch (this.creditCardForm.value.cardNumber) {
    // }
  }

  onSubmit() {
    console.log(this.creditCardForm);
  }

  onReset() {
    this.name = '';
    this.cardNumber = '';
    this.expirationDate = '';
    this.securityCode = '';
  }

  // get name() {
  //   retun (this.creditCardForm.get('name') as FormControl);
  // }
  //
  // get expirationDate() {
  //   retun (this.creditCardForm.get('expirationDate') as FormControl);
  // }
  onCCInput() {
    console.log(this.cardNumber);
    const firstPartOfCCNo = parseInt(this.cardNumber.toString().slice(0, 2));


    if (firstPartOfCCNo >= 51 && firstPartOfCCNo <= 55) {
      this.cardBrand = 'masterCard';
      this.renderer.addClass(document.body, 'bg-orange-yellow');
    } else if (firstPartOfCCNo >= 40 && firstPartOfCCNo <= 49) {
      this.cardBrand = 'visa';
      this.renderer.addClass(document.body, 'bg-blue-yellow');
    } else if (firstPartOfCCNo === 34 || firstPartOfCCNo === 37) {
      this.cardBrand = 'american';
    } else if (firstPartOfCCNo === 30 || firstPartOfCCNo === 36 || firstPartOfCCNo === 38) {
      this.cardBrand = 'diners';
    } else {
      this.cardBrand = '';
      this.renderer.removeAttribute(document.body, 'class');
    }

    switch (this.cardBrand) {
      case 'masterCard':
        this.cardBrandSrc = '../assets/masterCard.png';
        break;
      case 'visa':
        this.cardBrandSrc = '../assets/Visa-Logo.png';
        break;
      case 'american':
        this.cardBrandSrc = '../assets/american.png';
        break;
      case 'diners':
        this.cardBrandSrc = '../assets/diners.png';
    }
  }
}
