import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ITHoursService } from 'providers/it-hours-service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router, ActivatedRoute, Params} from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-basic-form',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css'],
  providers:[ITHoursService]
})
export class AddProductComponent implements OnInit {
  formData = {}
  console = console;
  basicForm: FormGroup;
  categories : any = [];
  Title:any;
  product :any ;
  uploaderprogress :any = 0;
  selectcategory : any = '';
  embedmode = false;
  youtubelinkmodel:any;
  youtubelink: any;
  vvideotype: any;
  headlines:any=[];
  data:any = [];
  description :any = [];
  productid:any ;
  isShow : Boolean = false;
  constructor(
    public itHourService:ITHoursService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {
    this.getCategories();
    
   if( this.activatedRoute.snapshot.params.id){
      this.productid = this.activatedRoute.snapshot.params.id
      if(this.productid == -1){
        this.isShow = true
      }
      this.getProduct()
   }
   }

  ngOnInit() {
    let password = new FormControl('', Validators.required);
    let confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.basicForm = new FormGroup({
      username: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(9)
      ]),
      headline: new FormControl('', [
        Validators.required
      ]),
      firstname: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      
      website: new FormControl('', CustomValidators.url),
      date: new FormControl(),
      cardno: new FormControl('', [
        CustomValidators.creditCard
      ]),
      phone: new FormControl('', CustomValidators.phone('BD')),
      password: password,
      confirmPassword: confirmPassword,
      category: new FormControl('', [
        Validators.required
      ]),
      agreed: new FormControl('', (control: FormControl) => {
        const agreed = control.value;
        if(!agreed) {
          return { agreed: true }
        }
        return null;
      })
    })
  }
  
  async getCategories(){
    var res = await this.itHourService.executeByGet({"modelName":"Category"},false);
    this.categories = res.apidata.Data
 console.log(this.basicForm)

  }
 
  updateSrc(url) {
    url = this.itHourService.getyoutubeid(url, { fuzzy: false })
    if (url && url.length == 11)
        this.youtubelink = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + url);
  }
  addHeadlines(){
     this.headlines.push(this.basicForm.value.headline)
     this.data = this.headlines.slice();
     this.data.reverse()
  }
  onContentChanged(){
    this.description =  this.basicForm.value.description;
  }
  onSelectionChanged(){}

   async uploadToServer(){
     if(this.isShow){
    var input = {
      "modelName":"Product",
      "title": this.basicForm.value.username,
      "media.mediaurl":this.youtubelink.changingThisBreaksApplicationSecurity,
      "highlights": this.headlines,
      "category": this.basicForm.value.category,
      "description" : this.description
    }
    var res = await this.itHourService.executeByPost(input,false);
    console.log(res);
  }
    if(!this.isShow){
    var input1 = {
      "modelName" :"Product",
      "findQuery":{
        _id: this.productid
      },
      "updateQuery":{
        "$set":{
        "title": this.basicForm.value.username,
      "media.mediaurl":this.youtubelink.changingThisBreaksApplicationSecurity,
      "highlights": this.headlines,
      "category": this.basicForm.value.category,
      "description" : this.description, 
      "published" : false
      }}
    }
    var res1 = await this.itHourService.executeByUpdate(input1,false);
    console.log(res1);
    }
    
  }

  async uploadToServer1(){
    if(this.isShow){
    var input = {
      "modelName":"Product",
      "title": this.basicForm.value.username,
      "media.mediaurl":this.youtubelink.changingThisBreaksApplicationSecurity,
      "highlights": this.headlines,
      "category": this.basicForm.value.category,
      "published":true,
      "description" : this.description
    }
    var res = await this.itHourService.executeByPost(input,false);
    console.log(res);
  }
  if(!this.isShow){
    var input1 = {
      "modelName" :"Product",
      "findQuery":{
        _id: this.productid
      },
      "updateQuery":{
        "$set":{
        "title": this.basicForm.value.username,
      "media.mediaurl":this.youtubelink.changingThisBreaksApplicationSecurity,
      "highlights": this.headlines,
      "category": this.basicForm.value.category,
      "description" : this.description, 
      "published" : true
      }}
    }
    var res = await this.itHourService.executeByUpdate(input1,false);
    console.log(res);
  }}
  changeData(index){
 this.data.splice(index,1)
 this.headlines = this.data.slice()
 this.headlines.reverse();
  }

  async getProduct(){
    if(this.activatedRoute.snapshot.params.id){
      var res = await this.itHourService.executeByGet({"modelName":"Product","findQuery":{_id:this.productid}},false);
      var data= res.apidata.Data
      this.basicForm.controls['username'].setValue(data[0].title);
      this.basicForm.controls['firstname'].setValue(data[0].media.mediaurl);
      this.headlines = data[0].highlights
      this.data = this.headlines.reverse()
      console.log( this.data)
      this. basicForm.controls['description'].setValue(data[0].description);
      this. basicForm.controls['category'].setValue(data[0].category)
     }
  }

}