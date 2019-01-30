import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navbar-cmp',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit  {
  constructor(private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router){

  } 
   
  ngOnInit(){
    
  }
  
  myfunction(){
     this.router.navigate(['about']);
  }
  contactfun(){
    this.router.navigate(['contact']);
  }
  indexfun(){
    this.router.navigate(['index']); 
  }
}


