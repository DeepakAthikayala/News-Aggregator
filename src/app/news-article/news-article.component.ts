import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  articleToRead;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.articleToRead = this.news.articleToRead;
    console.log(this.articleToRead);
  }

}
