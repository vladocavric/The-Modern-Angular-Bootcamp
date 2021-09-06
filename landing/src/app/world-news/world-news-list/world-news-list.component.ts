import { Component, OnInit } from '@angular/core';
import {Article, WorldNewsService} from "../world-news.service";

@Component({
  selector: 'app-world-news-list',
  templateUrl: './world-news-list.component.html',
  styleUrls: ['./world-news-list.component.css']
})
export class WorldNewsListComponent implements OnInit {
  articles: Article[] = []

  constructor(private worldNewsService: WorldNewsService) {
    this.worldNewsService.pageOutput.subscribe(articles => {
      console.log(articles)
      this.articles = [...articles]
    })

    this.worldNewsService.getPage(1)
    // this.articles = [{title: 'nesto', content: 'neki', url: 'gibrish'}]
  }

  ngOnInit(): void {
  }

}
