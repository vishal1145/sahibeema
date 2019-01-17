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
  data:any=[];
  value:any=[];
  highlights:any;
  media:any;
  constructor (
    public itHoursService:ITHoursService
   ){
    this.getProduct()
   }
    

  async getProduct(){
    var input = {
     "modelName":"Product"
   }
     let res = await this.itHoursService.executeByGet(input, false);
     console.log(res)
     this.value = res.apidata.Data
     this.highlights = this.value[0].highlights[0]
      this.media = this.value[0].media.mediaurl

      var input = {
        "modelName":"Category"
      }
        let raj = await this.itHoursService.executeByGet(input, false);
        console.log(raj)
       this.data = raj.apidata.Data
   }
  }

