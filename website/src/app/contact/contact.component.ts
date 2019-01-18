
import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ITHoursService } from '../../providers/it-hours-service';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  providers: [ITHoursService]
})


export class ContactComponent {
    //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,)
}