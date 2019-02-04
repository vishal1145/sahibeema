import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ITHoursService } from 'providers/it-hours-service';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, Headers } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
declare var CKEDITOR: any;
declare var $:any;
@Component({
  selector: 'app-basic-form',
  templateUrl: './servicecall.component.html',
//   styleUrls: ['./addProduct.component.css'],
  providers:[ITHoursService]
})
export class ServiceCallComponent implements OnInit {
  
  isShow : Boolean = false;
  constructor(
    public itHourService:ITHoursService,
    private sanitizer: DomSanitizer,
    public http: Http,

    private activatedRoute: ActivatedRoute
  ) {

    $('#call').click(function(){
     http.post('http://localhost:9010/api/crud/ADD',{})
    })

   }
  // CKEDITOR.instances['editor1'].setData();

  // CKEDITOR.instances['editor1'].getData()


  ngOnInit() {}
  



}