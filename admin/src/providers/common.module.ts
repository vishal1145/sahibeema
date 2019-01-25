
import { NgModule } from '@angular/core';
//import {TextTruncatePipe} from '../providers/texttruncate';
//import { utcTimeDatePipe } from '../providers/utctimeDate';
//import { TruncatePipe } from '../providers/truncate';
import { SafePipe } from '../providers/safeurl';

@NgModule({
    declarations: [
      SafePipe 
    ],
    imports: [
    ],
    exports: [
        SafePipe
    ]
})
export class ITCommonModule { }
