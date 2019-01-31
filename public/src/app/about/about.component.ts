import { Component,} from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { ITHoursService } from '../../providers/it-hours-service';
declare var $: any;

@Component({
  selector: 'app-team app-root',
  templateUrl: 'about.component.html',
  providers: [ITHoursService] 
})

export class AboutComponent  {
    //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,) .
    constructor(
      private _ngZone: NgZone,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private titleService: Title,
      public itHoursService: ITHoursService
       ){
  this.setTitle()
       }
       public setTitle() {
   this.titleService.setTitle('हमारे बारे में');
      }
     

  }