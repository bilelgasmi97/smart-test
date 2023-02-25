import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  constructor( private articleservice :  ArticleService ){}

  articles !: Article[];

  ngOnInit() {
    this.getAllArticle()
    console.log(this.articles)
    }
    getAllArticle(){
      this.articleservice.getdata().subscribe({
        next:(res) => {
          this.articles = res;
        },
        error:(err)=>{
          alert("error while fetching data !!! ")
        }
      })
    }

    



}
