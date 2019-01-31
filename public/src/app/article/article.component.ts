
import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  providers: [ITHoursService]
})



export class ArticleComponent implements OnInit {
  articledata: any = [];
  newarticle: any;
  value: any;
  postproduct: any;
  single: any;
  image: any;
  mediaurl: any;
  _htmlProperty1: any = [];
  newvalue: any;
  idtext:any;
  newpost:any =[];
  constructor(
    private _ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public itHoursService: ITHoursService,
    private _sanitizer: DomSanitizer
  ) {
    this.getArticles();
   
  }
  ngOnInit() {

  }
   async singlename(art){
   var idbase ={
     "modelName" : "Article",
     "findQuery": {
      "category" : art._id
      
    }
   }
    // let iddata = await this.itHoursService.executeByGet(idbase, false);
    // console.log(iddata)
    // var no = iddata.apidata.Data.length -1;
    // var id = iddata.apidata.Data[no]._id
    this.router.navigate(['/articlesingle/' + art._id]);
    
   }


  articlesingle() {
    
  }


  async getArticles() {
    var input = {
      "modelName": "Article",
    }

    var articles = await this.itHoursService.executeByGet(input, false)
    console.log(articles)
    for(var i=0;i<articles.apidata.Data.length;i++){
      articles.apidata.Data[i].created_at = new Date( articles.apidata.Data[i].created_at)
    }
    this.newarticle = articles.apidata.Data;
    for (var i = 0; i < this.newarticle.length; i++) {
      this.newarticle[i].description_new = this._sanitizer.bypassSecurityTrustHtml(this.newarticle[i].description);
    }
    

    var input = {
      "modelName": "Product",
    }
    let addres = await this.itHoursService.executeByGet(input, false);
    this.newvalue = addres.apidata.Data
    this.mediaurl = this.newvalue[0].media.mediaurl


    var newinput ={
      "modelName": "Article",
    }
      var newarticle = await this.itHoursService.executeByGet(newinput, false)
      console.log(newarticle)
     
      //this.newpost = newarticle.apidata.Data;
      for(var i = 0; i<  4; i++ ){
        if(newarticle.apidata.Data[i])
        this.newpost.push(newarticle.apidata.Data[i]);
      }

  var postdata ={
    "modelName" : "ArticleCategory"
  }
    var postcategories = await this.itHoursService.executeByGet(postdata, false)
    console.log(postcategories)
    this.idtext = postcategories.apidata.Data

  }
}