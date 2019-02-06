
import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';
import { Title }     from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-article app-root',
  templateUrl: 'article.component.html',
  providers: [ITHoursService]
})



export class ArticleComponent implements OnInit {
  articledata: any = [];
  data: any = [];
  newarticle: any = [];
  value: any;
  postproduct: any;
  single: any;
  image: any;
  articaltegs: any= [];
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
    private titleService: Title,
    private _sanitizer: DomSanitizer
  ) {
    this.getArticles();
   
  }

  public setTitle( newTitle: string) {
  
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

  filterArticalthroughTag(catname) {
    this.newarticle = []
    for(var i =0; i < (this.allArticlas || []).length; i++) {
      for(var j =0; j < (this.allArticlas[i].tags || []).length; j++) {
      if(this.allArticlas[i].tags[j] == catname) {
        this.newarticle.push(this.allArticlas[i])
        
      }
    }
    }
    for (var k = 0; k < this.newarticle.length; k++) {
      this.newarticle[k].description_new = this._sanitizer.bypassSecurityTrustHtml(this.newarticle[k].description);
    }

  }

  async catgoriesbase(catID) {
    this.newarticle = []
    for(var i =0; i < (this.allArticlas || []).length; i++) {
      if(this.allArticlas[i].category == catID) {
        this.newarticle.push(this.allArticlas[i])
        
      }
    }
    for (var i = 0; i < this.newarticle.length; i++) {
      this.newarticle[i].description_new = this._sanitizer.bypassSecurityTrustHtml(this.newarticle[i].description);
    }

  }
  allArticlas: any =[];
  async getArticles() {
    var input = {
      "modelName": "Article",
    }

    var articles = await this.itHoursService.executeByGet(input, false)
    this.allArticlas = articles.apidata.Data
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
    this.titleService.setTitle('article');



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


      var input = {
        "modelName": "Category"
      }
      let res = await this.itHoursService.executeByGet(input, false);
      console.log(res)
      this.data = res.apidata.Data

  var postdata ={
    "modelName" : "ArticleCategory"
  }
    var postcategories = await this.itHoursService.executeByGet(postdata, false)
    console.log(postcategories)
    this.idtext = postcategories.apidata.Data
    for(var i =0; i < this.idtext.length; i++) {
      this.articaltegs.push(this.idtext[i].name)
    }
    

  }

  async addLikes(id){
    var likesadd = {
      "modelName": "Article",
      "findQuery": {
        _id: id
       
      }
      
    }
      var newlikes = await this.itHoursService.executeByGet(likesadd, false)
      for(var i= 0;i<this.newarticle.length;i++){
        if(this.newarticle[i]._id== id)
      {
        this.newarticle[i].likes.push(newlikes.apidata.Data[0].likes + 1)
      }
      }
     

  }
}