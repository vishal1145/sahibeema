import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatSidenav, MatDialog } from '@angular/material';
import { egretAnimations } from '../../shared/animations/egret-animations';
import { ChatService } from './chat.service';
import { ITHoursService } from 'providers/it-hours-service';

@Component({
  selector: 'app-chats',
  templateUrl: './app-chats.component.html',
  styleUrls: ['./app-chats.component.css'],
  animations: [egretAnimations],
  providers: [ITHoursService]
})
export class AppChatsComponent implements OnInit, OnDestroy {
  isMobile;
  screenSizeWatcher: Subscription;
  isSidenavOpen: Boolean = true;
  public viewMode: string = 'grid-view';
  public currentPage: any;
  prodId: any;
  image: any;
  products: any[]
  currentFile: any = '';
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
    public itHourService: ITHoursService
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
  async getProducts() {
    var input = {
      "modelName": "Advertisement"
    }
    var res = await this.itHourService.executeByGet(input, false);
    this.products = res.apidata.Data
  }

  setFile(element: any, id) {
    // $("#auth").show();
    this.prodId = id
    var self = this;
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
      self.products.push(data.Location);
      self.uploadToServer(data.Location);
      console.log("upload file");
    });
  }


  async   uploadToServer(url: string) {
    // const input = this.itHourService.prepareNodeJSRequestObject("Product", "ADDPRODUCTPHOTO", { Id: this.product.id, photo: url });
    var input = {
      "modelName": "Advertisement",
      "findQuery": {
        "_id": this.prodId
      },
      "updateQuery": {
        "$set": {
          "image": url
        }
      }
    }
    let res = await this.itHourService.executeByUpdate(input, false);
    // $("#auth").hide();
    if (res.isapisuccess && res.apidata && res.apidata.Data) {

      console.log("call image");
    }
  }
}
