// cdvphotolibrary.pipe.ts
import { Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';

@Pipe({
    name: 'safe'
})
export class SafePipe implements PipeTransform {

    //today: any;
    constructor(private sanitizer: DomSanitizer, private _ngZone: NgZone)
        {
      //  this.today = moment.utc(new Date());
    }

   
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }


}