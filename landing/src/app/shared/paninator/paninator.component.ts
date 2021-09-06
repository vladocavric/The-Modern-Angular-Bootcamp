import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paninator',
  templateUrl: './paninator.component.html',
  styleUrls: ['./paninator.component.css']
})
export class PaninatorComponent implements OnInit {
  numberOfPages = 5
  currentPage = 6

  pagesToShow: number[] = []

  constructor() {
    this.pagesToShow = [
      this.currentPage-2,
      this.currentPage-1,
      this.currentPage,
      this.currentPage+1,
      this.currentPage+2,
    ].filter(page => page >= 1 && page <= this.numberOfPages)
  }

  ngOnInit(): void {
  }

}
