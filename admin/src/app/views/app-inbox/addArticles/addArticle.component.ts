import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ITHoursService } from 'providers/it-hours-service';
import { DomSanitizer } from '@angular/platform-browser';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';

declare var $:any;
@Component({
  selector: 'app-basic-form',
  templateUrl: './addArticle.component.html',
  styleUrls: ['./addArticle.component.css'],
  providers:[ITHoursService]
})
export class AddArticleComponent implements OnInit {
  formData = {}
  console = console;
  basicForm: FormGroup;
  categories : any = [];
  Title:any;
  uploaderprogress :any = 0;
  selectcategory : any = '';
  embedmode = false;
  youtubelinkmodel:any;
  youtubelink: any;
  vvideotype: any;
  headlines:any=[];
  data:any = [];
  productid:any ;
  description :any = '';
  currentFile:any ='';
  image :any;
  articles:any = []
  
  constructor(
    public itHourService:ITHoursService,
    private sanitizer: DomSanitizer,
    private loader: AppLoaderService
  ) {
  
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

  changeData(index){
 this.data.splice(index,1)
 this.headlines = this.data.slice()
 this.headlines.reverse();
  }
  onContentChanged(){
    this.description =  this.basicForm.value.description;
  }
  onSelectionChanged(){}

  setFile(element: any) {
    // $("#auth").show();
    var self = this;
    this.loader.open();
    this.currentFile = element.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event: any) {
      self.image = event.target.result;
    }
    reader.readAsDataURL(element.target.files[0]);
    this.uploadToAws()
  }

  uploadToAws() {
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
      self.articles.push(data.Location);
      self.loader.close();
    });
  }
  
  async   uploadToServer() {
    // const input = this.itHourService.prepareNodeJSRequestObject("Product", "ADDPRODUCTPHOTO", { Id: this.product.id, photo: url });
    var input = {
      "modelName": "Article",
       "posttitle"  :this.basicForm.value.username,
       "description": this.description,
       "image": this.articles[this.articles.length-1]

    }
    let res = await this.itHourService.executeByPost(input, false);
    // $("#auth").hide();
    if (res.isapisuccess && res.apidata && res.apidata.Data) {

      console.log("call image");
    }
  }

  async   uploadToServer1() {
    // const input = this.itHourService.prepareNodeJSRequestObject("Product", "ADDPRODUCTPHOTO", { Id: this.product.id, photo: url });
    var input = {
      "modelName": "Article",
       "posttitle"  :this.basicForm.value.username,
       "description": this.description,
       "image": this.articles[this.articles.length-1],
       "published":true

    }
    let res = await this.itHourService.executeByPost(input, false);
    // $("#auth").hide();
    if (res.isapisuccess && res.apidata && res.apidata.Data) {

      console.log("call image");
    }
  }

}