import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {delay, filter, scan} from 'rxjs/operators';
import {MathValidators} from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;
  mathForm = new FormGroup({
    a: new FormControl(this.randomNo()),
    b: new FormControl(this.randomNo()),
    answer: new FormControl(''),
  }, [MathValidators.add('answer', 'a', 'b')]);

  constructor() {
  }

  ngOnInit(): void {

    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(300),
      scan(acc => {
        return {
          numberSoled: acc.numberSoled + 1,
          startTime: acc.startTime
        };
      }, {
        numberSoled: 0, startTime: new Date()
      })
    ).subscribe(({numberSoled, startTime}) => {
      this.secondsPerSolution = ((new Date().getTime() - startTime.getTime()) / 1000) / numberSoled;
      this.mathForm.setValue({
        a: this.randomNo(),
        b: this.randomNo(),
        answer: ''
      });
    });
  }

  randomNo() {
    return Math.floor(Math.random() * 10);
  }

  get a() {
    return this.mathForm.get('a').value;
  }

  get b() {
    return this.mathForm.value.b;
    // return this.mathForm.controls.b.value;
    // return this.mathForm.get('b').value;
  }
}
