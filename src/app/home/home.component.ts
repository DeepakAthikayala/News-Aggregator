import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  businessArticles;
  entertainmentArticles;
  generalArticles;
  healthArticles;
  scienceArticles;
  sportArticles;
  technologyArticles;


  constructor(private news: NewsService) { }

  ngOnInit() {
    this.news.getBusinessNews()
    .subscribe(businessArticles => {
      this.businessArticles = Array.from(JSON.parse(JSON.stringify(businessArticles)).articles).slice(0, 4);
    });

    this.news.getEntertainmentNews()
    .subscribe(entertainmentArticles => {
      this.entertainmentArticles = Array.from(JSON.parse(JSON.stringify(entertainmentArticles)).articles).slice(0, 4);
    });

    this.news.getGeneralNews()
    .subscribe(generalArticles => {
      this.generalArticles = Array.from(JSON.parse(JSON.stringify(generalArticles)).articles).slice(0, 4);
    });

    this.news.getHealthNews()
    .subscribe(healthArticles => {
      this.healthArticles = Array.from(JSON.parse(JSON.stringify(healthArticles)).articles).slice(0, 4);
    });

    this.news.getScienceNews()
    .subscribe(scienceArticles => {
      this.scienceArticles = Array.from(JSON.parse(JSON.stringify(scienceArticles)).articles).slice(0, 4);
    });

    this.news.getSportsNews()
    .subscribe(sportArticles => {
      this.sportArticles = Array.from(JSON.parse(JSON.stringify(sportArticles)).articles).slice(0, 4);
    });

    this.news.getTechnologysNews()
    .subscribe(technologyArticles => {
      this.technologyArticles = Array.from(JSON.parse(JSON.stringify(technologyArticles)).articles).slice(0, 4);
    });


  }

  selectNewsArticle(article) {
    this.news.articleSelected(article);
  }

}
