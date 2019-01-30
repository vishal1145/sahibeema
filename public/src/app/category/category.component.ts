import { Component,OnInit} from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';

declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: 'category.component.html',
  providers: [ITHoursService] 
})

export class CategoryComponent implements OnInit  {
  addproduct:any;
    constructor( 
      private _ngZone: NgZone,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      public itHoursService: ITHoursService
       
       ) {
       this.getProduct()
       }
    
       ngOnInit() {
      }

      
      async getProduct() {
      var input = {
        "modelName": "Product",
        
        
      }
      let addres = await this.itHoursService.executeByGet(input, false);
      console.log(addres)
      this.addproduct = addres.apidata.Data
      

    }
  
  }
