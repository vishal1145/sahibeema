
import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';
import { Title }     from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-contact app-root',
  templateUrl: 'contact.component.html',
  providers: [ITHoursService]
})



export class ContactComponent {
    //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,)


    constructor(
      private _ngZone: NgZone,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private titleService: Title,
      public itHoursService: ITHoursService
       ){
        this.setTitle()
       }
       public setTitle( ) {
   this.titleService.setTitle('सम्पर्क');
      }
     
  }