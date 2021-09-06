import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {pluck, map, switchMap, tap} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

export interface Article {
  title: string,
  content: string,
  url: string
  source: {
    name: string
  }
}

export interface News {
  totalResults: number,
  articles: Article[]
}

@Injectable({
  providedIn: 'root'
})
export class WorldNewsService {
  private baseUrl = 'https://newsapi.org/v2/top-headlines'
  private apiKey = 'acbb26c4a79345cf9649098929bb9f33'
  private pageSize = 5
  private country = 'us'

  private pageInput: Subject<number>;
  pageOutput: Observable<Article[]>
  pager: Subject<number>

  constructor(private http: HttpClient) {
    this.pager = new Subject()
    this.pageInput = new Subject()
    this.pageOutput = this.pageInput.pipe(
      map(page => {
        return new HttpParams()
          .set('apiKey', this.apiKey)
          .set('country', this.country)
          .set('pageSize', String(this.pageSize))
          .set('page', String(page))
      }),
      switchMap(params => {
        return this.http.get<News>(this.baseUrl, {params})
      }),
      tap(response => {
        const totalPages = Math.ceil(response.totalResults / this.pageSize)
        this.pager.next(totalPages)
      }),
      pluck('articles')
    )
  }

  getPage(page: number) {
    this.pageInput.next(page)
  }

}
