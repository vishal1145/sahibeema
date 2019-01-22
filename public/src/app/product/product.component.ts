import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';

declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  providers: [ITHoursService]
})

export class ProductComponent {
  //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,)
  data: any = [];
  value: any = [];
  highlights: any;
  id: any;
   newblock:any;
  productdetails:any;
  mediaurl: any;
  nameblock:any;
  newadd:any;
  addnew1:any;
  blockadd:any;
  categoryid:any = {};
  dataid:any;
  allimagedata:any;
  constructor(
    public itHoursService: ITHoursService,
    private activatedRoute: ActivatedRoute
  ) {

    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.id = params['beema_id'];
    // });
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['beema_id'];
    });
    this.getProduct()
  }
  findQuery = {
    category: this.id
  }


  async getProduct() {
    var input = {
      "modelName": "Product",

    }
    let res = await this.itHoursService.executeByGet(input, false);
    console.log(res)
    this.value = res.apidata.Data
    this.highlights = this.value[0].highlights[0]
    this.mediaurl = this.value[0].media.mediaurl

    var getArticle = {
      "modelName":"Article"
  }
  let articles = await this.itHoursService.executeByGet(getArticle, false);
     console.log(articles)
     this.newblock = articles.apidata.Data;

    var input = {
      "modelName": "Category"

    }
    let raj = await this.itHoursService.executeByGet(input, false);
    console.log(raj)
    this.data = raj.apidata.Data
    for (var i = 0; i < this.data.length; i++) {
   
      if (this.data[i]._id == this.id) {
        this.productdetails = this.data[i] 
      }
    }

    var productbyid = {
      "modelName": "Product",
      "findQuery": {
        "_id": this.id,
        },
        "path":"category"
   }
    let productbycategory = await this.itHoursService.executeByGet(productbyid, false);
    console.log(productbycategory)
    
     this.categoryid = productbycategory.apidata.Data[0].category
  
        
  var newproduct =
    {
      "modelName" :"Product",
      "findQuery":{
    
        "category":productbycategory.apidata.Data[0].category,
        "_id":{
          "$ne" : this.id
        }
    }
  }
  let productbynewcategory = await this.itHoursService.executeByGet(newproduct, false);
  console.log(productbynewcategory)
  

   var addArticle = {
		"modelName":"Advertisement"
}
let addblock = await this.itHoursService.executeByGet(addArticle, false);
   console.log(addblock)
    this.blockadd = addblock.apidata.Data;
    this.nameblock = this.getImage('product','side',addblock)    // this.blockadd[4].image
    this.newadd = this.blockadd[1].image
    this.addnew1 = this.blockadd[3].image
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

