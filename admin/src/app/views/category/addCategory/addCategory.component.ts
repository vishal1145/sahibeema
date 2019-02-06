import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ITHoursService } from 'providers/it-hours-service';
import { DomSanitizer } from '@angular/platform-browser';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
declare var $:any;
declare var CKEDITOR: any;
@Component({
  selector: 'app-basic-form',
  templateUrl: './addCategory.component.html',
  // styleUrls: ['./addArticle.component.css'],
  providers:[ITHoursService]
})
export class AddCategoryComponent implements OnInit {
  formData = {}
  console = console;
  basicForm: FormGroup;
  categories : any = [];
  Title:any;
  uploaderprogress :any = 0;
  selectcategory : any = '';
  embedmode = false;
  youtubelinkmodel:any;
  categoryicon:any;
  
  data:any = [];
  categoryid:any ;
  description :any = '';
  currentFile:any ='';
  image :any;
  categoryimage :any
  articleimage:any;
  articles:any = []
  isShow:Boolean = false;
  constructor(
    public itHourService:ITHoursService,
    private sanitizer: DomSanitizer,
    private loader: AppLoaderService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getCategories();
  
    if( this.activatedRoute.snapshot.params.id){
      this.categoryid = this.activatedRoute.snapshot.params.id
      if(this.categoryid == -1){
        this.isShow = true
      }
      this.getCategory()
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
    CKEDITOR.replace('editor1');
    CKEDITOR.replace('editor2');
    CKEDITOR.replace('editor3');
  }


  onContentChanged(){
    this.description =  this.basicForm.value.description;
  }
  onSelectionChanged(){}

  setFile(element: any, index) {
    // $("#auth").show();
    var self = this;
    this.loader.open();
    this.currentFile = element.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event: any) {
      self.image = event.target.result;
    }
    reader.readAsDataURL(element.target.files[0]);
    this.uploadToAws(index)
  }
  async getCategories(){
    var res = await this.itHourService.executeByGet({"modelName":"Category"},false);
    this.categories = res.apidata.Data
 console.log(this.basicForm)

  }

  uploadToAws(index) {
    var self = this;
    var fileName = this.currentFile.name;
    var fileName1 = this.itHourService.generateUUID() + fileName.substring(fileName.indexOf('.'), fileName.length);
    var photoKey = fileName1;
    photoKey = 'Quacck/' + '123' + "/" + photoKey;
    this.itHourService.getAWSObj().upload({
      Key: photoKey,
      Body: this.currentFile,
      ACL: 'public-read'
    }, function (err: any, data: any) {
      if (err) {
        return alert('There was an error uploading your Image: ');
      }
      if(index == 1){
        this.image =data.Location
      self.categoryimage= data.Location;
      }
      if(index == 2){
        self.categoryicon= data.Location;
        }
      self.loader.close();
    });
  }
  data1: any;
  data2:any;
  data3:any;


 

  async   uploadToServer1() {
    // const input = this.itHourService.prepareNodeJSRequestObject("Product", "ADDPRODUCTPHOTO", { Id: this.product.id, photo: url });
    this.data1=CKEDITOR.instances['editor1'].getData()
    this.data2=CKEDITOR.instances['editor2'].getData()
    this.data3=CKEDITOR.instances['editor3'].getData()
    console.log('alldatas')
    // $("#auth").hide();
    if(!this.isShow){
      var input11 = {
        "modelName": "Category",
        "findQuery":{
            _id:this.categoryid
        },
        "updateQuery":{
        "$set":{
        "title"  :this.basicForm.value.username,
        "image": this.categoryimage,
         "icon": this.categoryicon,
         "important_facts": this.data1,
         "insurance_type": this.data2,
         "biggest_ins_company": this.data3,
        
      }}}
      let res11 = await this.itHourService.executeByUpdate(input11, false);
      console.log(res11)
      // $("#auth").hide();
      
    }
  
  }

 async getCategory(){
  if(this.activatedRoute.snapshot.params.id){
    var res = await this.itHourService.executeByGet({"modelName":"Category","findQuery":{_id:this.categoryid}},false);
    var data= res.apidata.Data
    this.basicForm.controls['username'].setValue(data[0].title);
    this.image = data[0].image
    CKEDITOR.instances['editor1'].setData(data[0].important_facts)
    CKEDITOR.instances['editor2'].setData(data[0].insurance_type)
    CKEDITOR.instances['editor3'].setData(data[0].biggest_ins_company)
    
  
   }
  }
}