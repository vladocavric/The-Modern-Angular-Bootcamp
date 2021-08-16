import {Directive, ElementRef} from '@angular/core';
import {FormControlName} from '@angular/forms';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {

  constructor(private el: ElementRef, private formControlName: FormControlName) {
  }

  ngOnInit(): void {
    // const {a, b, answer} = this.formControlName.control.parent.value;
    // if (answer - a - b < 3) {
    //   this.el.style.background = 'green';
    // }
    this.formControlName.control.parent.valueChanges.pipe(
      map(({a, b, answer}) => {
        return Math.abs((a + b - answer) / answer) <= 0.2;
      })
    ).subscribe(value => {
      if (value) {
        this.el.nativeElement.classList.add('green');
      } else {
        this.el.nativeElement.classList.remove('green');
      }
    });
  }
}
