import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() accordion = [];
  open = false;
  openItemIndex = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  onIndexChange(i: number) {
    if (this.openItemIndex !== i) {
      this.openItemIndex = i;
    } else {
      this.openItemIndex = -1;
    }
  }
}
