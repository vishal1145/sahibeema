import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';
declare var $: any;
import { UseEffects} from '../effect'

@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html',
  providers: [ITHoursService]
})

export class IndexComponent implements OnInit {
  //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,) .
  data:any=[];
  newartical:any=[];
  blockadd:any;
  newblock:any;
  nameblock:any;
  newadd:any;
  addnew1:any;
  addnew2:any;
ngOnInit(){
  //UseEffects();
}
constructor (
  public itHoursService:ITHoursService
 ){
  this.getCategory()
 }
async getId(cat){
   var product = {
      "modelName": "Product",
      "findQuery": {
        "category": cat._id
      }
    }
 let productbycategory = await this.itHoursService.executeByGet(product, false);
    console.log(productbycategory)
     
 }
async getCategory(){
  var input = {
   "modelName":"Category"
 }
   let res = await this.itHoursService.executeByGet(input, false);
   console.log(res)
  this.data = res.apidata.Data



    var product = {
      "modelName": "Product",
      "findQuery": {
        "category": "test"
      }
    }
    let productbycategory = await this.itHoursService.executeByGet(product, false);
    console.log(productbycategory)


   var getArticle = {
		"modelName":"Article"
}
let articles = await this.itHoursService.executeByGet(getArticle, false);
   console.log(articles)
   this.newblock = articles.apidata.Data;


   var addArticle = {
		"modelName":"Advertisement"
}
let addblock = await this.itHoursService.executeByGet(addArticle, false);
   console.log(addblock)
    this.blockadd = addblock.apidata.Data;
    this.nameblock = this.blockadd[4].image
    this.newadd = this.blockadd[1].image
    this.addnew1 = this.blockadd[2].image
    this.addnew2 = this.blockadd[3].image
 }
  }



