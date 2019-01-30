import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  newblock: any;
  productdetails: any;
  mediaurl: any;
  nameblock: any;
  newadd: any;
  addnew1: any;
  blockadd: any;
  half_article: any;
  categoryid: any = {};
  rel_prod: any = [];
  dataid: any;
  allimagedata: any;
  _htmlProperty1: any;
  constructor(
    public itHoursService: ITHoursService,
    private activatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    public router: Router
  ) {

    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.id = params['beema_id'];
    // });
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['data_id'];
    });
    this.getProduct()
  }
  findQuery = {
    category: this.id
  }

  article() {

    this.router.navigate(['article']);
  }


  async getProduct() {


    var productbyid = {
      "modelName": "Product",
      "findQuery": {
        "_id": this.id,
      },
      "path": "category"
    }
    let productbycategory = await this.itHoursService.executeByGet(productbyid, false);
    console.log(productbycategory)
    this.mediaurl = productbycategory.apidata.Data[0].media.mediaurl
    this.categoryid = productbycategory.apidata.Data[0].category
    this.highlights  = productbycategory.apidata.Data[0].highlights;

    var input = {
      "modelName": "Product",
      "findQuery": {
        "category": this.categoryid._id
      }
    }
    let res = await this.itHoursService.executeByGet(input, false);
    console.log(res)
    this.value = res.apidata.Data

    this._htmlProperty1 = this._sanitizer.bypassSecurityTrustHtml(this.value);


    //this.highlights = this.value[0].highlights[0]
    

    var getArticle = {
      "modelName": "Article"
    }
    let articles = await this.itHoursService.executeByGet(getArticle, false);
    console.log(articles)
    this.newblock = articles.apidata.Data;
    this.half_article = this.newblock.slice(0, 4)
    for (var i = 0; i < this.half_article.length; i++) {
      this.half_article[i].date = new Date(this.half_article[i].created_at)
    }
    console.log(this.half_article)

    var input11 = {
      "modelName": "Category"

    }
    let raj = await this.itHoursService.executeByGet(input11, false);
    console.log(raj)
    this.data = raj.apidata.Data
    for (var i = 0; i < this.data.length; i++) {

      if (this.data[i]._id == this.id) {
        this.productdetails = this.data[i]
      }
    }



    var newproduct =
    {
      "modelName": "Product",
      "findQuery": {

        "category": this.categoryid._id,
        "_id": {
          "$ne": this.id
        }
      }
    }
    let productbynewcategory = await this.itHoursService.executeByGet(newproduct, false);
    this.rel_prod = productbynewcategory.apidata.Data

    var addArticle = {
      "modelName": "Advertisement"
    }
    let addblock = await this.itHoursService.executeByGet(addArticle, false);
    console.log(addblock)
    this.blockadd = addblock.apidata.Data;
    this.nameblock = this.getImage('product', 'side', addblock)    // this.blockadd[4].image
    this.newadd = this.blockadd[1].image
    this.addnew1 = this.blockadd[3].image
  }

  getImage(pagename, area, allimages) {

    console.log(allimages)
    this.allimagedata = allimages.apidata.Data
    for (var i = 0; i < this.allimagedata.length; i++) {
      if (this.allimagedata[i].page == pagename && this.allimagedata[i].area == area) {
        return this.allimagedata[i].image
      }
    }

  }

}

