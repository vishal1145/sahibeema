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
  id:any;
  category:any;
    constructor( 
      private _ngZone: NgZone,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      public itHoursService: ITHoursService
       
       ) {
        this.activatedRoute.params.subscribe((params: Params) => {
          this.id = params['beema_id'];
        });
       this.getProduct()
 
       }
    
       ngOnInit() {
      }

      
      async getProduct() {
      var input = {
        "modelName": "Product",
        "findQuery":{
          "category":this.id
        }
        
      }
      let addres = await this.itHoursService.executeByGet(input, false);
      console.log(addres)
      this.addproduct = addres.apidata.Data

      var input11 = {
        "modelName": "Category",
        "findQuery" : {
          _id:this.id
        }
        
        
      }
      let categ = await this.itHoursService.executeByGet(input11, false);
     this.category = categ.apidata.Data[0].title
  
      

    }
  
  }
