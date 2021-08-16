import { Component } from '@angular/core';
import {WikiService} from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = [];
  constructor(private wiki: WikiService) {
  }

  onSubmit(term: string) {
    // console.log(term);
    this.wiki.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
