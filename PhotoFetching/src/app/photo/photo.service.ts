import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';

interface UnsplasResponce {
  urls: {
    regular: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  getRandomPhoto() {
    return this.http.get<UnsplasResponce>('https://api.unsplash.com/photos/random', {
      params: {
        // Authorization: 'Client-ID  EQ3PQkUpB_zo4JVWV3egxOeBzhaeSR_9ZhltPtr4DpA',
        action: 'query',
        client_id: 'EQ3PQkUpB_zo4JVWV3egxOeBzhaeSR_9ZhltPtr4DpA'
      }
    }).pipe(pluck('urls', 'regular'));
  }
}
