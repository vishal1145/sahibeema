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
    id:any;
    one_art:any = {};
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
        this.activatedRoute.params.subscribe((params: Params) => {
          this.id = params['article_id'];
        });
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
          console.log(addres)
          this.newvalue = addres.apidata.Data
          this.mediaurl = this.newvalue[0].media.mediaurl

          var postdata ={
            "modelName" : "ArticleCategory"
          }
            var postcategories = await this.itHoursService.executeByGet(postdata, false)
            console.log(postcategories)
            this.idtext = postcategories.apidata.Data

            
          var input1 ={
            "modelName" : "Article",
            "findQuery" : {
            _id : this.id
            }
          }
            var one_art = await this.itHoursService.executeByGet(input1, false)
            this.one_art.date = new Date(one_art.apidata.Data[0].created_at)
            this.one_art.image = one_art.apidata.Data[0].image
      }
  
  }