import {Component, Input} from '@angular/core';
import {WikiService} from './wiki.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() term = '';
  constructor(private wikiSearch: WikiService) {
  }


  onSubmitted(term) {

    console.log(term, 'from component')
    this.wikiSearch.getSearch(term)
      .subscribe(() => console.log(response))
  }
}

//https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=SPACE
//https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=1&format=json,&srsearch=&origin=*
