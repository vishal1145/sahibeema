import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { egretAnimations } from '../../shared/animations/egret-animations';
import { MatSidenav, MatDialog } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { AppInboxService } from './app-inbox.service';
// import { MailComposeComponent } from './mail-compose.component';
import { ITHoursService } from 'providers/it-hours-service';
declare var $: any;
@Component({
  selector: 'app-inbox',
  templateUrl: './configuration.component.html',
  animations: [egretAnimations],
  // styleUrls: ['./configuration.component.css'],
  providers: [ITHoursService]
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  isMobile;
  newProducts : any = [];
  mySelections : any;
  prod_id:any=[]
  screenSizeWatcher: Subscription;
  public viewMode: string = 'grid-view';
  public currentPage: any;
  selected:Boolean=true
  isSidenavOpen: Boolean = true;
  basicForm:any
  selectToggleFlag = false;
  products: any = []
  @ViewChild(MatSidenav) private sideNav: MatSidenav;
  messages;


  constructor(private router: Router,
    private media: ObservableMedia,
    private _sanitizer: DomSanitizer,
    public composeDialog: MatDialog,
    // private inboxService: AppInboxService,
    public itHourService: ITHoursService) {
    this.getProduct()
  }

  ngOnInit() {
    this.inboxSideNavInit();
    this.basicForm = new FormGroup({
     
      userType: new FormControl('', [
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
    // this.messages = this.inboxService.messages;
  }
  ngOnDestroy() {
    if (this.screenSizeWatcher) {
      this.screenSizeWatcher.unsubscribe()
    }
  }
  //   openComposeDialog() {
  //     // const dialogRef = this.composeDialog.open(MailComposeComponent);
  //     dialogRef.afterClosed().subscribe(result => { });
  //   }
  selectToggleAll() {
    this.selectToggleFlag = !this.selectToggleFlag;
    this.messages.forEach((msg) => { msg.selected = this.selectToggleFlag });
  }

  stopProp(e) {
    e.stopPropagation()
  }

  updateSidenav() {
    let self = this;
    setTimeout(() => {
      self.isSidenavOpen = !self.isMobile;
      self.sideNav.mode = self.isMobile ? 'over' : 'side';
    })
  }
  inboxSideNavInit() {
    this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
    this.updateSidenav();
    this.screenSizeWatcher = this.media.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
      this.updateSidenav();
    });
  }
  toggleSideNav() {
    this.sideNav.opened = !this.sideNav.opened;
  }
  async  getProduct() {
    var input = {
      "modelName": "Product"
    }
    var res = await this.itHourService.executeByGet(input, false);
   this.newProducts  = res.apidata.Data
    for(var i = 0;i<res.apidata.Data.length;i++){
      if(res.apidata.Data[i].showhomepage){
 this.products.push(res.apidata.Data[i]) 
 this.prod_id.push(res.apidata.Data[i]._id)
      }
    }  
  }
  // changeProduct(id){
  //   $('#myModal').modal('show')
  // }

  isEdit  = false;
   async updateProduct(){
    if(this.basicForm.value.userType.length==2){
      this.selected = false
      var res1 = await this.itHourService.executeByUpdate(
        {
         "modelName":"Product",
         "findQuery":{
           _id:{$in:this.prod_id
           }},
          "updateQuery":{
            "$set":{
         "showhomepage":false
          }}
        },false
      )
      res1.apidata.Data
     var res = await this.itHourService.executeByUpdate(
       {
        "modelName":"Product",
        "findQuery":{
          _id:{$in:this.basicForm.value.userType
          }},
          "updateQuery":{
            "$set":{
         "showhomepage":true
          }}
       },false
     )
     var updateproct  = res.apidata.Data
    }

  }
  async changed() {
 var self = this
    if (this.basicForm.value.userType.length < 3) {
      this.mySelections = this.basicForm.value;
    } else {
      this.basicForm.setValue(this.mySelections);
    }
    
  }

}
