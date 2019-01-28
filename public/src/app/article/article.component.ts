
import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';

declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  providers: [ITHoursService]
})



export class ArticleComponent implements OnInit  {
  articledata:any=[];
  newarticle:any;
  value:any;
  postproduct:any;
  single:any;
  constructor(
    
    private _ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    
    private router: Router,
    public itHoursService :ITHoursService,
    
     ){
      this.getArticles()
  } 
ngOnInit(){
   
}

articlesingle(){
  this.router.navigate(['articlesingle']);
}


async getArticles(){
  var input ={
    "modelName":"Article"
  }

  var articles =  await this.itHoursService.executeByGet(input,false)
    console.log(articles)
     this.articledata =  articles.apidata.Data;
     this.postproduct =  this.articledata.slice(4,8)
     this.single = this.postproduct[0].heading
     this.newarticle = this.articledata.slice(9,13) 
     
     var sameProduct = {
      "modelName": "Product",

    }
    let res = await this.itHoursService.executeByGet(sameProduct, false);
    console.log(res)
    this.value = res.apidata.Data
     


    
}
}