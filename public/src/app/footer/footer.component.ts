import { Component,OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-footer-cmp',
  templateUrl: 'footer.component.html'
})

export class FooterComponent  implements OnInit  {
 constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,){  
 }
 ngOnInit(){   
}
indexfun(){
    this.router.navigate(['about']);
  }
    funcall(){
      this.router.navigate(['team']);
    
  } 
  }

