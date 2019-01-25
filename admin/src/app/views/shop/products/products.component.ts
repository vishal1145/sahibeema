import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSnackBar, MatSidenav } from '@angular/material';
import { ShopService, CartItem } from '../shop.service';
import { Product } from '../../../shared/models/product.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { egretAnimations } from '../../../shared/animations/egret-animations';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { ITHoursService } from 'providers/it-hours-service';
import { DomSanitizer } from '@angular/platform-browser';

import * as _ from 'underscore';
declare var $: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [egretAnimations],
  providers : [ITHoursService]
})
export class ProductsComponent implements OnInit, OnDestroy {
  public isSideNavOpen: boolean;
  public viewMode: string = 'grid-view';
  public currentPage: any;
  @ViewChild(MatSidenav) private sideNav: MatSidenav;
 

  public products$: Observable<Product[]>;
  public categories$: Observable<any>;
  public activeCategory: string = 'all';
  public filterForm: FormGroup;
  public cart: CartItem[];
  public cartData: any;
  
  categories:any =[]
  products:any =[]
  data : any =[]
  youtubelink:any = []
  constructor(
    private shopService: ShopService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private loader: AppLoaderService,
    public itHourService:ITHoursService,
    private sanitizer: DomSanitizer
  
  ) { 
    this.getCategories()
    this.getProducts()
  }

  ngOnInit() {
    // this.categories$ = this.shopService.getCategories();
    this.buildFilterForm(this.shopService.initialFilters);
    
    setTimeout(() => {
      this.loader.open();
    });
    // this.products$ = this.shopService
    //   .getFilteredProduct(this.filterForm)
    //   .pipe(
    //     map(products => {
    //       this.loader.close();
    //       return products;
    //     })
    //   );
    this.getCart();
    this.cartData = this.shopService.cartData;
  }
  ngOnDestroy() {

  }
  getCart() {
    this.shopService
    .getCart()
    .subscribe(cart => {
      this.cart = cart;
    })
  }
  addToCart(product) {
    let cartItem: CartItem = {
      product: product,
      data: {
        quantity: 1
      }
    };
    this.shopService
    .addToCart(cartItem)
    .subscribe(cart => {
      this.cart = cart;
      this.snackBar.open('Product added to cart', 'OK', { duration: 4000 });
    })
  }

 async  getCategories(){
     var input = {
       "modelName":"Category"
     }
     var res = await this.itHourService.executeByGet(input,false);
     this.categories = res.apidata.Data
   // this.categories = _.filter(res.apidata.Data, function (num) { });

     this.categories.unshift({ _id: '', title: 'Please select one category' });
   
  }
  async  getProducts(){
    var input = {
      "modelName":"Product",
      "path" :"category"
    }
    var res = await this.itHourService.executeByGet(input,false);
    this.products = res.apidata.Data;
    this.data = this.products;
    this.loader.close();
    console.log(this.products)
    console.log(this.filterForm)
 }
  buildFilterForm(filterData:any = {}) {
    this.filterForm = this.fb.group({
      search: [''],
      category: ['all'],
      minPrice: [filterData.minPrice],
      maxPrice: [filterData.maxPrice],
      minRating: [filterData.minRating],
      maxRating: [filterData.maxRating]
    })
  }
 
  setActiveCategory(category) {
   if(category!="all"){
    this.products=[];
  for(var i =0;i<this.data.length;i++){
    if(this.data[i].category.title == category.title){
      this.products.push(this.data[i])
     
    }
  }
}
else{
  this.products = [];
  this.products = this.data
}
}

  toggleSideNav() {
    this.sideNav.opened = !this.sideNav.opened;
  }

  addProduct(data){
  var input ={
    "modelName" :"Product"
    
  }
  }

  onKey(event: any) { // without type info
  var value = event.target.value;
  var temp=this.products
  console.log(value)
   var self = this;
    if (self.products) {
    self.products = temp.filter(function(oneact) {
    return (oneact.title.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    })
    } else {
     self.products = temp
    }
    console.log(self.products)
  }
  




// Confirmation(confirm) {
//   if (confirm == "1") {
//       if (!this.selectcategory || this.selectcategory.length <= 0) {
//           this.itHourService.showErrorMessage("SELECTCAREGORY","");
//           return;
//       }

//       if (!this.Title || this.Title == '') {
//            this.itHourService.showErrorMessage("ENTERTITLE","");
//            return;
//       }
//       if (this.embedmode) {
//            this.uploadToServer(this.youtubelink.changingThisBreaksApplicationSecurity, this.Title, this.selectcategory)
//        }
       
//      //  else {

//       //     if (!this.items || this.items.length <= 0) {
//       //         this.itHoursService.showErrorMessage("ENTERTEXT");
//       //         return;
//       //     }

//       //     this.tagtext = this.items;
//       //     this.uploadVideo();


//       // }
//   }
//   if (confirm == "0") {
//       $('#conformvideo').hide();
//   }

// }
// async uploadToServer(videourl, videotitle, category) {
//   //if (embed)
//   //     this.tagtext = [];
//   // var self = this;
//   // var subcatename = [{ id: this.selectcategory }];
//   // for (var cat = 0; cat < this.selectsubcategory.length; cat++) {
//   //     subcatename.push({ id: this.selectsubcategory[cat] });
//   // }
//   // var category: any = subcatename;
//   // var input = self.itHoursService.prepareNodeJSRequestObject("Video", "UPLOADVIDEO", {
//   //     url: video,
//   //     postby: self.user._id,
//   //     mediaType: "2",
//   //     status: 'UPLOADED',
//   //     poster: posterimage,
//   //     category: category,
//   //     tags: this.tagtext,
//   //     discription: '',
//   //     title: this.Title,
//   //     embed: embed
//   // });

//   var input = {
//     "modelName":"Product",
//     "title": videotitle,
//     "category" : category,
//     "media":{
//        "mediaurl": videourl
//   }
//   }
//   var res = await this.itHourService.executeByPost(input,false);
//   console.log(res)
//   $('#conformvideo').hide()
// }
updateSrc(url) {
  url = this.itHourService.getyoutubeid(url, { fuzzy: false })
  if (url && url.length == 11)
      this.youtubelink.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + url));
}
}