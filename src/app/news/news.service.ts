import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  articleToRead;

  constructor(private http: HttpClient) { }

  getBusinessNews() {
    console.log("Business News");
    return this.http.get('http://localhost:2000/business');
  }

  getEntertainmentNews() {
    console.log("Entertainment News");
    return this.http.get('http://localhost:2000/entertainment');
  }

  getGeneralNews() {
    console.log("General News");
    return this.http.get('http://localhost:2000/general');
  }

  getHealthNews() {
    console.log("Health News");
    return this.http.get('http://localhost:2000/health');
  }

  getScienceNews() {
    console.log("Science News");
    return this.http.get('http://localhost:2000/science');
  }

  getSportsNews() {
    console.log("Sports News");
    return this.http.get('http://localhost:2000/sports');
  }

  getTechnologysNews() {
    console.log("Technology News");
    return this.http.get('http://localhost:2000/technology');
  }

  articleSelected(news) {
    this.articleToRead = news;
  }

}
