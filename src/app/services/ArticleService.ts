import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleTypeInterface } from '../models/ArticleInterface.model';

@Injectable({
	providedIn: 'root'
})

export class ArticleService {
         private Url = 'http://localhost:3000/api/readall';  // URL to web api
//  httpOptions = {
//    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin: *'})
//  };
         
         articleTypes : ArticleTypeInterface[] = 
                [
                 {
                    ARTICLE_TYPE : 'B',
                    ITEM_CODE : '8000-39',
                    ITEM_NAME : 'Company Secretary Fee#11'
                 },
                 {
                      ARTICLE_TYPE : 'B',
                      ITEM_CODE : '8000-40',
                      ITEM_NAME : 'Company Secretary Fee#22'
                 },
                 {
                     ARTICLE_TYPE : 'B',
                     ITEM_CODE : '8000-40',
                     ITEM_NAME : 'Company Secretary Fee#33'
                 }
                ];

	constructor(private http: HttpClient) {}
        
        getArticleTypes(): Observable<ArticleTypeInterface[]> {
            return this.http.get<ArticleTypeInterface[]>(this.Url) 
        } 

}