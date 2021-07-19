import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent implements OnInit {
 show = false;

  constructor() { }

  ngOnInit(): void {
  }

}
