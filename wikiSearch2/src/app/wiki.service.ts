import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';

interface WikiResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) {
  }

  search(term: string) {
    return this.http.get<WikiResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        utf8: '1',
        format: 'json',
        srsearch: term,
        origin: '*'
      }
    }).pipe(pluck('query', 'search'));
  }
}
