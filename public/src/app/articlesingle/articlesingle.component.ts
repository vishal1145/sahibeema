import { Component,OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';

declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: 'articlesingle.component.html',
  providers: [ITHoursService] 
})



export class ArticlesingleComponent implements OnInit {
    
  newpost:any =[];
  newvalue:any;
  mediaurl:any;
  idtext:any;
constructor(
      private _ngZone: NgZone,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      public itHoursService: ITHoursService
       ){
        this.getArticles();
       }


      ngOnInit() {
      }

      async getArticles(){
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
            "modelName": "Product",
          }
          let addres = await this.itHoursService.executeByGet(input, false);
          this.newvalue = addres.apidata.Data
          this.mediaurl = this.newvalue[0].media.mediaurl

          var postdata ={
            "modelName" : "ArticleCategory"
          }
            var postcategories = await this.itHoursService.executeByGet(postdata, false)
            console.log(postcategories)
            this.idtext = postcategories.apidata.Data
      }
  
  }