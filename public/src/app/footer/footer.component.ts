import { Component,OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from 'providers/it-hours-service';
declare var $: any;

@Component({
  selector: 'app-footer-cmp',
  templateUrl: 'footer.component.html',
  providers : [ITHoursService]
})

export class FooterComponent  implements OnInit  {
  cat:any = []
 constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,private itHourService:ITHoursService){ 
   this.getCategory() 
 }
 ngOnInit(){   
}
indexfun(){
    this.router.navigate(['about']);
  }
    funcall(){
      this.router.navigate(['team']);
    
  } 

 async getCategory(){
    var input={
    "modelName" : "Category"
    }
    var res = await this.itHourService.executeByGet(input,false);
   this.cat =  res.apidata.Data
  }
  }

