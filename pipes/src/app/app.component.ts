import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;
  date: number;
  amount: number;
  miles: number;

  cur = 'EUR';

  car1 = {
    marka: 'toyota',
    model: 'yaris',
    godiste: 2000
  }

  car2 = {
    marka: 'wv',
    model: 'golf',
    godiste: 2005
  }

  cars = [this.car1, this.car2]



}
