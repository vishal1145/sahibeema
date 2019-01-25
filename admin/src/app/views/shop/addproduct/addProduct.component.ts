import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ITHoursService } from 'providers/it-hours-service';
import { DomSanitizer } from '@angular/platform-browser';
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
  uploaderprogress :any = 0;
  selectcategory : any = '';
  embedmode = false;
  youtubelinkmodel:any;
  youtubelink: any;
  vvideotype: any;
  headlines:any=[];
  data:any = [];

  constructor(
    public itHourService:ITHoursService,
    private sanitizer: DomSanitizer
  ) {
    this.getCategories()
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

   async uploadToServer(){
    var input = {
      "modelName":"Product",
      "title": this.basicForm.value.username,
      "media.mediaurl":this.youtubelink.changingThisBreaksApplicationSecurity,
      "highlights": this.headlines,
      "category": this.basicForm.value.category
    }
    var res = await this.itHourService.executeByPost(input,false);
    console.log(res);
  }

}