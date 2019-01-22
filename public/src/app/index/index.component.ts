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
  newvalue:any;
  allimagedata:any;
ngOnInit(){
  //UseEffects();
}
constructor (
  public itHoursService:ITHoursService,
  public router:Router
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
     var no = productbycategory.apidata.Data.length -1;
    var id = productbycategory.apidata.Data[no]._id
    this.router.navigate(['/product/' + id]);
 }
async getCategory(){
  var input = {
   "modelName":"Category"
 }
   let res = await this.itHoursService.executeByGet(input, false);
   console.log(res)
  this.data = res.apidata.Data



 


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
    this.nameblock = this.getImage('homepage','side',addblock) //this.blockadd[4].image
    this.newadd = this.blockadd[1].image
    this.addnew1 = this.blockadd[2].image
   
 }

 getImage(pagename,area,allimages){

  console.log(allimages)
this.allimagedata = allimages.apidata.Data
 for (var i = 0; i< this.allimagedata.length;i++){
   if (this.allimagedata[i].page==pagename && this.allimagedata[i].area == area ){
     return this.allimagedata[i].image
   }
 }

}

  }




