import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatSidenav, MatDialog } from '@angular/material';
import { ChatService } from './chat.service';
import { ITHoursService } from 'providers/it-hours-service';

@Component({
  selector: 'app-chats',
  templateUrl: './app-chats.component.html',
  styleUrls: ['./app-chats.component.css'],
  providers :[ITHoursService]
})
export class AppChatsComponent implements OnInit, OnDestroy {
  isMobile;
  screenSizeWatcher: Subscription;
  isSidenavOpen: Boolean = true;
  public viewMode: string = 'grid-view';
  public currentPage: any;
  products : any[]
  @ViewChild(MatSidenav) public sideNav: MatSidenav;

  activeChatUser = {
    name: 'Gevorg Spartak',
    photo: 'assets/images/face-2.jpg',
    isOnline: true,
    lastMsg: 'Hello!'
  };
  user;


  constructor(
    private media: ObservableMedia, 
    public chatService: ChatService,
    public itHourService : ITHoursService
  ) {
    console.log(chatService.chats)
    this.user = chatService.user
    this.getProducts()
  }

  ngOnInit() {
    this.chatSideBarInit();
  }
  ngOnDestroy() {
    if (this.screenSizeWatcher) {
      this.screenSizeWatcher.unsubscribe();
    }
  }
  changeActiveUser(user) {
    this.activeChatUser = user;
  }
  updateSidenav() {
    var self = this;
    setTimeout(() => {
      self.isSidenavOpen = !self.isMobile;
      self.sideNav.mode = self.isMobile ? 'over' : 'side';
    });
  }
  chatSideBarInit() {
    this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
    this.updateSidenav();
    this.screenSizeWatcher = this.media.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
      this.updateSidenav();
    });
  }
  toggleSideNav() {
    this.sideNav.opened = !this.sideNav.opened;
  }
 async getProducts(){
    var input ={
      "modelName":"Advertisement"
    }
    var res = await this.itHourService.executeByGet(input,false);
    this.products = res.apidata.Data
  }
}
