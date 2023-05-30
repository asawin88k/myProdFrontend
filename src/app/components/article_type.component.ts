import { Component,Input,OnInit } from '@angular/core'; 
import { ArticleTypeInterface } from '../models/ArticleInterface.model'; 
import { ArticleService } from '../services/ArticleService';

import { itemDetailComponent } from '../components/itemDetail.component/itemDetail.component';
                              
 
@Component({
  selector: 'articleType',
  templateUrl: './article_type.component.html',
  styleUrls:['./article_type.component.scss']
})

export class ArticleTypeComponent implements OnInit { 

 articles? : ArticleTypeInterface[];
 article? : ArticleTypeInterface;  

constructor(private articleService : ArticleService){}

getArticleType(): void{
    this.articleService.getArticleTypes().subscribe( data => {
                                                             this.articles = data 
                                                             console.log(data)
                                                              },  
                                                     error => {console.log("error")},
                                                     ()   =>  {console.log("complete")}
                                                    );
}
 
ngOnInit(): void{
	this.getArticleType();
}

onSelect(atriclePas : ArticleTypeInterface ){
  console.log(atriclePas);
  this.article = atriclePas ;
  }
}
