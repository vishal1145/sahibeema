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
 
ngOnInit(){
  UseEffects();
}
constructor (
  public itHoursService:ITHoursService
 ){
  this.getCategory()
 }

async getCategory(){
  var input = {
   "modelName":"Category"
 }
   let res = await this.itHoursService.executeByGet(input, false);
   console.log(res)
  this.data = res.apidata.Data

//   var newartical = {
// 		"modelName":"Article",
// 		"image":"http://www.sigmaweb.org/media/oecdorg/satellitesites/sigma/policy-making-reg-520x328.jpg",
//         "posttitle" : "this is post",
//         "description" : "lorem ipsum"
// }
//    let raj = await this.itHoursService.executeByPost(newartical, false);
//    console.log(raj)
//    this.newartical = raj.apidata.Data;


   var getArticle = {
		"modelName":"Article"
}
let articles = await this.itHoursService.executeByGet(getArticle, false);
   console.log(articles)
   this.newblock = articles.apidata.Data;

//    {
//   	"modelName":"Advertisement",	
//   	 "image" : "https://da27k6hnkwdnx.cloudfront.net/gall_content/2016/8/2016_8$largeimg211_Aug_2016_072549900.jpg",
//     "redirecturl": "index/",
//     "size" : "264*85",
//     "page": "homepage",
//     "area" : "side"
// }
// let raj = await this.itHoursService.executeByPost(newartical, false);
// //    console.log(raj)
   

   var addArticle = {
		"modelName":"Advertisement"
}
let addblock = await this.itHoursService.executeByGet(addArticle, false);
   console.log(addblock)
    this.blockadd = addblock.apidata.Data;
    this.nameblock = this.blockadd[0].image
 }
  }




