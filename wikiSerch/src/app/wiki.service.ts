import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) {
  }

  getSearch(term: string) {
    console.log(term);
    return this.http.get(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        list: 'search',
        utf8: '1',
        format: 'json,',
        srsearch: term,
        origin: '*'
      }
    });
  }

  search(term: string) {
    return 'serch in wiki';
  }
}
