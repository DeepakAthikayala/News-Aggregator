import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  heading;
  articles;

  constructor(private route: ActivatedRoute, private news: NewsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(article => {

      this.heading = article.category;

      if(article.category === 'business') {

        this.news.getBusinessNews()
          .subscribe(news => {
            console.log(JSON.parse(JSON.stringify(news)).articles)
            this.articles = JSON.parse(JSON.stringify(news)).articles;
          });

      } else if(article.category === 'entertainment') {

        this.news.getEntertainmentNews()
        .subscribe(news => {
          console.log(JSON.parse(JSON.stringify(news)).articles)
          this.articles = JSON.parse(JSON.stringify(news)).articles;
        });

      } else if(article.category === 'general') {

        this.news.getGeneralNews()
        .subscribe(news => {
          console.log(JSON.parse(JSON.stringify(news)).articles)
          this.articles = JSON.parse(JSON.stringify(news)).articles;
        });

      } else if(article.category === 'health') {

        this.news.getHealthNews()
        .subscribe(news => {
          console.log(JSON.parse(JSON.stringify(news)).articles)
          this.articles = JSON.parse(JSON.stringify(news)).articles;
        });

      } else if(article.category === 'science') {

        this.news.getScienceNews()
        .subscribe(news => {
          console.log(JSON.parse(JSON.stringify(news)).articles)
          this.articles = JSON.parse(JSON.stringify(news)).articles;
        });

      } else if(article.category === 'sports') {

        this.news.getSportsNews()
        .subscribe(news => {
          console.log(JSON.parse(JSON.stringify(news)).articles)
          this.articles = JSON.parse(JSON.stringify(news)).articles;
        });

      } else if(article.category === 'technology') {

        this.news.getTechnologysNews()
        .subscribe(news => {
          console.log(JSON.parse(JSON.stringify(news)).articles)
          this.articles = JSON.parse(JSON.stringify(news)).articles;
        });

      }
      
    });
  }

  selectNewsArticle(news) {
    this.news.articleSelected(news);
  }

}
