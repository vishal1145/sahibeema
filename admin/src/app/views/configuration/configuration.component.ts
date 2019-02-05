import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { egretAnimations } from '../../shared/animations/egret-animations';
import { MatSidenav, MatDialog } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { AppInboxService } from './app-inbox.service';
// import { MailComposeComponent } from './mail-compose.component';
import { ITHoursService } from 'providers/it-hours-service';

@Component({
  selector: 'app-inbox',
  templateUrl: './configuration.component.html',
  animations: [egretAnimations],
  // styleUrls: ['./configuration.component.css'],
  providers: [ITHoursService]
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  isMobile;
  screenSizeWatcher: Subscription;
  public viewMode: string = 'grid-view';
  public currentPage: any;
  isSidenavOpen: Boolean = true;
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
    for(var i = 0;i<res.apidata.Data.length;i++){
      if(res.apidata.Data[i].showhomepage){
 this.products.push(res.apidata.Data[i]) 
      }
    }  
  }
}
