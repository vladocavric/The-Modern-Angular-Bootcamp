import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  term = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    event.preventDefault();
    // console.log(typeof this.term);
    if (this.term === '') {
      return;
    }
    this.submitted.emit(this.term);
  }
}
