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
    var product = {
      "modelName": "Product",
      "findQuery": {
        "category": this.id
      }
    }
    let productbycategory = await this.itHoursService.executeByGet(product, false);
    console.log(productbycategory)

  }

}

