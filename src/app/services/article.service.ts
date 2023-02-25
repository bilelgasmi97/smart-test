import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }

  getdata() : Observable<Article[]>{
    return this.http.get<Article[]>("http://127.0.0.1:8000/api/articles");
  }
}
