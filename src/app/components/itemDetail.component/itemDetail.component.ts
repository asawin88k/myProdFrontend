import { Component,Input } from '@angular/core';
//import { articleTypes } from '../../services/ArticleService';
import { ArticleTypeInterface } from '../../models/ArticleInterface.model'; 

 
@Component({
  selector: 'itemDetail',
  templateUrl: './itemDetail.component.html',
  styleUrls:['./itemDetail.component.scss']
})

export class itemDetailComponent  { 
  
  @Input() itmValue? : ArticleTypeInterface ;   

  constructor(){}


}
