webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_it_hours_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AboutComponent = class AboutComponent {
    //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,) .
    constructor(_ngZone, activatedRoute, router, titleService, itHoursService) {
        this._ngZone = _ngZone;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.itHoursService = itHoursService;
        this.setTitle();
    }
    setTitle() {
        this.titleService.setTitle('हमारे बारे में');
    }
};
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-team app-root',
        template: __webpack_require__(646),
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _e) || Object])
], AboutComponent);
var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/about.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};






let ArticleComponent = class ArticleComponent {
    constructor(_ngZone, activatedRoute, router, itHoursService, titleService, _sanitizer) {
        this._ngZone = _ngZone;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itHoursService = itHoursService;
        this.titleService = titleService;
        this._sanitizer = _sanitizer;
        this.articledata = [];
        this.data = [];
        this.newarticle = [];
        this.articaltegs = [];
        this._htmlProperty1 = [];
        this.newpost = [];
        this.allArticlas = [];
        this.getArticles();
    }
    setTitle(newTitle) {
    }
    ngOnInit() {
    }
    singlename(art) {
        return __awaiter(this, void 0, void 0, function* () {
            var idbase = {
                "modelName": "Article",
                "findQuery": {
                    "category": art._id
                }
            };
            // let iddata = await this.itHoursService.executeByGet(idbase, false);
            // console.log(iddata)
            // var no = iddata.apidata.Data.length -1;
            // var id = iddata.apidata.Data[no]._id
            this.router.navigate(['/articlesingle/' + art._id]);
        });
    }
    articlesingle() {
    }
    filterArticalthroughTag(catname) {
        this.newarticle = [];
        for (var i = 0; i < (this.allArticlas || []).length; i++) {
            for (var j = 0; j < (this.allArticlas[i].tags || []).length; j++) {
                if (this.allArticlas[i].tags[j] == catname) {
                    this.newarticle.push(this.allArticlas[i]);
                }
            }
        }
        for (var k = 0; k < this.newarticle.length; k++) {
            this.newarticle[k].description_new = this._sanitizer.bypassSecurityTrustHtml(this.newarticle[k].description);
        }
    }
    catgoriesbase(catID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.newarticle = [];
            for (var i = 0; i < (this.allArticlas || []).length; i++) {
                if (this.allArticlas[i].category == catID) {
                    this.newarticle.push(this.allArticlas[i]);
                }
            }
            for (var i = 0; i < this.newarticle.length; i++) {
                this.newarticle[i].description_new = this._sanitizer.bypassSecurityTrustHtml(this.newarticle[i].description);
            }
        });
    }
    getArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            var input = {
                "modelName": "Article",
            };
            var articles = yield this.itHoursService.executeByGet(input, false);
            this.allArticlas = articles.apidata.Data;
            console.log(articles);
            for (var i = 0; i < articles.apidata.Data.length; i++) {
                articles.apidata.Data[i].created_at = new Date(articles.apidata.Data[i].created_at);
            }
            this.newarticle = articles.apidata.Data;
            for (var i = 0; i < this.newarticle.length; i++) {
                this.newarticle[i].description_new = this._sanitizer.bypassSecurityTrustHtml(this.newarticle[i].description);
            }
            var input = {
                "modelName": "Product",
            };
            let addres = yield this.itHoursService.executeByGet(input, false);
            this.newvalue = addres.apidata.Data;
            this.mediaurl = this.newvalue[0].media.mediaurl;
            this.titleService.setTitle('article');
            var newinput = {
                "modelName": "Article",
            };
            var newarticle = yield this.itHoursService.executeByGet(newinput, false);
            console.log(newarticle);
            //this.newpost = newarticle.apidata.Data;
            for (var i = 0; i < 4; i++) {
                if (newarticle.apidata.Data[i])
                    this.newpost.push(newarticle.apidata.Data[i]);
            }
            var input = {
                "modelName": "Category"
            };
            let res = yield this.itHoursService.executeByGet(input, false);
            console.log(res);
            this.data = res.apidata.Data;
            var postdata = {
                "modelName": "ArticleCategory"
            };
            var postcategories = yield this.itHoursService.executeByGet(postdata, false);
            console.log(postcategories);
            this.idtext = postcategories.apidata.Data;
            for (var i = 0; i < this.idtext.length; i++) {
                this.articaltegs.push(this.idtext[i].name);
            }
        });
    }
    addLikes(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var likesadd = {
                "modelName": "Article",
                "findQuery": {
                    _id: id
                }
            };
            var newlikes = yield this.itHoursService.executeByGet(likesadd, false);
            for (var i = 0; i < this.newarticle.length; i++) {
                if (this.newarticle[i]._id == id) {
                    this.newarticle[i].likes.push(newlikes.apidata.Data[0].likes + 1);
                }
            }
        });
    }
};
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-article app-root',
        template: __webpack_require__(648),
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _f) || Object])
], ArticleComponent);
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/article.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};






let ArticlesingleComponent = class ArticlesingleComponent {
    constructor(_ngZone, activatedRoute, router, _sanitizer, titleService, itHoursService) {
        this._ngZone = _ngZone;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.titleService = titleService;
        this.itHoursService = itHoursService;
        this.one_art = {};
        this.newpost = [];
        this.activatedRoute.params.subscribe((params) => {
            this.id = params['article_id'];
        });
        this.getArticles();
    }
    setTitle(newTitle) {
    }
    ngOnInit() {
    }
    getArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            var newinput = {
                "modelName": "Article",
            };
            var newarticle = yield this.itHoursService.executeByGet(newinput, false);
            console.log(newarticle);
            //this.newpost = newarticle.apidata.Data;
            for (var i = 0; i < 4; i++) {
                if (newarticle.apidata.Data[i])
                    this.newpost.push(newarticle.apidata.Data[i]);
            }
            var input = {
                "modelName": "Product",
            };
            let addres = yield this.itHoursService.executeByGet(input, false);
            console.log(addres);
            this.newvalue = addres.apidata.Data;
            this.mediaurl = this.newvalue[0].media.mediaurl;
            var postdata = {
                "modelName": "ArticleCategory"
            };
            var postcategories = yield this.itHoursService.executeByGet(postdata, false);
            console.log(postcategories);
            this.idtext = postcategories.apidata.Data;
            this.titleService.setTitle('articlesingle');
            var input1 = {
                "modelName": "Article",
                "findQuery": {
                    _id: this.id
                }
            };
            var one_art = yield this.itHoursService.executeByGet(input1, false);
            this.one_art.date = new Date(one_art.apidata.Data[0].created_at);
            this.one_art.image = one_art.apidata.Data[0].image;
            this.one_art.title = one_art.apidata.Data[0].posttitle;
            this.one_art.likes = one_art.apidata.Data[0].likes;
            this.one_art.description = this._sanitizer.bypassSecurityTrustHtml(one_art.apidata.Data[0].description);
        });
    }
};
ArticlesingleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-article app-root',
        template: __webpack_require__(649),
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _f) || Object])
], ArticlesingleComponent);
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/articlesingle.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};





let CategoryComponent = class CategoryComponent {
    constructor(_ngZone, activatedRoute, router, titleService, itHoursService) {
        this._ngZone = _ngZone;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.itHoursService = itHoursService;
        this.activatedRoute.params.subscribe((params) => {
            this.id = params['beema_id'];
        });
        this.getProduct();
    }
    setTitle(newTitle) {
    }
    ngOnInit() {
    }
    getProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            var input = {
                "modelName": "Product",
                "findQuery": {
                    "category": this.id
                }
            };
            let addres = yield this.itHoursService.executeByGet(input, false);
            console.log(addres);
            this.addproduct = addres.apidata.Data;
            var input11 = {
                "modelName": "Category",
                "findQuery": {
                    _id: this.id
                }
            };
            let categ = yield this.itHoursService.executeByGet(input11, false);
            this.category = categ.apidata.Data[0].title;
            this.titleService.setTitle('वर्ग');
        });
    }
};
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-article app-root',
        template: __webpack_require__(650),
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _e) || Object])
], CategoryComponent);
var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/category.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ContactComponent = class ContactComponent {
    //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,)
    constructor(_ngZone, activatedRoute, router, titleService, itHoursService) {
        this._ngZone = _ngZone;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.itHoursService = itHoursService;
        this.setTitle();
    }
    setTitle() {
        this.titleService.setTitle('सम्पर्क');
    }
};
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-contact app-root',
        template: __webpack_require__(651),
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _e) || Object])
], ContactComponent);
var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/contact.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};



let IndexComponent = class IndexComponent {
    constructor(itHoursService, router) {
        this.itHoursService = itHoursService;
        this.router = router;
        //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,) .
        this.data = [];
        this.newartical = [];
        this.highlights = [];
        this.value = [];
        this.mediaurl = [];
        this.getCategory();
        $('#myModal').show('');
    }
    ngOnInit() {
        //UseEffects();
    }
    getId(cat) {
        return __awaiter(this, void 0, void 0, function* () {
            var Product = {
                "modelName": "Product",
                "findQuery": {
                    "category": cat._id
                }
            };
            // let productbycategory = await this.itHoursService.executeByGet(product, false);
            // console.log(productbycategory)
            // var no = productbycategory.apidata.Data.length - 1;
            // var id = productbycategory.apidata.Data[no]._id
            this.router.navigate(['/product/' + cat._id]);
        });
    }
    openModalForStock(data) {
        this.url = data.media.mediaurl;
        this.highlights = data.highlights;
        $("#materialStockModel").show();
    }
    closeTrackModel() {
        $("#materialStockModel").hide();
    }
    getCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            var input = {
                "modelName": "Category"
            };
            let res = yield this.itHoursService.executeByGet(input, false);
            console.log(res);
            this.data = res.apidata.Data;
            var getArticle = {
                "modelName": "Article"
            };
            let articles = yield this.itHoursService.executeByGet(getArticle, false);
            console.log(articles);
            this.newblock = articles.apidata.Data;
            this.half_article = this.newblock.slice(0, 4);
            for (var i = 0; i < this.half_article.length; i++) {
                this.half_article[i].date = new Date(this.half_article[i].created_at);
            }
            console.log(this.half_article);
            var Provideo = {
                "modelName": "Product",
            };
            let resdata = yield this.itHoursService.executeByGet(Provideo, false);
            console.log(resdata);
            this.articlevideo = resdata.apidata.Data;
            for (var i = 0; i < this.articlevideo.length; i++) {
                if (this.articlevideo[i].showhomepage) {
                    this.articlevideo[i].youtube_id = this.itHoursService.getyoutubeid(this.articlevideo[i].media.mediaurl, { fuzzy: false });
                    this.value.push(this.articlevideo[i]);
                }
            }
            var addArticle = {
                "modelName": "Advertisement"
            };
            let addblock = yield this.itHoursService.executeByGet(addArticle, false);
            console.log(addblock);
            this.blockadd = addblock.apidata.Data;
            this.nameblock = this.getImage('homepage', 'side', addblock); //this.blockadd[4].image
            this.newadd = this.blockadd[1].image;
            this.addnew1 = this.getImage('homepage', 'midscreen', addblock); //this.blockadd[2].image
        });
    }
    article() {
        this.router.navigate(['article']);
    }
    getImage(pagename, area, allimages) {
        console.log(allimages);
        this.allimagedata = allimages.apidata.Data;
        for (var i = 0; i < this.allimagedata.length; i++) {
            if (this.allimagedata[i].page == pagename && this.allimagedata[i].area == area) {
                return this.allimagedata[i].image;
            }
        }
    }
    addLikes(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var likesadd = {
                "modelName": "Article",
                "findQuery": {
                    _id: id
                }
            };
            var newlikes = yield this.itHoursService.executeByGet(likesadd, false);
            for (var i = 0; i < this.half_article.length; i++) {
                if (this.half_article[i]._id == id) {
                    this.half_article[i].likes.push(newlikes.apidata.Data[0].likes + 1);
                }
            }
        });
    }
};
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__(653),
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
], IndexComponent);
var _a, _b;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/index.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};





let ProductComponent = class ProductComponent {
    constructor(itHoursService, activatedRoute, _sanitizer, titleService, router) {
        this.itHoursService = itHoursService;
        this.activatedRoute = activatedRoute;
        this._sanitizer = _sanitizer;
        this.titleService = titleService;
        this.router = router;
        //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,)
        this.data = [];
        this.value = [];
        this.isShow = false;
        this.categoryid = {};
        this.rel_prod = [];
        this.allProductList = [];
        this.findQuery = {
            category: this.id
        };
        // this.activatedRoute.queryParams.subscribe(params => {
        //   this.id = params['beema_id'];
        // });
        this.activatedRoute.params.subscribe((params) => {
            this.id = params['data_id'];
        });
        this.getProduct();
    }
    setTitle(newTitle) {
    }
    article() {
        this.router.navigate(['article']);
    }
    goToArtical(astId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.navigate(['articlesingle/' + astId]);
        });
    }
    getProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            var productbyid = {
                "modelName": "Product",
                "findQuery": {
                    "category": this.id,
                },
                "path": "category"
            };
            let productbycategory = yield this.itHoursService.executeByGet(productbyid, false);
            this.allProductList = productbycategory.apidata.Data;
            this.id = productbycategory.apidata.Data[0]._id;
            console.log(productbycategory);
            this.mediaurl = productbycategory.apidata.Data[0].media.mediaurl;
            this.categoryid = productbycategory.apidata.Data[0].category;
            this.titleService.setTitle('उत्पाद');
            this.highlights = productbycategory.apidata.Data[0].highlights;
            if (this.highlights.length != 0) {
                this.isShow = true;
            }
            var input = {
                "modelName": "Product",
                "findQuery": {
                    "category": this.categoryid._id
                }
            };
            let res = yield this.itHoursService.executeByGet(input, false);
            console.log(res);
            this.value = res.apidata.Data;
            // this._htmlProperty1 = this._sanitizer.bypassSecurityTrustHtml(this.value);
            //this.highlights = this.value[0].highlights[0]
            var getArticle = {
                "modelName": "Article"
            };
            let articles = yield this.itHoursService.executeByGet(getArticle, false);
            console.log(articles);
            this.newblock = articles.apidata.Data;
            this.half_article = this.newblock.slice(0, 4);
            for (var i = 0; i < this.half_article.length; i++) {
                this.half_article[i].date = new Date(this.half_article[i].created_at);
            }
            console.log(this.half_article);
            var input11 = {
                "modelName": "Category"
            };
            let raj = yield this.itHoursService.executeByGet(input11, false);
            console.log(raj);
            this.data = raj.apidata.Data;
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i]._id == this.id) {
                    this.productdetails = this.data[i];
                    this._htmlProperty1 = this._sanitizer.bypassSecurityTrustHtml(this.productdetails.important_facts);
                    this._htmlProperty2 = this._sanitizer.bypassSecurityTrustHtml(this.productdetails.insurance_type);
                    this._htmlProperty3 = this._sanitizer.bypassSecurityTrustHtml(this.productdetails.biggest_ins_company);
                }
            }
            var newproduct = {
                "modelName": "Product",
                "findQuery": {
                    "category": this.categoryid._id,
                    "_id": {
                        "$ne": this.id
                    }
                }
            };
            let productbynewcategory = yield this.itHoursService.executeByGet(newproduct, false);
            this.rel_prod = productbynewcategory.apidata.Data;
            var addArticle = {
                "modelName": "Advertisement"
            };
            let addblock = yield this.itHoursService.executeByGet(addArticle, false);
            console.log(addblock);
            this.blockadd = addblock.apidata.Data;
            this.nameblock = this.getImage('product', 'side', addblock); // this.blockadd[4].image
            this.newadd = this.blockadd[1].image;
            this.addnew1 = this.getImage('product', 'midscreen', addblock);
        });
    }
    getImage(pagename, area, allimages) {
        console.log(allimages);
        this.allimagedata = allimages.apidata.Data;
        for (var i = 0; i < this.allimagedata.length; i++) {
            if (this.allimagedata[i].page == pagename && this.allimagedata[i].area == area) {
                return this.allimagedata[i].image;
            }
        }
    }
    getProdetailsonclick(proId) {
        for (var i = 0; i < this.allProductList.length; i++) {
            if (this.allProductList[i]._id == proId) {
                this.mediaurl = this.allProductList[i].media.mediaurl;
                this.categoryid = this.allProductList[i].category;
                this.titleService.setTitle('उत्पाद');
                this.highlights = this.allProductList[i].highlights;
                if (this.highlights.length != 0) {
                    this.isShow = true;
                }
            }
        }
    }
};
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-product app-root',
        template: __webpack_require__(655),
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _e) || Object])
], ProductComponent);
var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/product.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let TeamComponent = class TeamComponent {
    //constructor( private _ngZone: NgZone,private activatedRoute: ActivatedRoute, private router: Router,)
    constructor(_ngZone, activatedRoute, router, titleService, itHoursService) {
        this._ngZone = _ngZone;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.itHoursService = itHoursService;
        this.setTitle();
    }
    setTitle() {
        this.titleService.setTitle('team');
    }
};
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-team app-root',
        template: __webpack_require__(656),
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _e) || Object])
], TeamComponent);
var _a, _b, _c, _d, _e;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/team.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseURL: 'http://157.230.57.197:9010/'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/environment.js.map

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 372;


/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(486);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITHoursService; });
/* unused harmony export Keys */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};



let ITHoursService = class ITHoursService {
    constructor(http) {
        this.http = http;
    }
    getAPIBaseURL() {
        console.log("env value is " + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBaseURL);
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiBaseURL;
    }
    getUrl(append) {
        return this.getAPIBaseURL() + append;
    }
    getCRUDSharedUrl() {
        return this.getUrl("api/crud");
    }
    getSharedUrl() {
        return this.getUrl("api/crud/GET");
    }
    getHeaders() {
        let headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('UserId', '12345');
        headers.append('DeviceId', '12345');
        return headers;
    }
    //ShowErrorAlert() {
    //    $("#error").fadeTo(2000, 500).slideUp(500, function () {
    //        $("#error").slideUp(500);
    //    });
    //}
    //ShowSuccessAlert() {
    //    $("#sucess").fadeTo(2000, 500).slideUp(500, function () {
    //        $("#sucess").slideUp(500);
    //    });
    //}
    prepareNodeJSRequestObject(prcId, opId, data) {
        var toSend = {
            PRCID: prcId,
            Method: opId
        };
        if (data)
            toSend.Data = data;
        else
            toSend.Data = {};
        return toSend;
    }
    prepareRequestObject(prcId, keyvaluepair) {
        var inputData = {};
        inputData.PRCID = "VALUSR";
        inputData.DataArray = [];
        inputData.DataArray.push({ Key: "EmailId", Value: "sdsfdfd" });
        inputData.DataArray.push({ Key: "Password", Value: "sdsfdfd" });
        return inputData;
    }
    executeByPost(inputData, showload = true) {
        return __awaiter(this, void 0, void 0, function* () {
            var sharedCRUD = this.getCRUDSharedUrl() + "/ADD";
            const apiresponse = yield this.http.post(sharedCRUD, inputData).toPromise();
            if (apiresponse)
                return { isapisuccess: true, apidata: apiresponse.json() };
            else
                return { isapisuccess: false, apidata: null };
        });
    }
    executeByGet(inputData, showload = true) {
        return __awaiter(this, void 0, void 0, function* () {
            var sharedCRUD = this.getCRUDSharedUrl() + "/GET";
            const apiresponse = yield this.http.post(sharedCRUD, inputData).toPromise();
            if (apiresponse)
                return { isapisuccess: true, apidata: apiresponse.json() };
            else
                return { isapisuccess: false, apidata: null };
        });
    }
    getyoutubeid(url, opts) {
        //function (url, opts) {
        if (opts == undefined) {
            opts = { fuzzy: true };
        }
        if (/youtu\.?be/.test(url)) {
            // Look first for known patterns
            var i;
            var patterns = [
                /youtu\.be\/([^#\&\?]{11})/,
                /\?v=([^#\&\?]{11})/,
                /\&v=([^#\&\?]{11})/,
                /embed\/([^#\&\?]{11})/,
                /\/v\/([^#\&\?]{11})/ // /v/<id>
            ];
            // If any pattern matches, return the ID
            for (i = 0; i < patterns.length; ++i) {
                if (patterns[i].test(url)) {
                    return patterns[i].exec(url)[1];
                }
            }
            if (opts.fuzzy) {
                // If that fails, break it apart by certain characters and look 
                // for the 11 character key
                var tokens = url.split(/[\/\&\?=#\.\s]/g);
                for (i = 0; i < tokens.length; ++i) {
                    if (/^[^#\&\?]{11}$/.test(tokens[i])) {
                        return tokens[i];
                    }
                }
            }
        }
        return null;
    }
    setObject(key, obj) {
        window.localStorage.setItem(key, JSON.stringify(obj));
    }
    getObject(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    SplitToArray(data) {
        var FirstCats = [];
        var SecondCats = [];
        var len = data.length;
        var counter;
        if (len % 2 == 1)
            counter = (len + 1) / 2;
        else
            counter = len / 2;
        for (var i = 0; i < counter; i++) {
            FirstCats.push(data[i]);
        }
        for (var j = counter; j < data.length; j++) {
            SecondCats.push(data[j]);
        }
        var imageArray = {
            FirstCats: FirstCats,
            SecondCats: SecondCats
        };
        return imageArray;
    }
    ConvertTo2DArray(data, colcount) {
        var productList = [];
        var counter = 0;
        for (var i = 0; i < data.length; i = i + colcount) {
            var row = [];
            for (var j = 0; j < colcount; j++) {
                if (counter >= data.length)
                    break;
                row.push(data[counter]);
                counter++;
            }
            productList.push(row);
        }
        return productList;
    }
    SetUpAWS() {
        var albumBucketName = '';
        var bucketRegion = '';
        var IdentityPoolId = '';
        AWS.config.update({
            region: 'us-west-2',
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
            })
        });
        return new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: albumBucketName }
        });
    }
    showErrorMessage(title, test) {
        swal({
            title: title,
            text: test,
            type: 'error',
            confirmButtonClass: 'btn btn-info',
            buttonsStyling: false
        });
    }
    showSuccessMessage(title, test) {
        swal({
            title: title,
            text: test,
            type: 'success',
            confirmButtonClass: 'btn btn-info',
            buttonsStyling: false
        });
    }
    conformationMessage(text1, text2) {
        return new Promise(resolve => {
            swal({
                title: text1,
                text: text2,
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes',
                buttonsStyling: false
            }).then(function () {
                resolve(true);
                //cb(true);
                //swal({
                //    title: 'Deleted!',
                //    text: text2,
                //    type: 'success',
                //    confirmButtonClass: 'btn btn-success',
                //    buttonsStyling: false
                //});
            });
        });
    }
    confirmMessage(text1, text2) {
        return new Promise(resolve => {
            swal({
                title: text1,
                text: text2,
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            }).then(function () {
                resolve(true);
            });
        });
    }
    getRandomPassword() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
    generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
    ;
    getAWSObj() {
        var albumBucketName = 'dolphino';
        var bucketRegion = 'us-west-2';
        var IdentityPoolId = 'us-west-2:ff182092-2a76-489c-9d58-45ba742d9e7d';
        AWS.config.update({
            region: 'us-west-2',
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
            })
        });
        return new AWS.S3({
            apiVersion: '2012-10-17',
            params: { Bucket: albumBucketName }
        });
    }
    logError(exception) {
    }
    getYouTubeVideoIdFromUrl(url) {
        if (url)
            return url.replace("https://www.youtube.com/embed/", "");
        else
            return "ru0K8uYEZWw";
    }
    getYouTubePosterByVideoId(url) {
        return "https://img.youtube.com/vi/" + this.getYouTubeVideoIdFromUrl(url) + "/sddefault.jpg";
    }
};
ITHoursService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
], ITHoursService);
var Keys;
(function (Keys) {
    Keys[Keys["User"] = 0] = "User";
})(Keys || (Keys = {}));
var _a;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/it-hours-service.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_team_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__article_article_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__articlesingle_articlesingle_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_category_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_2__index_index_component__["a" /* IndexComponent */] },
    { path: 'product/:data_id', component: __WEBPACK_IMPORTED_MODULE_3__product_product_component__["a" /* ProductComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_4__team_team_component__["a" /* TeamComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'article', component: __WEBPACK_IMPORTED_MODULE_6__article_article_component__["a" /* ArticleComponent */] },
    { path: 'articlesingle/:article_id', component: __WEBPACK_IMPORTED_MODULE_7__articlesingle_articlesingle_component__["a" /* ArticlesingleComponent */] },
    { path: 'category/:beema_id', component: __WEBPACK_IMPORTED_MODULE_8__category_category_component__["a" /* CategoryComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    }), 
    __metadata('design:paramtypes', [])
], AppRoutingModule);
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/app-routing.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(647),
        styles: [__webpack_require__(645)],
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/app.component.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_index_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_product_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__team_team_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_article_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__articlesingle_articlesingle_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_common_module__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__category_category_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_8__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_9__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__articlesingle_articlesingle_component__["a" /* ArticlesingleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13__providers_common_module__["a" /* ITCommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/app.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_providers_it_hours_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};




let FooterComponent = class FooterComponent {
    constructor(_ngZone, activatedRoute, router, itHourService) {
        this._ngZone = _ngZone;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itHourService = itHourService;
        this.cat = [];
        this.getCategory();
    }
    ngOnInit() {
    }
    indexfun() {
        this.router.navigate(['about']);
    }
    funcall() {
        this.router.navigate(['team']);
    }
    getCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            var input = {
                "modelName": "Category"
            };
            var res = yield this.itHourService.executeByGet(input, false);
            this.cat = res.apidata.Data;
        });
    }
};
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-footer-cmp',
        template: __webpack_require__(652),
        providers: [__WEBPACK_IMPORTED_MODULE_2_providers_it_hours_service__["a" /* ITHoursService */]]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_providers_it_hours_service__["a" /* ITHoursService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_providers_it_hours_service__["a" /* ITHoursService */]) === 'function' && _d) || Object])
], FooterComponent);
var _a, _b, _c, _d;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/footer.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let NavbarComponent = class NavbarComponent {
    constructor(_ngZone, activatedRoute, router) {
        this._ngZone = _ngZone;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
    }
    myfunction() {
        this.router.navigate(['about']);
    }
    contactfun() {
        this.router.navigate(['contact']);
    }
    indexfun() {
        this.router.navigate(['index']);
    }
};
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-navbar-cmp',
        template: __webpack_require__(654)
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
], NavbarComponent);
var _a, _b, _c;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/navbar.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_safeurl__ = __webpack_require__(490);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITCommonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ITCommonModule = class ITCommonModule {
};
ITCommonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__providers_safeurl__["a" /* SafePipe */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__providers_safeurl__["a" /* SafePipe */]
        ]
    }), 
    __metadata('design:paramtypes', [])
], ITCommonModule);
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/common.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SafePipe = class SafePipe {
    //today: any;
    constructor(sanitizer, _ngZone) {
        this.sanitizer = sanitizer;
        this._ngZone = _ngZone;
        //  this.today = moment.utc(new Date());
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
        name: 'safe'
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _b) || Object])
], SafePipe);
var _a, _b;
//# sourceMappingURL=D:/ClientSource/sahibeema/public/src/safeurl.js.map

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "<section class=\"blog-banner-area relative\" id=\"home\" style=\"background-image:url(./assets/img/about.jpg)\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n                <div class=\"row  text-center d-flex align-items-center justify-content-center\" style=\"height:400px\">\r\n            <div class=\"banner-content col-lg-9 col-md-12\">\r\n                <h1 class=\"text-uppercase\">\r\n                    हमारे बारे में \r\n                </h1>\r\n                <p class=\"text-white\">सही बीमा के बारे में जाने  </p>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"post-content-area\">\r\n\t\t<div class=\"container\">\r\n                    <br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-8 posts-list\">\r\n\t\t\t\t\t<div class=\"single-post row\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 \">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<a class=\"posts-title\" href=\"blog-single.html\"><h3 style=\"color:#3face4; font-weight: bold\">हमारे बारे में </h3></a>\r\n                                                       \r\n                                                    \r\n                                                        <br>\r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                                    \r\n                                    <a href=\"\" class=\"imgview\" ><img class=\"img\" src=\"./assets/img/g2.jpg\" style=\"width:189px\"/><img src=\"./assets/img/lens.png\" class=\"lens\"/></a>\r\n                                    <a href=\"\" class=\"imgview\"><img class=\"img\" src=\"./assets/img/g2.jpg\" style=\"width:189px\"/><img src=\"./assets/img/lens.png\" class=\"lens\"/></a>\r\n                                    <a href=\"./assets/img/g2.jpg\" class=\"imgview\"><img class=\"img\" src=\"./assets/img/g2.jpg\" style=\"width:189px\"/><img src=\"./assets/img/lens.png\" class=\"lens\"/></a>\r\n                                    \r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 sidebar-widgets\">\r\n\t\t\t\t\t<div class=\"widget-wrap\">\r\n\t\t\t\t\t\t<div class=\"single-sidebar-widget popular-post-widget\">\r\n\t\t\t\t\t\t\t<h4 class=\"popular-title\">कुछ पिक्चर्स </h4>\r\n\t\t\t\t\t\t\t<div class=\"popular-post-list row\">\r\n\t\t\t\t\t\t\t\t<div class=\" col-6 align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/pp1.jpg\" alt=\"\" style=\"width: 100%; margin-bottom: 20px\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-6 align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/pp2.jpg\" alt=\"\" style=\"width: 100%; margin-bottom: 20px\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n                                                            \r\n                                                            <div class=\" col-6 align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/pp3.jpg\" alt=\"\" style=\"width: 100%; margin-bottom: 20px\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-6 align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/pp4.jpg\" alt=\"\" style=\"width: 100%; margin-bottom: 20px\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n                                            <div class=\"single-sidebar-widget ads-widget\">\r\n                                                <a href=\"#\"><img class=\"img-fluid\" src=\"./assets/img/ad_4.jpeg\" alt=\"\"></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    </section>\r\n    \r\n\r\n\r\n    <section class=\"section-svm\" style=\"background: #f3f3f8; padding: 40px 0\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"svm-item\">\r\n                        <div class=\"svm-icon\" style=\"background: #0f9bf4;    height: 234px;\r\n                        line-height: 234px;\r\n                        width: 200px;\">\r\n                            <img src=\"./assets/img/aa.jpg\"/>\r\n                        </div>\r\n                        <div class=\"svm-detail\" id=\"story\">\r\n                            <h4>हमारी स्टोरी </h4>\r\n                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.</p>\r\n                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\t</p>\r\n                           \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"svm-item\">\r\n                        <div class=\"svm-icon\" style=\"background: #f4d10f;    height: 234px;\r\n                        line-height: 234px;\r\n                        width: 200px;\">\r\n                            <img src=\"./assets/img/vision.png\"/>\r\n                        </div>\r\n                        <div class=\"svm-detail\" id=\"vision\">\r\n                            <h4>विज़न  </h4>\r\n                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.</p>\r\n                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\t</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"svm-item\">\r\n                        <div class=\"svm-icon\" style=\"background: #51cd1b;    height: 234px;\r\n                        line-height: 234px;\r\n                        width: 200px;\">\r\n                            <img src=\"./assets/img/mission.png\"/>\r\n                        </div>\r\n                        <div class=\"svm-detail\" id=\"mission\">\r\n                            <h4>मिशन </h4>\r\n                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.</p>\r\n                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\t</p>\r\n                            <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\t</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section class=\"testimonial-area feedback\" style=\"height: 377px;\">\r\n                <div class=\"container\">\r\n                    <div class=\"row align-items-center\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                            <div class=\"main-title\">\r\n                                <h1>आपके फीडबैक </h1>\r\n            \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            \r\n                    <div class=\"row\">\r\n                       \r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                                    <div class=\"media-body\">\r\n            \r\n                                        <p style=\"margin-top:20px\">\r\n                                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                            printer, scanner, speaker, projector,\r\n                                            hardware.\r\n                                        </p>\r\n                                        <h5>Mark Alviro Wiens</h5>\r\n            \r\n                                        <p> CEO at Google</p>\r\n            \r\n                                    </div>\r\n            \r\n                                </div>\r\n            \r\n                            </div>\r\n            \r\n            \r\n                            <div class=\"col-md-4\">\r\n                                    <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n                \r\n                                            <p style=\"margin-top:20px\">\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h5>Lina Harrington</h5>\r\n                \r\n                                            <p> CEO at Google</p>\r\n                \r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                </div>\r\n            \r\n                                <div class=\"col-md-4\">\r\n                                        <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                            <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                                            <div class=\"media-body\">\r\n                    \r\n                                                <p style=\"margin-top:20px\">\r\n                                                    Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                    printer, scanner, speaker, projector,\r\n                                                    hardware.\r\n                                                </p>\r\n                                                <h5>Mark Alviro Wiens</h5>\r\n                    \r\n                                                <p> CEO at Google</p>\r\n                    \r\n                                            </div>\r\n                    \r\n                                        </div>\r\n                    \r\n                                    </div>\r\n            \r\n                                     <!-- <div class=\"col-md-4\">\r\n                                            <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                                <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                                <div class=\"media-body\">\r\n                        \r\n                                                    <p style=\"margin-top:20px\">\r\n                                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                        printer, scanner, speaker, projector,\r\n                                                        hardware.\r\n                                                    </p>\r\n                                                    <h5>Lina Harrington</h5>\r\n                        \r\n                                                    <p> CEO at Google</p>\r\n                        \r\n                                                </div>\r\n                        \r\n                                            </div>\r\n                        \r\n                                        </div>\r\n            \r\n            \r\n                          <div class=\"single-testimonial item d-flex flex-row\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <p>\r\n                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                        printer, scanner, speaker, projector,\r\n                                        hardware.\r\n                                    </p>\r\n                                    <h4 mt-30>Lina Harrington</h4>\r\n                                    <p class=\"mb-0\">CEO at Google</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"single-testimonial item d-flex flex-row\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/user1.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <p>\r\n                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                        printer, scanner, speaker, projector,\r\n                                        hardware.\r\n                                    </p>\r\n                                    <h4 mt-30>Mark Alviro Wiens</h4>\r\n                                    <p class=\"mb-0\">CEO at Google</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"single-testimonial item d-flex flex-row\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <p>\r\n                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                        printer, scanner, speaker, projector,\r\n                                        hardware.\r\n                                    </p>\r\n                                    <h4 mt-30>Lina Harrington</h4>\r\n                                    <p class=\"mb-0\">CEO at Google</p>\r\n                                </div>\r\n                            </div>-->\r\n                      \r\n                    </div>\r\n                </div>\r\n            </section> \r\n        <section class=\"section-subscribe\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                            <h3 style=\"text-align: center; font-weight: 600; margin-top: 40px; display: block; width: 100%\">न्यूज़लेटर सब्सक्राइब करे </h3>\r\n                            <div class=\"col-md-10\" style=\"float: none; margin: auto\">\r\n                            <div id=\"mc_embed_signup\">\r\n                                <form target=\"_blank\" novalidate=\"true\" action=\"https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01\"\r\n                                 method=\"get\" class=\"form-inline\">\r\n    \r\n                                    <div class=\"form-group row\" style=\"width: 100%\">\r\n                                        <div class=\"col-lg-9 col-md-9\">\r\n                                            <input name=\"EMAIL\" placeholder=\"Your Email Address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Your Email Address'\"\r\n                                             required=\"\" type=\"email\">\r\n                                            <div style=\"position: absolute; left: -5000px;\">\r\n                                                <input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\r\n                                            </div>\r\n                                        </div>\r\n    \r\n                                        <div class=\"col-lg-3 col-md-3\">\r\n                                            <button class=\"nw-btn primary-btn\">Subscribe<span class=\"lnr lnr-arrow-right\"></span></button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"info\"></div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n                </div>\r\n            </section>"

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<app-navbar-cmp></app-navbar-cmp>\r\n<router-outlet></router-outlet>\r\n<app-footer-cmp></app-footer-cmp>\r\n\r\n\r\n"

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = "<section class=\"blog-banner-area relative\" id=\"home\">\r\n\t<div class=\"overlay overlay-bg\"></div>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row  text-center d-flex align-items-center justify-content-center\" style=\"height:400px\">\r\n\t\t\t<div class=\"banner-content col-lg-9 col-md-12\">\r\n\t\t\t\t<h1 class=\"text-uppercase\">\r\n\t\t\t\t\tDude You’re Getting <br> a Telescope\r\n\t\t\t\t</h1>\r\n\t\t\t\t<p class=\"text-white\">There is a moment in the life of any aspiring astronomer that it is time to buy that first\r\n\t\t\t\t</p>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n\r\n<section class=\"post-content-area\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"widget-wrap\" style=\"background: transparent; border:none; padding: 0; margin: 10px 0\">\r\n\t\t\t\t\t<div class=\"single-sidebar-widget tag-cloud-widget\" style=\"padding: 0; margin: 0\">\r\n\r\n\t\t\t\t\t\t<ul *ngFor=\"let myfunc of articaltegs\">\r\n\t\t\t\t\t\t\t<li style=\"float:left\"><a (click)=\"filterArticalthroughTag(myfunc)\">{{myfunc}}</a></li>\r\n\t\t\t\t\t\t\t<!-- <li><a href=\"#\">Fashion</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Architecture</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Fashion</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Food</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Technology</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Lifestyle</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Art</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Adventure</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Food</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Lifestyle</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Adventure</a></li> -->\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t<div class=\"widget-wrap\">\r\n\t\t\t\t\t<div class=\"single-sidebar-widget post-category-widget\">\r\n\t\t\t\t\t\t<h4 class=\"category-title\">Catgories</h4>\r\n\t\t\t\t\t\t<ul class=\"cat-list\" *ngFor=\"let myfunc of data\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data\" (click)=\"catgoriesbase(myfunc._id)\"> {{myfunc.title}}</p>\r\n\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-6 posts-list\">\r\n\t\t\t\t<div class=\"single-post row\" *ngFor=\"let article of newarticle\">\r\n\r\n\t\t\t\t\t<div class=\"col-lg-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"feature-img\">\r\n\t\t\t\t\t\t\t<img class=\"img-fluid addvaluedata\" src=\"{{article.image}}\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t<a class=\"posts-title\" [href]=\"'/articlesingle/'+article._id\">\r\n\t\t\t\t\t\t\t\t\t<h3>{{article.posttitle}}</h3>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-2\" style=\"padding-top: 25px;\">\r\n\t\t\t\t\t\t\t\t<p><span class=\"lnr lnr-heart data\" style=\"margin-right: 10px;\" (click)=\"addLikes(article._id)\" *ngIf=\" article && article.likes && article.likes.length >= 0 \"></span>{{article.likes.length}} likes</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>{{article.type}}</p>\r\n\t\t\t\t\t\t<div class=\" meta-details\">\r\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<ul class=\"tags\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Food,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Technology,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Politics,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Lifestyle</a></li>\r\n\t\t\t\t\t\t\t</ul>-->\r\n\t\t\t\t\t\t\t<!-- <ul class=\"user-details\">\r\n                                                                \r\n\t\t\t\t\t\t\t\t<li class=\"user-name \"><span class=\"lnr lnr-user\"></span> <a href=\"#\">Mark wiens</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"date \"><span class=\"lnr lnr-calendar-full\"></span> <a href=\"#\">12 Dec, 2017</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"view\"><span class=\"lnr lnr-eye\"></span><a href=\"#\"> 1.2M Views</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"comments\"><span class=\"lnr lnr-bubble\"></span><a href=\"#\"> 06 Comments</a> </li>\r\n\t\t\t\t\t\t\t</ul> -->\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\r\n\t\t\t\t\t\t\t\t\t<p class=\"leftside\"><span class=\"lnr lnr-user\"></span> {{article.name}} </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\r\n\t\t\t\t\t\t\t\t\t<p class=\"leftside\"><span class=\"lnr lnr-calendar-full\"></span> {{article.created_at | date : \"dd MMM yyyy\"}}\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\r\n\t\t\t\t\t\t\t\t\t<p class=\"leftside\"><span class=\"lnr lnr-eye mr-1\" *ngIf=\" article && article.comments && article.comments.length >= 0 \"></span>{{article.comments.length}}\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\r\n\t\t\t\t\t\t\t\t\t<p class=\"leftside\"><span class=\"lnr lnr-bubble mr-1\" *ngIf=\" article && article.comments && article.comments.length >= 0 \"></span>{{article.comments.length}}\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t<p class=\"excert\" [innerHTML]=\"article.description_new\">\r\n\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<a (click)=\"singlename(article)\" class=\"primary-btn\">View More</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-post row\" *ngIf=\"newarticle.length == 0\"><span>No Artical Yet!</span></div>\r\n\t\t\t\t<!--\t<div class=\"single-post row\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 \">\r\n\t\t\t\t\t\t\t<div class=\"feature-img\">\r\n\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/feature-img1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a class=\"posts-title\" href=\"blog-single.html\"><h3>Astronomy Binoculars A Great Alternative</h3></a>\r\n                                                        <p>Life Insurance, Car Insurance</p>\r\n                                                        <div class=\" meta-details\">\r\n\t\t\t\t\t\t\t<ul class=\"tags\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Food,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Technology,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Politics,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Lifestyle</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<ul class=\"user-details \">\r\n                                                                \r\n\t\t\t\t\t\t\t\t<li class=\"user-name \"><span class=\"lnr lnr-user\"></span> <a href=\"#\">Mark wiens</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"date \"><span class=\"lnr lnr-calendar-full\"></span> <a href=\"#\">12 Dec, 2017</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"view\"><span class=\"lnr lnr-eye\"></span><a href=\"#\"> 1.2M Views</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"comments\"><span class=\"lnr lnr-bubble\"></span><a href=\"#\"> 06 Comments</a> </li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n                                                        \r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"primary-btn\">View More</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  <div class=\"single-post row\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 \">\r\n\t\t\t\t\t\t\t<div class=\"feature-img\">\r\n\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/feature-img1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a class=\"posts-title\" href=\"blog-single.html\"><h3>Astronomy Binoculars A Great Alternative</h3></a>\r\n                                                        <p>Life Insurance, Car Insurance</p>\r\n                                                        <div class=\" meta-details\">\r\n\t\t\t\t\t\t\t<ul class=\"tags\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Food,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Technology,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Politics,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Lifestyle</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<ul class=\"user-details \">\r\n                                                                \r\n\t\t\t\t\t\t\t\t<li class=\"user-name \"><span class=\"lnr lnr-user\"></span> <a href=\"#\">Mark wiens</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"date \"><span class=\"lnr lnr-calendar-full\"></span> <a href=\"#\">12 Dec, 2017</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"view\"><span class=\"lnr lnr-eye\"></span><a href=\"#\"> 1.2M Views</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"comments\"><span class=\"lnr lnr-bubble\"></span><a href=\"#\"> 06 Comments</a> </li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n                                                        \r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"primary-btn\">View More</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t\t\t<div class=\"single-post row\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 \">\r\n\t\t\t\t\t\t\t<div class=\"feature-img\">\r\n\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/feature-img1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a class=\"posts-title\" href=\"blog-single.html\"><h3>Astronomy Binoculars A Great Alternative</h3></a>\r\n                                                        <p>Life Insurance, Car Insurance</p>\r\n                                                        <div class=\" meta-details\">\r\n\t\t\t\t\t\t\t<ul class=\"tags\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Food,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Technology,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Politics,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Lifestyle</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<ul class=\"user-details \">\r\n                                                                \r\n\t\t\t\t\t\t\t\t<li class=\"user-name \"><span class=\"lnr lnr-user\"></span> <a href=\"#\">Mark wiens</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"date \"><span class=\"lnr lnr-calendar-full\"></span> <a href=\"#\">12 Dec, 2017</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"view\"><span class=\"lnr lnr-eye\"></span><a href=\"#\"> 1.2M Views</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"comments\"><span class=\"lnr lnr-bubble\"></span><a href=\"#\"> 06 Comments</a> </li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n                                                        \r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"primary-btn\">View More</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t<!-- <nav class=\"blog-pagination justify-content-center d-flex\">\r\n\t\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"page-link\" aria-label=\"Previous\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"lnr lnr-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"page-item\"><a href=\"#\" class=\"page-link\">01</a></li>\r\n\t\t\t\t\t\t<li class=\"page-item active\"><a href=\"#\" class=\"page-link\">02</a></li>\r\n\t\t\t\t\t\t<li class=\"page-item\"><a href=\"#\" class=\"page-link\">03</a></li>\r\n\t\t\t\t\t\t<li class=\"page-item\"><a href=\"#\" class=\"page-link\">04</a></li>\r\n\t\t\t\t\t\t<li class=\"page-item\"><a href=\"#\" class=\"page-link\">09</a></li>\r\n\t\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"page-link\" aria-label=\"Next\">\r\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"lnr lnr-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav> -->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4 sidebar-widgets\">\r\n\t\t\t\t<div class=\"widget-wrap\">\r\n\t\t\t\t\t<div class=\"single-sidebar-widget popular-post-widget\">\r\n\t\t\t\t\t\t<h4 class=\"popular-title\">Popular Posts</h4>\r\n\t\t\t\t\t\t<div class=\"popular-post-list\">\r\n\t\t\t\t\t\t\t<div class=\"single-post-list d-flex flex-row align-items-center\" *ngFor=\"let newpost of newpost\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid newvalue\" src={{newpost.image}} alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<h6>{{newpost.posttitle}}</h6>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<p>{{newpost.time}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- <div class=\"single-post-list d-flex flex-row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/pp2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog-single.html\"><h6>The Amazing Hubble</h6></a>\r\n\t\t\t\t\t\t\t\t\t\t<p>02 Hours ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t<div class=\"single-post-list d-flex flex-row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/pp3.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog-single.html\"><h6>Astronomy Or Astrology</h6></a>\r\n\t\t\t\t\t\t\t\t\t\t<p>02 Hours ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"single-post-list d-flex flex-row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/pp4.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog-single.html\"><h6>Asteroids telescope</h6></a>\r\n\t\t\t\t\t\t\t\t\t\t<p>02 Hours ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"single-sidebar-widget ads-widget\">\r\n\t\t\t\t\t\t<div class=\"single-news card\">\r\n\t\t\t\t\t\t\t<iframe class=\"card-top-img\" [src]=\"mediaurl | safe\" height=\"280\" frameborder=\"0\" allowfullscreen></iframe>\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"card-title\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\tExpert: इंश्योरेंस क्या है ... और क्यों लेना चाहिये ?\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</h4>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"single-sidebar-widget post-category-widget\">\r\n\t\t\t\t\t\t<h4 class=\"category-title\">Post Catgories</h4>\r\n\t\t\t\t\t\t<ul class=\"cat-list\" *ngFor=\"let myfunc of idtext\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t<p>{{myfunc.name}}</p>\r\n\t\t\t\t\t\t\t\t\t<p>37</p>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<!-- <li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t<p>Lifestyle</p>\r\n\t\t\t\t\t\t\t\t\t<p>24</p>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li> \r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t<p>Fashion</p>\r\n\t\t\t\t\t\t\t\t\t<p>59</p>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t<p>Art</p>\r\n\t\t\t\t\t\t\t\t\t<p>29</p>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li> \r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t<p>Food</p>\r\n\t\t\t\t\t\t\t\t\t<p>15</p>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li> \r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t<p>Architecture</p>\r\n\t\t\t\t\t\t\t\t\t<p>09</p>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li> \r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t<p>Adventure</p>\r\n\t\t\t\t\t\t\t\t\t<p>44</p>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>-->\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"single-sidebar-widget ads-widget\">\r\n\t\t\t\t\t\t<a href=\"#\"><img class=\"img-fluid\" src=\"./assets/img/ad_8.jpg\" alt=\"\"></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n<section class=\"testimonial-area feedback\" style=\"height: 377px;\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row align-items-center\">\r\n\t\t\t<div class=\"col-lg-12\" style=\"padding: 0\">\r\n\t\t\t\t<div class=\"main-title\">\r\n\t\t\t\t\t<h1>आपके फीडबैक </h1>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n\t\t\t\t\t<img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n\t\t\t\t\t<div class=\"media-body\">\r\n\r\n\t\t\t\t\t\t<p style=\"margin-top:20px\">\r\n\t\t\t\t\t\t\tAccessories Here you can find the best computer accessory for your laptop, monitor,\r\n\t\t\t\t\t\t\tprinter, scanner, speaker, projector,\r\n\t\t\t\t\t\t\thardware.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<h5>Mark Alviro Wiens</h5>\r\n\r\n\t\t\t\t\t\t<p> CEO at Google</p>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n\t\t\t\t\t<img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n\t\t\t\t\t<div class=\"media-body\">\r\n\r\n\t\t\t\t\t\t<p style=\"margin-top:20px\">\r\n\t\t\t\t\t\t\tAccessories Here you can find the best computer accessory for your laptop, monitor,\r\n\t\t\t\t\t\t\tprinter, scanner, speaker, projector,\r\n\t\t\t\t\t\t\thardware.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<h5>Lina Harrington</h5>\r\n\r\n\t\t\t\t\t\t<p> CEO at Google</p>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n\t\t\t\t\t<img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n\t\t\t\t\t<div class=\"media-body\">\r\n\r\n\t\t\t\t\t\t<p style=\"margin-top:20px\">\r\n\t\t\t\t\t\t\tAccessories Here you can find the best computer accessory for your laptop, monitor,\r\n\t\t\t\t\t\t\tprinter, scanner, speaker, projector,\r\n\t\t\t\t\t\t\thardware.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<h5>Mark Alviro Wiens</h5>\r\n\r\n\t\t\t\t\t\t<p> CEO at Google</p>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- <div class=\"col-md-4\">\r\n                                    <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n                \r\n                                            <p style=\"margin-top:20px\">\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h5>Lina Harrington</h5>\r\n                \r\n                                            <p> CEO at Google</p>\r\n                \r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                </div>\r\n    \r\n    \r\n                  <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Lina Harrington</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user1.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Mark Alviro Wiens</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Lina Harrington</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>-->\r\n\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n<section class=\"section-subscribe\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<h3 style=\"text-align: center; font-weight: 600; margin-top: 40px; display: block; width: 100%\">न्यूज़लेटर सब्सक्राइब\r\n\t\t\t\tकरे </h3>\r\n\t\t\t<div class=\"col-md-10\" style=\"float: none; margin: auto\">\r\n\t\t\t\t<div id=\"mc_embed_signup\">\r\n\t\t\t\t\t<form target=\"_blank\" novalidate=\"true\" action=\"https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01\"\r\n\t\t\t\t\t method=\"get\" class=\"form-inline\">\r\n\r\n\t\t\t\t\t\t<div class=\"form-group row\" style=\"width: 100%\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9\">\r\n\t\t\t\t\t\t\t\t<input name=\"EMAIL\" placeholder=\"Your Email Address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Your Email Address'\"\r\n\t\t\t\t\t\t\t\t required=\"\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<div style=\"position: absolute; left: -5000px;\">\r\n\t\t\t\t\t\t\t\t\t<input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\r\n\t\t\t\t\t\t\t\t<button class=\"nw-btn primary-btn\">Subscribe<span class=\"lnr lnr-arrow-right\"></span></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"info\"></div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = "<section class=\"blog-banner-area relative\" id=\"home\">\r\n    <div class=\"overlay overlay-bg\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row  text-center d-flex align-items-center justify-content-center\" style=\"height:400px\">\r\n            <div class=\"banner-content col-lg-9 col-md-12\">\r\n                <h1 class=\"text-uppercase\">\r\n                    Dude You’re Getting <br> a Telescope\r\n                </h1>\r\n                <p class=\"text-white\">There is a moment in the life of any aspiring astronomer that it is time to buy\r\n                    that first </p>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"post-content-area\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 posts-list\">\r\n                <div class=\"single-post row\">\r\n\r\n                    <div class=\"col-lg-12 col-md-12 \">\r\n                        <div class=\"feature-img\">\r\n                            <img class=\"img-fluid\" [src]=\"one_art.image\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                        <a class=\"posts-title\" href=\"\">\r\n                            <h3>{{one_art.title}}</h3>\r\n                        </a>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                        <p style=\"padding-top: 25px;\"><span class=\"lnr lnr-heart\" ></span>15 likes</p>\r\n\r\n                        </div>\r\n                        </div>\r\n                        <p>Life Insurance, Car Insurance</p>\r\n                        <div class=\" meta-details\">\r\n                            <!--\t\t\t\t\t\t\t<ul class=\"tags\">\r\n                            <li><a href=\"#\">Food,</a></li>\r\n                            <li><a href=\"#\">Technology,</a></li>\r\n                            <li><a href=\"#\">Politics,</a></li>\r\n                            <li><a href=\"#\">Lifestyle</a></li>\r\n                        </ul>-->\r\n                            <!-- <ul class=\"user-details \">\r\n\r\n                                <li class=\"user-name \"><span class=\"lnr lnr-user\"></span> <a href=\"#\">Mark wiens</a>\r\n                                </li>\r\n                                <li class=\"date \"><span class=\"lnr lnr-calendar-full\"></span> <a href=\"#\">12 Dec, 2017</a>\r\n                                </li>\r\n                                <li class=\"view\"><span class=\"lnr lnr-eye\"></span><a href=\"#\"> 1.2M Views</a></li>\r\n                                <li class=\"comments\"><span class=\"lnr lnr-bubble\"></span><a href=\"#\"> 06 Comments</a>\r\n                                </li>\r\n                            </ul> -->\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n\r\n                                    <p class=\"leftside\"><span class=\"lnr lnr-user\"></span> Mark wiens </p>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3\">\r\n\r\n                                    <p class=\"leftside\"><span class=\"lnr lnr-calendar-full\"></span> {{one_art.date | date:\"dd MMM yyyy\"}} </p>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-md-3\">\r\n\r\n                                    <p class=\"leftside\"><span class=\"lnr lnr-eye\"></span> 1.2M Views </p>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-3\">\r\n\r\n                                    <p class=\"leftside\"> <span class=\"lnr lnr-bubble\"></span>06 Comments </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <p  class=\"excert\" [innerHTML]=\"one_art.description\"></p>\r\n                    \r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"comments-area\">\r\n                    <h4>05 Comments</h4>\r\n                    <div class=\"comment-list\">\r\n                        <div class=\"single-comment justify-content-between d-flex\">\r\n                            <div class=\"user justify-content-between d-flex\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/blog/c1.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <h5><a href=\"#\">Emilly Blunt</a></h5>\r\n                                    <p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n                                    <p class=\"comment\">\r\n                                        Never say goodbye till the end comes!\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"reply-btn\">\r\n                                <a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"comment-list left-padding\">\r\n                        <div class=\"single-comment justify-content-between d-flex\">\r\n                            <div class=\"user justify-content-between d-flex\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/blog/c2.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <h5><a href=\"#\">Elsie Cunningham</a></h5>\r\n                                    <p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n                                    <p class=\"comment\">\r\n                                        Never say goodbye till the end comes!\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"reply-btn\">\r\n                                <a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"comment-list left-padding\">\r\n                        <div class=\"single-comment justify-content-between d-flex\">\r\n                            <div class=\"user justify-content-between d-flex\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/blog/c3.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <h5><a href=\"#\">Annie Stephens</a></h5>\r\n                                    <p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n                                    <p class=\"comment\">\r\n                                        Never say goodbye till the end comes!\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"reply-btn\">\r\n                                <a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"comment-list\">\r\n                        <div class=\"single-comment justify-content-between d-flex\">\r\n                            <div class=\"user justify-content-between d-flex\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/blog/c4.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <h5><a href=\"#\">Maria Luna</a></h5>\r\n                                    <p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n                                    <p class=\"comment\">\r\n                                        Never say goodbye till the end comes!\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"reply-btn\">\r\n                                <a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"comment-list\">\r\n                        <div class=\"single-comment justify-content-between d-flex\">\r\n                            <div class=\"user justify-content-between d-flex\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/blog/c5.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <h5><a href=\"#\">Ina Hayes</a></h5>\r\n                                    <p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n                                    <p class=\"comment\">\r\n                                        Never say goodbye till the end comes!\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"reply-btn\">\r\n                                <a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"comment-form\">\r\n                    <h4>Leave a Comment</h4>\r\n                    <form>\r\n                        <div class=\"form-group form-inline\">\r\n                            <div class=\"form-group col-lg-6 col-md-12 name\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\" onfocus=\"this.placeholder = ''\"\r\n                                    onblur=\"this.placeholder = 'Enter Name'\">\r\n                            </div>\r\n                            <div class=\"form-group col-lg-6 col-md-12 email\">\r\n                                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email address\"\r\n                                    onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Enter email address'\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" onfocus=\"this.placeholder = ''\"\r\n                                onblur=\"this.placeholder = 'Subject'\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <textarea class=\"form-control mb-10\" rows=\"5\" name=\"message\" placeholder=\"Messege\" onfocus=\"this.placeholder = ''\"\r\n                                onblur=\"this.placeholder = 'Messege'\" required=\"\"></textarea>\r\n                        </div>\r\n                        <a href=\"#\" class=\"primary-btn text-uppercase\">Post Comment</a>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 sidebar-widgets\">\r\n                <div class=\"widget-wrap\">\r\n                    <div class=\"single-sidebar-widget popular-post-widget\">\r\n                        <h4 class=\"popular-title\">Popular Posts</h4>\r\n                        <div class=\"popular-post-list\">\r\n                            <div class=\"single-post-list d-flex flex-row align-items-center\" *ngFor=\"let newpost of newpost\">\r\n                                <div class=\"thumb\">\r\n                                    <img class=\"img-fluid newvalue\" src={{newpost.image}} alt=\"\">\r\n                                </div>\r\n                                <div class=\"details\">\r\n                                    <a [href]=\"'/articlesingle/'+newpost._id\">\r\n                                        <h6>{{newpost.posttitle}}</h6>\r\n                                    </a>\r\n                                    <p>{{newpost.time}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"single-post-list d-flex flex-row align-items-center\">\r\n                                <div class=\"thumb\">\r\n                                    <img class=\"img-fluid\" src=\"./assets/img/blog/pp2.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"details\">\r\n                                    <a href=\"blog-single.html\">\r\n                                        <h6>The Amazing Hubble</h6>\r\n                                    </a>\r\n                                    <p>02 Hours ago</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"single-post-list d-flex flex-row align-items-center\">\r\n                                <div class=\"thumb\">\r\n                                    <img class=\"img-fluid\" src=\"./assets/img/blog/pp3.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"details\">\r\n                                    <a href=\"blog-single.html\">\r\n                                        <h6>Astronomy Or Astrology</h6>\r\n                                    </a>\r\n                                    <p>02 Hours ago</p>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"single-post-list d-flex flex-row align-items-center\">\r\n                                <div class=\"thumb\">\r\n                                    <img class=\"img-fluid\" src=\"./assets/img/blog/pp4.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"details\">\r\n                                    <a href=\"blog-single.html\">\r\n                                        <h6>Asteroids telescope</h6>\r\n                                    </a>\r\n                                    <p>02 Hours ago</p>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-sidebar-widget ads-widget\">\r\n                        <div class=\"single-news card\">\r\n                            <iframe class=\"card-top-img\" [src]=\"mediaurl | safe\" height=\"280\"\r\n                                frameborder=\"0\" allowfullscreen></iframe>\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">\r\n                                    <a href=\"#\">\r\n                                        Expert: इंश्योरेंस क्या है ... और क्यों लेना चाहिये ?\r\n                                    </a>\r\n                                </h4>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"single-sidebar-widget post-category-widget\">\r\n                        <h4 class=\"category-title\">Post Catgories</h4>\r\n                        <ul class=\"cat-list\" *ngFor =\"let myfunc of idtext\">\r\n                            <li>\r\n                                <a href=\"#\" class=\"d-flex justify-content-between\">\r\n                                    <p>{{myfunc.name}}</p>\r\n                                    <p>37</p>\r\n                                </a>\r\n                            </li>\r\n                            <!-- <li>\r\n                                <a href=\"#\" class=\"d-flex justify-content-between\">\r\n                                    <p>Lifestyle</p>\r\n                                    <p>24</p>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" class=\"d-flex justify-content-between\">\r\n                                    <p>Fashion</p>\r\n                                    <p>59</p>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" class=\"d-flex justify-content-between\">\r\n                                    <p>Art</p>\r\n                                    <p>29</p>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" class=\"d-flex justify-content-between\">\r\n                                    <p>Food</p>\r\n                                    <p>15</p>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" class=\"d-flex justify-content-between\">\r\n                                    <p>Architecture</p>\r\n                                    <p>09</p>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" class=\"d-flex justify-content-between\">\r\n                                    <p>Adventure</p>\r\n                                    <p>44</p>\r\n                                </a>\r\n                            </li> -->\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"single-sidebar-widget ads-widget\">\r\n                        <a href=\"#\"><img class=\"img-fluid\" src=\"./assets/img/ad_8.jpg\" alt=\"\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"testimonial-area feedback\" style=\"height: 377px;\">\r\n        <div class=\"container\">\r\n            <div class=\"row align-items-center\">\r\n                <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                    <div class=\"main-title\">\r\n                        <h1>आपके फीडबैक </h1>\r\n    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n    \r\n            <div class=\"row\">\r\n               \r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                            <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                            <div class=\"media-body\">\r\n    \r\n                                <p style=\"margin-top:20px\">\r\n                                    Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                    printer, scanner, speaker, projector,\r\n                                    hardware.\r\n                                </p>\r\n                                <h5>Mark Alviro Wiens</h5>\r\n    \r\n                                <p> CEO at Google</p>\r\n    \r\n                            </div>\r\n    \r\n                        </div>\r\n    \r\n                    </div>\r\n    \r\n    \r\n                    <div class=\"col-md-4\">\r\n                            <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                <div class=\"media-body\">\r\n        \r\n                                    <p style=\"margin-top:20px\">\r\n                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                        printer, scanner, speaker, projector,\r\n                                        hardware.\r\n                                    </p>\r\n                                    <h5>Lina Harrington</h5>\r\n        \r\n                                    <p> CEO at Google</p>\r\n        \r\n                                </div>\r\n        \r\n                            </div>\r\n        \r\n                        </div>\r\n    \r\n                        <div class=\"col-md-4\">\r\n                                <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                                    <div class=\"media-body\">\r\n            \r\n                                        <p style=\"margin-top:20px\">\r\n                                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                            printer, scanner, speaker, projector,\r\n                                            hardware.\r\n                                        </p>\r\n                                        <h5>Mark Alviro Wiens</h5>\r\n            \r\n                                        <p> CEO at Google</p>\r\n            \r\n                                    </div>\r\n            \r\n                                </div>\r\n            \r\n                            </div>\r\n    \r\n                             <!-- <div class=\"col-md-4\">\r\n                                    <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n                \r\n                                            <p style=\"margin-top:20px\">\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h5>Lina Harrington</h5>\r\n                \r\n                                            <p> CEO at Google</p>\r\n                \r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                </div>\r\n    \r\n    \r\n                  <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Lina Harrington</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user1.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Mark Alviro Wiens</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Lina Harrington</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>-->\r\n              \r\n            </div>\r\n        </div>\r\n    </section>  \r\n\r\n<!-- <section class=\"post-content-area\">\r\n\t\t<div class=\"container\">\r\n                    <br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-8 posts-list\">\r\n\t\t\t\t\t<div class=\"single-post row\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 \">\r\n\t\t\t\t\t\t\t<div class=\"feature-img\">\r\n\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"./assets/img/blog/feature-img1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a class=\"posts-title\" href=\"blog-single.html\"><h3>Astronomy Binoculars A Great Alternative</h3></a>\r\n                                                        <p>Life Insurance, Car Insurance</p>\r\n                                                        <div class=\" meta-details\">\r\n<!--\t\t\t\t\t\t\t<ul class=\"tags\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Food,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Technology,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Politics,</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Lifestyle</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<ul class=\"user-details \">\r\n                                                                \r\n\t\t\t\t\t\t\t\t<li class=\"user-name \"><span class=\"lnr lnr-user\"></span> <a href=\"#\">Mark wiens</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"date \"><span class=\"lnr lnr-calendar-full\"></span> <a href=\"#\">12 Dec, 2017</a> </li>\r\n\t\t\t\t\t\t\t\t<li class=\"view\"><span class=\"lnr lnr-eye\"></span><a href=\"#\"> 1.2M Views</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"comments\"><span class=\"lnr lnr-bubble\"></span><a href=\"#\"> 06 Comments</a> </li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n                                                        <hr>\r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n                                                        <p class=\"excert\">\r\n\t\t\t\t\t\t\t\tMCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money\r\n\t\t\t\t\t\t\t\ton boot camp when you can get the MCSE study materials yourself at a fraction.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<div class=\"comments-area\">\r\n\t\t\t\t\t\t<h4>05 Comments</h4>\r\n\t\t\t\t\t\t<div class=\"comment-list\">\r\n\t\t\t\t\t\t\t<div class=\"single-comment justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t<div class=\"user justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"img/blog/c1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<h5><a href=\"#\">Emilly Blunt</a></h5>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"comment\">\r\n\t\t\t\t\t\t\t\t\t\t\tNever say goodbye till the end comes!\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"reply-btn\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"comment-list left-padding\">\r\n\t\t\t\t\t\t\t<div class=\"single-comment justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t<div class=\"user justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"img/blog/c2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<h5><a href=\"#\">Elsie Cunningham</a></h5>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"comment\">\r\n\t\t\t\t\t\t\t\t\t\t\tNever say goodbye till the end comes!\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"reply-btn\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"comment-list left-padding\">\r\n\t\t\t\t\t\t\t<div class=\"single-comment justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t<div class=\"user justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"img/blog/c3.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<h5><a href=\"#\">Annie Stephens</a></h5>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"comment\">\r\n\t\t\t\t\t\t\t\t\t\t\tNever say goodbye till the end comes!\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"reply-btn\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"comment-list\">\r\n\t\t\t\t\t\t\t<div class=\"single-comment justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t<div class=\"user justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"img/blog/c4.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<h5><a href=\"#\">Maria Luna</a></h5>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"comment\">\r\n\t\t\t\t\t\t\t\t\t\t\tNever say goodbye till the end comes!\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"reply-btn\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"comment-list\">\r\n\t\t\t\t\t\t\t<div class=\"single-comment justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t<div class=\"user justify-content-between d-flex\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"img/blog/c5.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<h5><a href=\"#\">Ina Hayes</a></h5>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"date\">December 4, 2017 at 3:12 pm </p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"comment\">\r\n\t\t\t\t\t\t\t\t\t\t\tNever say goodbye till the end comes!\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"reply-btn\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn-reply text-uppercase\">reply</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"comment-form\">\r\n\t\t\t\t\t\t<h4>Leave a Comment</h4>\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<div class=\"form-group form-inline\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group col-lg-6 col-md-12 name\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Enter Name'\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group col-lg-6 col-md-12 email\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Enter email address'\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Subject'\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control mb-10\" rows=\"5\" name=\"message\" placeholder=\"Messege\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Messege'\"\r\n\t\t\t\t\t\t\t\t required=\"\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"primary-btn text-uppercase\">Post Comment</a>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 sidebar-widgets\">\r\n\t\t\t\t\t<div class=\"widget-wrap\">\r\n\t\t\t\t\t\t<div class=\"single-sidebar-widget popular-post-widget\">\r\n\t\t\t\t\t\t\t<h4 class=\"popular-title\">Popular Posts</h4>\r\n\t\t\t\t\t\t\t<div class=\"popular-post-list\">\r\n\t\t\t\t\t\t\t\t<div class=\"single-post-list d-flex flex-row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"img/blog/pp1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog-single.html\"><h6>Space The Final Frontier</h6></a>\r\n\t\t\t\t\t\t\t\t\t\t<p>02 Hours ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"single-post-list d-flex flex-row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"img/blog/pp2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog-single.html\"><h6>The Amazing Hubble</h6></a>\r\n\t\t\t\t\t\t\t\t\t\t<p>02 Hours ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"single-post-list d-flex flex-row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"img/blog/pp3.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog-single.html\"><h6>Astronomy Or Astrology</h6></a>\r\n\t\t\t\t\t\t\t\t\t\t<p>02 Hours ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"single-post-list d-flex flex-row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"img/blog/pp4.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog-single.html\"><h6>Asteroids telescope</h6></a>\r\n\t\t\t\t\t\t\t\t\t\t<p>02 Hours ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"single-sidebar-widget ads-widget\">\r\n<div class=\"single-news card\">\r\n                                                <iframe class=\"card-top-img\"  src=\"http://www.youtube.com/embed/f6ojOPq1o1I\" height=\"280\" frameborder=\"0\" allowfullscreen></iframe>\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\tExpert: इंश्योरेंस क्या है ... और क्यों लेना चाहिये ?\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"single-sidebar-widget post-category-widget\">\r\n\t\t\t\t\t\t\t<h4 class=\"category-title\">Post Catgories</h4>\r\n\t\t\t\t\t\t\t<ul class=\"cat-list\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Technology</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>37</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Lifestyle</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>24</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Fashion</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>59</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Art</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>29</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Food</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>15</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Architecture</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>09</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Adventure</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>44</p>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n                                            <div class=\"single-sidebar-widget ads-widget\">\r\n                                                <a href=\"#\"><img class=\"img-fluid\" src=\"img/ad_8.jpg\" alt=\"\"></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section> -->\r\n"

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-area relative\" id=\"home\" style=\"background-image: url(./assets/img/bgfeedback.jpg)\">\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-8 col-md-8 col-sm-12\">\r\n                <h1 class=\"text-white text-uppercase\">\r\n                  {{category}}\r\n                </h1>\r\n                <p class=\"text-white link-nav\"><a href=\"index.html\">मुख्य पृष्ट </a>\r\n                    <span class=\"lnr lnr-arrow-right\"></span>\r\n                    <a href=\"#\">\r\n                        इंश्योरेंस</a>\r\n\r\n\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 home-banner-ad\" style=\"padding-right: 0\">\r\n                <div class=\"banner-ads\">\r\n                    <div class=\"ad\">\r\n                        <a href=\"#\"><img class=\"img-fluid\" src=\"./assets/img/ad_4.jpeg\" /></a>\r\n                    </div>\r\n                    <!-- <div class=\"ad\">\r\n                                    <a href=\"#\"><img src=\"./assets/img/ad_4.jpeg\"/></a>\r\n                                </div>\r\n                                <div class=\"ad\">\r\n                                    <a href=\"#\"><img src=\"./assets/img/ad_4.jpeg\"/></a>\r\n                                </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"post-content-area single-post-area\" style=\"padding: 20px 0\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                <div class=\"main-title\">\r\n                    <h1> केटेगरी </h1>\r\n                    <!--<span class=\"main-title-line\"></span>-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-9 posts-list\">\r\n                <div class=\"single-post row\">\r\n\r\n\r\n                    <div class=\"clearfix\"></div>\r\n                    <br>\r\n                    <div class=\"col-md-12\" style=\"margin-top: 30px\">\r\n                        <div class=\"related-videos slick-initialized slick-slider\">\r\n                            <div class=\"slick-list draggable\">\r\n                                <div class=\"slick-track\" style=\"opacity: 1; width: 102%;\">\r\n                                    <div class=\"slick-slide slick-cloned\" data-slick-index=\"-4\" aria-hidden=\"true\"\r\n                                        tabindex=\"-1\" style=\"width: 278px;\" *ngFor=\"let textid of addproduct\">\r\n                                        <div>\r\n                                            <div class=\"single-news card\" style=\"width: 100%; display: inline-block;\">\r\n                                                <iframe class=\"card-top-img\" [src]=\"textid.media.mediaurl| safe\"\r\n                                                    frameborder=\"0\" allowfullscreen=\"\"></iframe>\r\n                                                <div class=\"card-body\">\r\n                                                    <h4 class=\"card-title\">\r\n                                                        <a [href] = \"'product/'+textid._id\" tabindex=\"-1\">\r\n                                                            {{textid.title}}\r\n                                                        </a>\r\n                                                    </h4>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-lg-3 sidebar-widgets\" style=\"padding-right: 0\">\r\n                <img src=\"./assets/img/ad_5.jpg\" class=\"img-fluid\" style=\"border:1px solid #f5f5f5; width: 100%\">\r\n                <!-- <img src=\"./assets/img/ad_5.jpg\" class=\"img-fluid\" style=\"border:1px solid #f5f5f5; width: 100%\"> -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"testimonial-area feedback\" style=\"height: 377px;\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                <div class=\"main-title\">\r\n                    <h1>आपके फीडबैक </h1>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n\r\n                        <p style=\"margin-top:20px\">\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h5>Mark Alviro Wiens</h5>\r\n\r\n                        <p> CEO at Google</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n\r\n                        <p style=\"margin-top:20px\">\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h5>Lina Harrington</h5>\r\n\r\n                        <p> CEO at Google</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n\r\n                        <p style=\"margin-top:20px\">\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h5>Mark Alviro Wiens</h5>\r\n\r\n                        <p> CEO at Google</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-4\">\r\n                                <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                    <div class=\"media-body\">\r\n            \r\n                                        <p style=\"margin-top:20px\">\r\n                                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                            printer, scanner, speaker, projector,\r\n                                            hardware.\r\n                                        </p>\r\n                                        <h5>Lina Harrington</h5>\r\n            \r\n                                        <p> CEO at Google</p>\r\n            \r\n                                    </div>\r\n            \r\n                                </div>\r\n            \r\n                            </div>\r\n\r\n\r\n              <div class=\"single-testimonial item d-flex flex-row\">\r\n                    <div class=\"thumb\">\r\n                        <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                    </div>\r\n                    <div class=\"desc\">\r\n                        <p>\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h4 mt-30>Lina Harrington</h4>\r\n                        <p class=\"mb-0\">CEO at Google</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"single-testimonial item d-flex flex-row\">\r\n                    <div class=\"thumb\">\r\n                        <img src=\"./assets/img/user1.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                    </div>\r\n                    <div class=\"desc\">\r\n                        <p>\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h4 mt-30>Mark Alviro Wiens</h4>\r\n                        <p class=\"mb-0\">CEO at Google</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"single-testimonial item d-flex flex-row\">\r\n                    <div class=\"thumb\">\r\n                        <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                    </div>\r\n                    <div class=\"desc\">\r\n                        <p>\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h4 mt-30>Lina Harrington</h4>\r\n                        <p class=\"mb-0\">CEO at Google</p>\r\n                    </div>\r\n                </div>-->\r\n\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-area relative\" id=\"home\" style=\"background-image: url('./assets/img/bgfeedback.jpg')\">\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-8 col-md-8 col-sm-12\">\r\n                <h1 class=\"text-white text-uppercase\">\r\n                    सम्पर्क करे\r\n                </h1>\r\n                <p class=\"text-white link-nav\"><a href=\"index.html\">मुख्य पृष्ट </a>\r\n\r\n                    <span class=\"lnr lnr-arrow-right\"></span>\r\n                    <a href=\"#\">\r\n                        सम्पर्क करे </a>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 home-banner-ad\" style=\"padding-right: 0\">\r\n                <div class=\"banner-ads slick-initialized slick-slider slick-dotted\">\r\n                    <div class=\"slick-list draggable\">\r\n                        <div class=\"slick-track\" style=\"opacity: 1; width: 1095px; transform: translate3d(0px, 0px, 0px);\">\r\n                            <div class=\"slick-slide slick-current slick-active\" data-slick-index=\"0\" aria-hidden=\"false\"\r\n                                role=\"tabpanel\" id=\"slick-slide00\" style=\"width: 365px;\">\r\n                                <div>\r\n                                    <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                        <a href=\"\" tabindex=\"0\"><img class=\"img-fluid\" src=\"./assets/img/ad_4.jpeg\"></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"slick-slide\" data-slick-index=\"1\" aria-hidden=\"true\" tabindex=\"-1\" role=\"tabpanel\"\r\n                                id=\"slick-slide01\" style=\"width: 365px;\">\r\n                                <div>\r\n                                    <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                        <a href=\"\" tabindex=\"-1\"><img src=\"./assets/img/ad_4.jpeg\"></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"slick-slide\" data-slick-index=\"2\" aria-hidden=\"true\" tabindex=\"-1\" role=\"tabpanel\"\r\n                                id=\"slick-slide02\" style=\"width: 365px;\">\r\n                                <div>\r\n                                    <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                        <a href=\"\" tabindex=\"-1\"><img src=\"./assets/img/ad_4.jpeg\"></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <ul class=\"slick-dots\" style=\"display: block;\" role=\"tablist\">\r\n                        <li class=\"slick-active\" role=\"presentation\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control00\"\r\n                                aria-controls=\"slick-slide00\" aria-label=\"1 of 3\" tabindex=\"0\" aria-selected=\"true\">1</button></li>\r\n                        <li role=\"presentation\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control01\"\r\n                                aria-controls=\"slick-slide01\" aria-label=\"2 of 3\" tabindex=\"-1\">2</button></li>\r\n                        <li role=\"presentation\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control02\"\r\n                                aria-controls=\"slick-slide02\" aria-label=\"3 of 3\" tabindex=\"-1\">3</button></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n<section class=\"contact-page-area \" style=\"padding:20px 0 0 0\">\r\n    <div class=\"container\">\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                <div class=\"mapouter\">\r\n                    <div class=\"gmap_canvas\" style=\"width:100%\"><iframe style=\"width:100%\" height=\"500\" id=\"gmap_canvas\"\r\n                            src=\"https://maps.google.com/maps?q=india%20mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n                            frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://www.pureblack.de/wordpress-agentur/\"></a></div>\r\n                    <style>.mapouter{text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\" style=\"border-right: 1px solid #eee; margin-top:15px; padding:0; padding-bottom: 40px\">\r\n                <h3 style=\"background: #3face4; color:#fff; padding: 10px 15px; text-transform: uppercase; font-size: 18px; font-weight: 600\"><i\r\n                        style=\"color:#17497a\" class=\"fa fa-angle-right\"></i>&nbsp;&nbsp;सम्पर्क फॉर्म </h3><br>\r\n                <form class=\"form-area contact-form text-right\" id=\"myForm\" action=\"mail.php\" method=\"post\" style=\"padding: 0 15px\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                            <input name=\"name\" placeholder=\"आपका नाम \" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'आपका नाम '\"\r\n                                class=\"common-input mb-20 form-control\" required=\"\" type=\"text\">\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <input name=\"email\" placeholder=\"आपका ईमेल\" pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$\"\r\n                                onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'आपका ईमेल '\" class=\"common-input mb-20 form-control\"\r\n                                required=\"\" type=\"email\">\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <input name=\"subject\" placeholder=\"विषय\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'विषय '\"\r\n                                class=\"common-input mb-20 form-control\" required=\"\" type=\"text\">\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-lg-12\">\r\n                            <textarea class=\"common-textarea form-control\" name=\"message\" placeholder=\"सन्देश \" onfocus=\"this.placeholder = ''\"\r\n                                onblur=\"this.placeholder = 'Enter Messege'\" required=\"\"></textarea>\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-12 text-left mt-10\">\r\n                            <input type=\"checkbox\"> हाँ, मैं प्राइवेसी कथन जो <a href=\"#\">शर्ते और पॉलिसीस</a> में लिखे\r\n                            गए है उनसे सहमत हु\r\n                        </div>\r\n                        <div class=\"col-lg-12 mt-30 text-left\">\r\n                            <div class=\"alert-msg\" style=\"text-align: left;\"></div>\r\n                            <button class=\"primary-btn primary\">भेजें </button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 d-flex flex-column address-wrap\" style=\"padding:0;margin-top:15px;padding-bottom: 40px\">\r\n                <h3 style=\"background: #3face4; color:#fff; padding: 10px 15px;  text-transform: uppercase; font-size: 18px; font-weight: 600\"><i\r\n                        style=\"color:#17497a\" class=\"fa fa-angle-right\"></i>&nbsp;&nbsp;सम्पर्क करे</h3><br>\r\n                <div class=\"single-contact-address d-flex flex-row\" style=\"padding: 0 15px\">\r\n                    <!--\t\t\t\t\t\t<div class=\"icon\">\r\n                        <span class=\"lnr lnr-home\"></span>\r\n                    </div>-->\r\n                    <div class=\"contact-details\">\r\n                        <br>\r\n                        <h5>पता </h5>\r\n                        <p>\r\n                            <b>सही सॉलूशन्स </b><br>\r\n                            1003, बी , माउंट एवेरेस्ट , भक्ति पार्क,\r\n                            वडाला - ईस्ट, मुंबई – 400 037\r\n\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"single-contact-address d-flex flex-row\" style=\"padding: 0 15px\">\r\n                    <!--\t\t\t\t\t\t<div class=\"icon\">\r\n                        <span class=\"lnr lnr-phone-handset\"></span>\r\n                    </div>-->\r\n\r\n                    <div class=\"contact-details\">\r\n                        <h5>ईमेल </h5>\r\n                        <p>contact@sahibima.com</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"single-contact-address d-flex flex-row\" style=\"padding: 0 15px\">\r\n                    <!--\t\t\t\t\t\t<div class=\"icon\">\r\n                        <span class=\"lnr lnr-envelope\"></span>\r\n                    </div>-->\r\n                    <div class=\"contact-details\">\r\n                        <h5>कंपनी नंबर </h5>\r\n                        <p>022 – 12345678</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"testimonial-area feedback\" style=\"height: 377px;\">\r\n        <div class=\"container\">\r\n            <div class=\"row align-items-center\">\r\n                <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                    <div class=\"main-title\">\r\n                        <h1>आपके फीडबैक </h1>\r\n    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n    \r\n            <div class=\"row\">\r\n               \r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                            <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                            <div class=\"media-body\">\r\n    \r\n                                <p style=\"margin-top:20px\">\r\n                                    Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                    printer, scanner, speaker, projector,\r\n                                    hardware.\r\n                                </p>\r\n                                <h5>Mark Alviro Wiens</h5>\r\n    \r\n                                <p> CEO at Google</p>\r\n    \r\n                            </div>\r\n    \r\n                        </div>\r\n    \r\n                    </div>\r\n    \r\n    \r\n                    <div class=\"col-md-4\">\r\n                            <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                <div class=\"media-body\">\r\n        \r\n                                    <p style=\"margin-top:20px\">\r\n                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                        printer, scanner, speaker, projector,\r\n                                        hardware.\r\n                                    </p>\r\n                                    <h5>Lina Harrington</h5>\r\n        \r\n                                    <p> CEO at Google</p>\r\n        \r\n                                </div>\r\n        \r\n                            </div>\r\n        \r\n                        </div>\r\n    \r\n                        <div class=\"col-md-4\">\r\n                                <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                                    <div class=\"media-body\">\r\n            \r\n                                        <p style=\"margin-top:20px\">\r\n                                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                            printer, scanner, speaker, projector,\r\n                                            hardware.\r\n                                        </p>\r\n                                        <h5>Mark Alviro Wiens</h5>\r\n            \r\n                                        <p> CEO at Google</p>\r\n            \r\n                                    </div>\r\n            \r\n                                </div>\r\n            \r\n                            </div>\r\n    \r\n                             <!-- <div class=\"col-md-4\">\r\n                                    <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n                \r\n                                            <p style=\"margin-top:20px\">\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h5>Lina Harrington</h5>\r\n                \r\n                                            <p> CEO at Google</p>\r\n                \r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                </div>\r\n    \r\n    \r\n                  <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Lina Harrington</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user1.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Mark Alviro Wiens</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Lina Harrington</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>-->\r\n              \r\n            </div>\r\n        </div>\r\n    </section>  "

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-area \">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-3  col-md-6\">\r\n\t\t\t\t\t<div class=\"single-footer-widget\">\r\n\t\t\t\t\t\t<h6>कंपनी </h6>\r\n\t\t\t\t\t\t<ul class=\"footer-nav\">\r\n\t\t\t\t\t\t\t\t<li class =\"data\" (click) = indexfun()>हमारे बारे में</li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">जॉब्स </a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">न्यूज़ रूम </a></li>\r\n\t\t\t\t\t\t\t<li class =\"data\"><a (click) = funcall()>हमारी टीम </a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6\">\r\n\t\t\t\t\t<div class=\"single-footer-widget newsletter\">\r\n\t\t\t\t\t\t<h6>हमारे इंश्योरेंस सर्विसेज </h6>\r\n\t\t\t\t\t\t<ul class=\"footer-nav\">\r\n\t\t\t\t\t\t\t<li *ngFor = \"let category of cat\"><a [href]=\"'/category/'+category._id\">{{category.title}}</a></li>\r\n\t\t\t\t\t\t\t\t<!-- <li><a href=\"\">कार बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">स्वास्थ्य बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">घर बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">यात्रा बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">मोटर साइकिल बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">अन्य बीमा</a></li>\r\n\t\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6\">\r\n\t\t\t\t\t<div class=\"single-footer-widget newsletter\">\r\n\t\t\t\t\t\t<h6>FAQs </h6>\r\n\t\t\t\t\t\t<ul class=\"footer-nav\">\r\n\t\t\t\t\t\t\t<li><a href=\"\">जीवन बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">कार बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">स्वास्थ्य बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">घर बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">यात्रा बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">मोटर साइकिल बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">अन्य बीमा</a></li>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6\">\r\n\t\t\t\t\t<div class=\"single-footer-widget newsletter\">\r\n\t\t\t\t\t\t<h6>सम्पर्क  </h6>\r\n\t\t\t\t\t\t<ul class=\"footer-nav\">\r\n\t\t\t\t\t\t\t<li>लोकेशन : बी-१५० , ट्रिडेंट बिल्डिंग, मुंबई </li>\r\n                                                        <li>ईमेल : info@sahibeema.com</li>\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"footer-bottom d-flex justify-content-between align-items-center flex-wrap\">\r\n\t\t\t\t<p class=\"col-lg-8 col-sm-12 footer-text m-0\">\r\n                                    <img src=\"./assets/img/logo.png\">&nbsp;&nbsp;&nbsp;&nbsp;\r\nCopyright ©<script>document.write(new Date().getFullYear());</script>2019 All rights reserved | Subsidiary of <a href=\"http://protossofttech.com/sahibeema/#\" target=\"_blank\">Sahi Solutions</a>\r\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n</p>\r\n\t\t\t\t<div class=\"footer-social d-flex align-items-center\">\r\n\t\t\t\t\t<a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t\t\t<a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t\t\t\t<a href=\"\"><i class=\"fa fa-dribbble\"></i></a>\r\n\t\t\t\t\t<a href=\"\"><i class=\"fa fa-behance\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n"

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = "<section class=\"home-banner-area relative\" id=\"home\">\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center\">\r\n\r\n            <div class=\" col-lg-7 col-md-8 col-sm-8 col-xs-8 product-wrapper\">\r\n                <h3 style=\"margin-bottom: 10px\">हमारे कुछ इंश्योरेंस सर्विसेज</h3>\r\n                <p style=\"color:#fff; opacity: 0.8; margin-bottom: 0\">हमारी इंश्योरेंस पॉलिसीज के बारे में</p>\r\n                <p style=\"color:#fff; opacity: 0.8; margin-top: 0\">इंश्योरेंस पॉलिसीज सर्विसेज..</p>\r\n                <div class=\"products\" *ngFor=\"let text of data\">\r\n                    <a (click)=\"getId(text)\" class=\"product data\"><img src={{text.icon}}>\r\n                        <h5>{{text.title}}</h5>\r\n                    </a>\r\n\r\n                    <!-- <a href=\"http://protossofttech.com/sahibeema/#\" class=\"product\"><img src=\"../.././assets/img/2.png\">\r\n                        <h5>कार बीमा</h5>\r\n                    </a>\r\n                    <a href=\"http://protossofttech.com/sahibeema/#\" class=\"product\"><img src=\"../.././assets/img/3.png\">\r\n                        <h5>स्वास्थ्य बीमा</h5>\r\n                    </a> \r\n                    <a href=\"http://protossofttech.com/sahibeema/#\" class=\"product\"><img src=\"../.././assets/img/4.png\">\r\n                        <h5>घर बीमा</h5>\r\n                    </a>\r\n                    <a href=\"http://protossofttech.com/sahibeema/#\" class=\"product\"><img src=\"../.././assets/img/5.png\">\r\n                        <h5>यात्रा बीमा</h5>\r\n                    </a>\r\n                    <a href=\"http://protossofttech.com/sahibeema/#\" class=\"product\"><img src=\"../.././assets/img/6.png\">\r\n                        <h5>मोटर साइकिल बीमा</h5>\r\n                    </a>\r\n                    <a href=\"http://protossofttech.com/sahibeema/#\" class=\"product\"><img src=\"../.././assets/img/7.png\">\r\n                        <h5>अन्य बीमा</h5>\r\n                    </a> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"offset-lg-1 col-lg-4 col-md-4 col-sm-4 col-xs-12 home-banner-ad\">\r\n                <div class=\"banner-ads slick-initialized slick-slider slick-dotted\">\r\n                    <div class=\"slick-list draggable\">\r\n                        <div class=\"slick-track\" style=\"opacity: 1; width: 1095px; transform: translate3d(0px, 0px, 0px);\">\r\n                            <div class=\"slick-slide slick-current slick-active\" data-slick-index=\"0\" aria-hidden=\"false\"\r\n                                role=\"tabpanel\" id=\"slick-slide00\" aria-describedby=\"slick-slide-control00\" style=\"width: 365px;\">\r\n                                <div>\r\n                                    <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                        <a href=\"\" tabindex=\"0\"><img class=\"img-fluid\" src={{nameblock}}></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"slick-slide\" data-slick-index=\"1\" aria-hidden=\"true\" role=\"tabpanel\" id=\"slick-slide01\"\r\n                                aria-describedby=\"slick-slide-control01\" tabindex=\"-1\" style=\"width: 365px;\">\r\n                                <div>\r\n                                    <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                        <a href=\"http://protossofttech.com/sahibeema/#\" tabindex=\"-1\"><img src=\"../.././assets/img/ad_4.jpeg\"></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"slick-slide\" data-slick-index=\"2\" aria-hidden=\"true\" role=\"tabpanel\" id=\"slick-slide02\"\r\n                                aria-describedby=\"slick-slide-control02\" tabindex=\"-1\" style=\"width: 365px;\">\r\n                                <div>\r\n                                    <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                        <a href=\"http://protossofttech.com/sahibeema/#\" tabindex=\"-1\"><img src=\"../.././assets/img/ad_4.jpeg\"></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <ul class=\"slick-dots\" style=\"display: block;\" role=\"tablist\">\r\n                        <li class=\"slick-active\" role=\"presentation\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control00\"\r\n                                aria-controls=\"slick-slide00\" aria-label=\"1 of 3\" tabindex=\"0\" aria-selected=\"true\">1</button></li>\r\n                        <li role=\"presentation\" class=\"\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control01\"\r\n                                aria-controls=\"slick-slide01\" aria-label=\"2 of 3\" tabindex=\"-1\">2</button></li>\r\n                        <li role=\"presentation\" class=\"\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control02\"\r\n                                aria-controls=\"slick-slide02\" aria-label=\"3 of 3\" tabindex=\"-1\">3</button></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section-hiw\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"hiw\">\r\n                    <table>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td><span>1</span>\r\n                                    <h4>सही विषय चुने</h4>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"hiw\">\r\n                    <table>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td><span>2</span>\r\n                                    <h4>सही सलाह लेवें</h4>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"hiw\">\r\n                    <table>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td><span>3</span>\r\n                                    <h4>सही चुने</h4>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n<section class=\"latest-news-area\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-9\" style=\"padding: 0\">\r\n                <div class=\"main-title\">\r\n                    <h1>अभी जानिये </h1>\r\n                    <!--<span class=\"main-title-line\"></span>-->\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6\" *ngFor=\"let prod of value\">\r\n                        <div class=\"single-news card\">\r\n\r\n                            <img class=\"data\" [src]=\"'https://img.youtube.com/vi/'+prod.youtube_id+'/0.jpg'\" (click)=\"openModalForStock(prod)\">\r\n                            <!-- <video width=\"412\" height=\"280\"   (click) =\"openModalForStock(prod)\" poster=\"/images/https://loksewaupdate.com/vacancies/rastriya-beema-company-vacancy\"  controls>\r\n                                </video> -->\r\n                            <!-- <a class=\"video-control\" style = \"margin-top: 10%;\"  (click) =\"openModalForStock(prod)\"><i class=\"fa fa-play fa-video-play\" style=\"color:#3a67ab;border: 5px solid #3a67ab;\"></i></a>-->\r\n                            <!-- <iframe class=\"card-top-img\"  [src]=\" prod.media.mediaurl| safe\" height=\"280\"\r\n                                frameborder=\"0\" allowfullscreen=\"\"></iframe>    -->\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">\r\n                                        <a [href]=\"'product/'+prod.category\">\r\n                                        {{prod.title}}\r\n                                    </a>\r\n                                </h4>\r\n                                <!-- <div class =\"row\"  style=\"margin-top:10px \"> \r\n                                    <div class=\"col-md-6\">\r\n                                <p> <i class=\"fa fa-thumbs-up\" style=\"font-size: 26px;\" aria-hidden=\"true\"></i> </p>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-md-6\">\r\n                                        <button type=\"button\" class=\"button-type\">Subscribe </button>\r\n                                          </div>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-lg-6 col-md-6\">\r\n                        <div class=\"single-news card\">\r\n                            <iframe class=\"card-top-img\" [src]=\"mediaurl | safe\" height=\"280\"\r\n                                frameborder=\"0\" allowfullscreen=\"\"></iframe>\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">\r\n                                    <a href=\"\">\r\n                                        इंश्योरेंस कितने तरह का होता है?\r\n                                    </a>\r\n                                </h4>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3\" style=\"padding-right: 0\">\r\n                <img src={{newadd}} class=\"img-fluid\">\r\n                <!--   <div class=\"popular-videos\">\r\n                                    <h3>लोकप्रिय लेख</h3>\r\n                                    <a class=\"popular-video\">\r\n                                        <table>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <img src=\"img/video-thumb.jpg\"/>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <h4>इंश्योरेंस पॉलिसी लेने के तरीके </h4>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </a>\r\n                                    <a class=\"popular-video\">\r\n                                        <table>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <img src=\"img/video-thumb.jpg\"/>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <h4>पॉलिसी सेटलमेंट के सुझाव  </h4>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </a>\r\n                                    <a class=\"popular-video\">\r\n                                        <table>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <img src=\"img/video-thumb.jpg\"/>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <h4>टर्म एंड लाइफ इंश्योरेंस पालिसी में अंतर  </h4>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </a>\r\n                                </div>\r\n                            </div> -->\r\n            </div>\r\n            <br>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n<section class=\"latest-blog-area\">\r\n    <div class=\"container\">\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-9\">\r\n                <div class=\"main-title\">\r\n                    <h1 class=\"data\">नए लेख - <span style=\"font-size: 16px; font-weight:normal\">इंश्योरेंस पॉलिसीस से\r\n                            जुडी\r\n                            महत्वपूर्ण जानकारियाँ</span></h1>\r\n                    <!--<span class=\"main-title-line\"></span>-->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <div class=\"main-title\">\r\n                    <h1 class=\"data\" (click)=\"article()\">View All </h1>\r\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"float: right;\">Expert Speaks\r\n                    </button>\r\n                    <!--<span class=\"main-title-line\"></span>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row new-articles\">\r\n            <div class=\" single-blog\" *ngFor=\"let funart of half_article\">\r\n                <div class=\"single-blog-item\">\r\n                    <div class=\"thumb\">\r\n                        <img class=\"img-fluid w-100\" src={{funart.image}} alt=\"\">\r\n                    </div>\r\n                    <p class=\"date\">{{funart.date | date : 'dd MMM yyyy'}}</p>\r\n                    <h4>\r\n                        <a [href]=\"'/articlesingle/'+funart._id\">{{funart.posttitle}}</a>\r\n                    </h4>\r\n                    <p>\r\n                        {{funart.description}}\r\n                    </p>\r\n                    <div class=\"meta-bottom d-flex justify-content-between\">\r\n                        <p><span class=\"lnr lnr-heart\" style=\"margin-right: 10px;\" (click)=\"addLikes(funart._id)\" *ngIf=\" funart && funart.likes && funart.likes.length >= 0 \"></span>{{funart.likes.length}}\r\n                            likes</p>\r\n                        <p><span class=\"lnr lnr-bubble \" *ngIf=\" funart && funart.comments && funart.comments.length >= 0 \"></span>{{funart.comments.length}}\r\n                        </p>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--<div class=\" single-blog\">\r\n                                    <div class=\"single-blog-item\">\r\n\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"./assets/img/b2.jpg\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">10 Jan 2018</p>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<a href=\"#\">टर्म एंड लाइफ इंश्योरेंस पालिसी में अंतर</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tinappropriate behavior ipsum dolor sit amet, consectetur.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"meta-bottom d-flex justify-content-between\">\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\" single-blog\">\r\n                                    <div class=\"single-blog-item\">\r\n\t\t\t\t\t<div class=\"thumb\">\r\n                                            <img class=\"img-fluid w-100\" src=\"./assets/img/cat-widget2.jpg\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">10 Jan 2018</p>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<a href=\"#\">पॉलिसी सेटलमेंट के सुझाव और सही चुनाव</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tinappropriate behavior ipsum dolor sit amet, consectetur.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"meta-bottom d-flex justify-content-between\">\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-blog\">\r\n                                    <div class=\"single-blog-item\">\r\n\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"./assets/img/b4.jpg\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">10 Jan 2018</p>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<a href=\"#\">टर्म एंड लाइफ इंश्योरेंस पालिसी में अंतर</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tinappropriate behavior ipsum dolor sit amet, consectetur.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"meta-bottom d-flex justify-content-between\">\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n                             <div class=\" single-blog\">\r\n                                    <div class=\"single-blog-item\">\r\n\t\t\t\t\t<div class=\"thumb\">\r\n                                            <img class=\"img-fluid w-100\" src=\"./assets/img/cat-widget2.jpg\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">10 Jan 2018</p>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<a href=\"#\">पॉलिसी सेटलमेंट के सुझाव और सही चुनाव</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tinappropriate behavior ipsum dolor sit amet, consectetur.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"meta-bottom d-flex justify-content-between\">\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n        </div>\r\n\r\n\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\" style=\"padding-top:3rem\">\r\n            <div class=\"col-md-6\" style=\"padding: 0\">\r\n                <img src={{addnew1}} class=\"img-fluid\">\r\n            </div>\r\n            <!-- <div class=\"col-md-6\" style=\"padding: 0\">\r\n                <img src={{addnew1}} class=\"img-fluid\">\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n<section class=\"recent-completed-project\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                <div class=\"main-title\">\r\n                    <h1>और जानिये </h1>\r\n                    <!--<span class=\"main-title-line\"></span>-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                <div class=\"filters project-filter\">\r\n                    <ul>\r\n                        <li class=\"active\" data-filter=\".all\">सभी इंश्योरेंस</li>\r\n                        <li data-filter=\".brand\">यात्रा </li>\r\n                        <li data-filter=\".creative\">कार </li>\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"projects_inner row\" id=\"lightgallery\" style=\"position: relative; height: 525px;\">\r\n                    <div class=\"col-lg-3 col-sm-6 web all creative\" *ngFor=\"let text of data\">\r\n                        <div class=\"projects_item\" style=\"height: 231px;\">\r\n                            <img class=\"img-fluid w-100\" src={{text.image}} alt=\"\">\r\n                            <div class=\"icon\">\r\n                                <img class=\"img-fluid\" src=\"../.././assets/img/icon.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"projects_text\">\r\n                                <h4>\r\n                                    <img src={{text.icon}}><a (click)=\"getId(text)\">{{text.title}}\r\n                                    </a>\r\n                                </h4>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n<section class=\"testimonial-area feedback\" style=\"height: 377px;\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                <div class=\"main-title\">\r\n                    <h1>आपके फीडबैक </h1>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n\r\n                        <p style=\"margin-top:20px\">\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h5>Mark Alviro Wiens</h5>\r\n\r\n                        <p> CEO at Google</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n\r\n                        <p style=\"margin-top:20px\">\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h5>Lina Harrington</h5>\r\n\r\n                        <p> CEO at Google</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n\r\n                        <p style=\"margin-top:20px\">\r\n                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                            printer, scanner, speaker, projector,\r\n                            hardware.\r\n                        </p>\r\n                        <h5>Mark Alviro Wiens</h5>\r\n\r\n                        <p> CEO at Google</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-4\">\r\n                                    <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n                \r\n                                            <p style=\"margin-top:20px\">\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h5>Lina Harrington</h5>\r\n                \r\n                                            <p> CEO at Google</p>\r\n                \r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                </div>\r\n    \r\n    \r\n                  <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Lina Harrington</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user1.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Mark Alviro Wiens</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                        <div class=\"thumb\">\r\n                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            <p>\r\n                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                printer, scanner, speaker, projector,\r\n                                hardware.\r\n                            </p>\r\n                            <h4 mt-30>Lina Harrington</h4>\r\n                            <p class=\"mb-0\">CEO at Google</p>\r\n                        </div>\r\n                    </div>-->\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section-subscribe\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <h3 style=\"text-align: center; font-weight: 600; margin-top: 40px; display: block; width: 100%\">न्यूज़लेटर\r\n                सब्सक्राइब करे </h3>\r\n            <div class=\"col-md-10\" style=\"float: none; margin: auto\">\r\n                <div id=\"mc_embed_signup\">\r\n                    <form target=\"_blank\" novalidate=\"true\" action=\"https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01\"\r\n                        method=\"get\" class=\"form-inline\">\r\n\r\n                        <div class=\"form-group row\" style=\"width: 100%\">\r\n                            <div class=\"col-lg-9 col-md-9\">\r\n                                <input name=\"EMAIL\" placeholder=\"Your Email Address\" onfocus=\"this.placeholder = &#39;&#39;\"\r\n                                    onblur=\"this.placeholder = &#39;Your Email Address&#39;\" required=\"\" type=\"email\">\r\n                                <div style=\"position: absolute; left: -5000px;\">\r\n                                    <input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-lg-3 col-md-3\">\r\n                                <button class=\"nw-btn primary-btn\">Subscribe<span class=\"lnr lnr-arrow-right\"></span></button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"info\"></div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n<!-- <div id=\"materialStockModel\" class=\"modal fade\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-lg\" >\r\n                  \r\n                      <!-- Modal content\r\n                      <div class=\"modal-content\" style=\"margin-top: 100px;\" >\r\n                          <button type=\"button\" class=\"close video-close-btn\" data-dismiss=\"modal\">&times;</button>\r\n                        <div class=\"modal-body\" style=\"padding:0px\">\r\n                            \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"modal\" id=\"materialStockModel\" role=\"dialog\" tabindex=\"-1\" data-pswp-uid=\"1\" style=\"background-color: rgba(0,0,0,0.4);overflow: auto;\">\r\n    <div class=\"modal-dialog modal-img modal-lg\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n\r\n\r\n\r\n            <!--<h4 class=\"modal-title text-center\"  style=\"color:black\"><b>Edit Material Stock</b></h4>-->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\" style=\"padding:0px;line-height: 0px;\" *ngIf='url'>\r\n                    <iframe class=\"card-top-img\" [src]=\"url | safe\" height=\"407\" width=\"100%\" frameborder=\"0\"\r\n                        allowfullscreen=\"\"></iframe>\r\n                </div>\r\n                <div class=\"col-md-6\" style=\"padding-left:0px;\">\r\n                    <div class=\"widget-wrap\" style=\"border: 0px;padding: 0px\">\r\n\r\n\r\n                        <div class=\"single-sidebar-widget post-category-widget\" style=\"margin:0px\">\r\n                            \r\n                                    <h4 class=\"category-title\">Highlights <i class=\"fa fa-times data\" aria-hidden=\"true\" (click)=\"closeTrackModel()\" style=\"float: right; margin-right: 10px !important;\"></i></h4>\r\n                                \r\n                                    <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closeTrackModel()\"\r\n                                        style=\"float: left;padding-top: 8px;\">&times;</button> -->\r\n                              \r\n                            <ul class=\"cat-list bullet-list\" *ngIf=\"highlights\">\r\n                                <marquee direction=\"down\" style=\"height:318px\">\r\n                                    <li *ngFor=\"let idtext of highlights\">\r\n                                        {{idtext}}\r\n\r\n                                    </li>\r\n                                </marquee>\r\n\r\n\r\n\r\n                            </ul>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n            <!-- <div class=\"modal-footer m-auto\" style=\"border-top:none; \">\r\n                              <button type=\"button\" class=\"btn btn-danger\" style=\"background-color: #326cab!important; border-color:#326cab!important\"\r\n                                (click)=\"closeTrackModel()\">\r\n                                ok\r\n                              </button>\r\n                              <!--<button type=\"button\" class=\"btn btn-default\" style=\"background-color: #EF5350!important; border-color:#EF5350!important;color: #fff\" (click)=\"closeTrackModel()\">Cancel</button>\r\n                            </div> -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "\r\n<header id=\"header\" class=\"\">\r\n\t\t<!-- <div class=\"header-top\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6 col-sm-6 col-4 no-padding\">\r\n\t\t\t\t\t\t<div class=\"header-top-left\">\r\n\t\t\t\t\t\t\t<a href=\"\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6 col-sm-6 col-8 header-top-right no-padding\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-dribbble\"></i></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\"><i class=\"fa fa-behance\"></i></a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li style=\"margin-left: 7px\">\r\n\t\t\t\t\t\t\t\t<a href=\"\">बीमा सलाह</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t\t<div class=\"container main-menu\">\r\n\t\t\t<div class=\"row align-items-center justify-content-between d-flex\">\r\n\t\t\t\t<div id=\"logo\" class=\"data\" >\r\n\t\t\t\t\t<img src=\"./assets/img/logo.png\" alt=\"\" title=\"\" (click) = indexfun() >\r\n\t\t\t\t</div>\r\n\t\t\t\t<nav id=\"nav-menu-container\">\r\n\t\t\t\t\t<ul class=\"nav-menu sf-js-enabled sf-arrows\" style=\"touch-action: pan-y;\">\r\n\t\t\t\t\t\t<li class=\"menu-active data\" (click) = indexfun()>मुख्य पृष्ट</li>\r\n\t\t\t\t\t\t<li class=\"data\">वीडियो</li>\r\n\t\t\t\t\t\t<li class =\"data\" (click)= myfunction()>हमारे बारे में</li>\r\n\t\t\t\t\t\t<li class=\"menu-has-children sf-with-ul data \">इंश्योरेंस\r\n\t\t\t\t\t\t\t<ul style=\"display: none;\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">जीवन बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">कार बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">स्वास्थ्य बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">घर बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">यात्रा बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">मोटर साइकिल बीमा</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"\">अन्य बीमा</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li class=\"data\" (click) = contactfun()>सम्पर्क</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t\t<!--######## #nav-menu-container -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n"

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = "\r\n  <style> \r\n        marquee {\r\n                height: 280px;\r\n          padding: 10px 0;\r\n        \r\n        }\r\n      </style>\r\n<section class=\"banner-area relative\" id=\"home\" style=\"background-image: url('./assets/img/single-blog.jpg')\">\r\n        <div class=\"container\">\r\n                <div class=\"row d-flex align-items-center justify-content-center\">\r\n                        <div class=\"about-content col-lg-8 col-md-8 col-sm-12\">\r\n                                <h1 class=\"text-white text-uppercase\">\r\n                                        <span style=\"border-radius: 4px; padding: 15px; background: #fff; margin-right: 10px\"><img\r\n                                                        src={{categoryid.icon}} style=\"height: 56px\"></span>\r\n                                        {{categoryid.title}}\r\n\r\n                                </h1>\r\n                                <p class=\"text-white link-nav\"><a href=\"\">मुख्य\r\n                                                पृष्ट </a>\r\n                                        <span class=\"lnr lnr-arrow-right\"></span>\r\n                                        <a href=\"\">\r\n                                                सर्विसेज </a>\r\n                                        <span class=\"lnr lnr-arrow-right\"></span>\r\n                                        <a href=\"\">\r\n                                                {{categoryid.title}}</a>\r\n                                </p>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 home-banner-ad\" style=\"padding-right: 0\">\r\n                                <div class=\"banner-ads slick-initialized slick-slider slick-dotted\">\r\n                                        <div class=\"slick-list draggable\">\r\n                                                <div class=\"slick-track\" style=\"opacity: 1; width: 1095px; transform: translate3d(0px, 0px, 0px);\">\r\n                                                        <div class=\"slick-slide slick-current slick-active\"\r\n                                                                data-slick-index=\"0\" aria-hidden=\"false\" role=\"tabpanel\"\r\n                                                                id=\"slick-slide00\" style=\"width: 365px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                                                                <a href=\"\" tabindex=\"0\"><img class=\"img-fluid\"\r\n                                                                                                src={{nameblock}}></a>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide\" data-slick-index=\"1\" aria-hidden=\"true\"\r\n                                                                tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide01\" style=\"width: 365px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                                                                <a href=\"\" tabindex=\"-1\"><img src=\"./assets/img/ad_4.jpeg\"></a>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide\" data-slick-index=\"2\" aria-hidden=\"true\"\r\n                                                                tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide02\" style=\"width: 365px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                                                                <a href=\"\" tabindex=\"-1\"><img src=\"./assets/img/ad_4.jpeg\"></a>\r\n                                                                        </div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        <ul class=\"slick-dots\" style=\"display: block;\" role=\"tablist\">\r\n                                                <li class=\"slick-active\" role=\"presentation\"><button type=\"button\" role=\"tab\"\r\n                                                                id=\"slick-slide-control00\" aria-controls=\"slick-slide00\"\r\n                                                                aria-label=\"1 of 3\" tabindex=\"0\" aria-selected=\"true\">1</button></li>\r\n                                                <li role=\"presentation\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control01\"\r\n                                                                aria-controls=\"slick-slide01\" aria-label=\"2 of 3\"\r\n                                                                tabindex=\"-1\">2</button></li>\r\n                                                <li role=\"presentation\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control02\"\r\n                                                                aria-controls=\"slick-slide02\" aria-label=\"3 of 3\"\r\n                                                                tabindex=\"-1\">3</button></li>\r\n                                        </ul>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<section class=\"post-content-area single-post-area\" style=\"padding: 20px 0\">\r\n        <div class=\"container\">\r\n                <div class=\"row\">\r\n                        <div class=\"col-lg-9 posts-list\">\r\n                                <div class=\"single-post row\">\r\n                                        <div class=\"col-lg-7\" style=\"padding-left: 0\">\r\n                                                <!-- <img src={{mediaurl}} /> -->\r\n                                                <div class=\"video-frame\" style=\"width: 105%;\">\r\n                                                        <iframe class=\"card-top-img\" [src]=\"mediaurl | safe\"\r\n                                                                frameborder=\"0\" allowfullscreen=\"\"></iframe>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-5\">\r\n                                                <div class=\"widget-wrap\">\r\n\r\n\r\n                                                        <div class=\"single-sidebar-widget post-category-widget\">\r\n                                                                <h4 class=\"category-title\" *ngIf = \"isShow\">Highlights</h4>\r\n                                                                <h4 class=\"category-title\" *ngIf = \"!isShow\">No highlights</h4>\r\n                                                                \r\n                                                                <ul class=\"cat-list bullet-list\"   \r\n                                                                 *ngIf = \"highlights\">\r\n                                                                 <marquee direction=\"down\"> <li *ngFor=\"let highlight of highlights\" >\r\n                                                                        {{highlight}}\r\n                                                                         \r\n                                                                </li></marquee>\r\n                                                            \r\n                                                                       \r\n                                                                \r\n                                                                </ul>\r\n\r\n                                                        </div>\r\n\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"clearfix\"></div>\r\n                                        <br>\r\n                                        <div class=\"col-md-12\" style=\"margin-top: 30px;margin-left: -1.5rem;\">\r\n                                                <div class=\"related-videos slick-initialized slick-slider\" style=\"margin-bottom: 15px;\">\r\n                                                       <button\r\n                                                                class=\"slick-prev slick-arrow\" aria-label=\"Previous\"\r\n                                                                type=\"button\" style=\"display: block;margin-top: -2rem\">Previous</button> \r\n                                                        <div class=\"slick-list draggable\">\r\n                                                                <div class=\"slick-track\" style=\"opacity: 1; width: 3312px;\">\r\n\r\n                                                                        <div class=\"slick-slide slick-active\"\r\n                                                                                data-slick-index=\"1\" aria-hidden=\"false\"\r\n                                                                                style=\"width: 280px; \" *ngFor=\"let rel of rel_prod\">\r\n                                                                                <div>\r\n                                                                                        <div class=\"single-news card\"\r\n                                                                                                style=\"width: 100%; display: inline-block;\">\r\n                                                                                                <iframe class=\"card-top-img\"\r\n                                                                                                        [src]=\"rel.media.mediaurl | safe\"\r\n                                                                                                        frameborder=\"0\"\r\n                                                                                                        allowfullscreen=\"\"></iframe>\r\n                                                                                                <div class=\"card-body\">\r\n                                                                                                        <h4 class=\"card-title\">\r\n                                                                                                                <a (click)=\"getProdetailsonclick(rel._id)\"\r\n                                                                                                                        tabindex=\"0\">\r\n                                                                                                                     {{rel.title}}\r\n                                                                                                                </a>\r\n                                                                                                        </h4>\r\n                                                                                                        <!-- <div class =\"row\"  style=\"margin-top:10px \"> \r\n                                                                                                                        <div class=\"col-md-6\">\r\n                                                                                                                    <p> <i class=\"fa fa-thumbs-up\" style=\"font-size: 26px;\" aria-hidden=\"true\"></i> </p>\r\n                                                                                                                      </div>\r\n                                                                                    \r\n                                                                                                                      <div class=\"col-md-6\">\r\n                                                                                                                            <button type=\"button\" class=\"button-type\">Subscribe </button>\r\n                                                                                                                              </div>\r\n                                                                                                                    </div> -->\r\n\r\n                                                                                                </div>\r\n                                                                                        </div>\r\n                                                                                </div>\r\n                                                                        </div>\r\n\r\n\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <button class=\"slick-next slick-arrow\" aria-label=\"Next\" type=\"button\"\r\n                                                                style=\"display: block; margin-top:-2rem\">Next</button>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12\" style=\"padding-left: 0\">\r\n                                                <div class=\"row  mb-30\">\r\n                                                        <div class=\"col-12\">\r\n                                                                <img class=\"img-fluid\" src={{addnew1}} alt=\"\">\r\n                                                        </div>\r\n\r\n\r\n\r\n\r\n                                                </div>\r\n                                        </div>\r\n\r\n\r\n                                </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-lg-3 sidebar-widgets\" style=\"padding-right: 0\">\r\n                                <img src={{newadd}} class=\"img-fluid\" style=\"border:1px solid #f5f5f5; width: 100%\">\r\n                                <img src={{addnew1}} class=\"img-fluid\" style=\"border:1px solid #f5f5f5; width: 100%\">\r\n\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n<section class=\"section-companies\" style=\"background: #fff\">\r\n        <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                                <div class=\"main-title\">\r\n                                        <h1>कार इंश्योरेंस के प्रकार</h1>\r\n                                        <!--<span class=\"main-title-line\"></span>-->\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"padding: 0\">\r\n                                <div class=\"table-responsive\">\r\n                                        <table class=\"table table-striped table-bordered\" [innerHTML]=\"_htmlProperty3\">\r\n                                                <!-- <thead>\r\n                                                        <tr>\r\n                                                                <th>क्रमांक </th>\r\n                                                                <th>पॉलिसी कंपनी </th>\r\n                                                                <th> </th>\r\n                                                        </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                        <tr>\r\n                                                                <td>1</td>\r\n                                                                <td>-</td>\r\n                                                                <td>-</td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                                <td>2</td>\r\n                                                                <td>-</td>\r\n                                                                <td>-</td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                                <td>3</td>\r\n                                                                <td>-</td>\r\n                                                                <td>-</td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                                <td>4</td>\r\n                                                                <td>-</td>\r\n                                                                <td>-</td>\r\n                                                        </tr>\r\n                                                </tbody> -->\r\n                                        </table>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n<section class=\"section-companies\">\r\n        <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                                <div class=\"main-title\">\r\n                                        <h1>भारत की दस बड़ी कार इंश्योरेंस कंपनी </h1>\r\n                                        <!--<span class=\"main-title-line\"></span>-->\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"padding: 0\">\r\n                                <div class=\"companies slick-initialized slick-slider\"><button class=\"slick-prev slick-arrow slick-disabled\"\r\n                                                aria-label=\"Previous\" type=\"button\" aria-disabled=\"true\" style=\"display: block;\">Previous</button>\r\n                                        <div class=\"slick-list draggable\">\r\n                                                <div class=\"slick-track\" style=\"opacity: 1; width: 1900px; transform: translate3d(0px, 0px, 0px);\">\r\n                                                        <div class=\"slick-slide slick-current slick-active\"\r\n                                                                data-slick-index=\"0\" aria-hidden=\"false\" style=\"width: 190px;\">\r\n                                                                <div [innerHTML]=\"_htmlProperty1\">\r\n                                                                        <!-- <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/1 (1).png\"></div> -->\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <!-- <div class=\"slick-slide slick-active\" data-slick-index=\"1\"\r\n                                                                aria-hidden=\"false\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/2.jpg\"></div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide slick-active\" data-slick-index=\"2\"\r\n                                                                aria-hidden=\"false\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/3 (1).png\"></div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide slick-active\" data-slick-index=\"3\"\r\n                                                                aria-hidden=\"false\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/4 (1).png\"></div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide slick-active\" data-slick-index=\"4\"\r\n                                                                aria-hidden=\"false\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/5.jpg\"></div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide slick-active\" data-slick-index=\"5\"\r\n                                                                aria-hidden=\"false\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/6 (1).png\"></div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide\" data-slick-index=\"6\" aria-hidden=\"true\"\r\n                                                                tabindex=\"-1\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/7.jpg\"></div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide\" data-slick-index=\"7\" aria-hidden=\"true\"\r\n                                                                tabindex=\"-1\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/8.png\"></div>\r\n                                                                </div>\r\n                                                        </div>\r\n                                                        <div class=\"slick-slide\" data-slick-index=\"8\" aria-hidden=\"true\"\r\n                                                                tabindex=\"-1\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/9.png\"></div>\r\n                                                                </div>\r\n                                                        </div> -->\r\n                                                        <!-- <div class=\"slick-slide\" data-slick-index=\"9\" aria-hidden=\"true\"\r\n                                                                tabindex=\"-1\" style=\"width: 190px;\">\r\n                                                                <div>\r\n                                                                        <div class=\"company\" style=\"width: 100%; display: inline-block;\"><img\r\n                                                                                        src=\"./assets/img/10.jpg\"></div>\r\n                                                                </div>\r\n                                                        </div> -->\r\n                                                </div>\r\n                                        </div>\r\n                                        <button class=\"slick-next slick-arrow\" aria-label=\"Next\" type=\"button\" style=\"display: block;\"\r\n                                                aria-disabled=\"false\">Next</button>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n<section class=\"section-companies\" style=\"background: #fff; padding-bottom: 0\">\r\n        <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                                <div class=\"main-title\">\r\n                                        <h1>कार इंश्योरेंस से जुड़े मह्त्वपूर्ण नंबर्स </h1>\r\n                                        <!--<span class=\"main-title-line\"></span>-->\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"padding: 0\">\r\n                                <div class=\"table-responsive\">\r\n                                        <table class=\"table table-striped table-bordered\" [innerHTML]=\"_htmlProperty2\">\r\n                                                <!-- <thead>\r\n                                                        <tr>\r\n                                                                <th>क्रमांक </th>\r\n                                                                <th>पॉलिसी कंपनी </th>\r\n                                                                <th>नंबर </th>\r\n                                                        </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                        <tr>\r\n                                                                <td>1</td>\r\n                                                                <td>-</td>\r\n                                                                <td>-</td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                                <td>2</td>\r\n                                                                <td>-</td>\r\n                                                                <td>-</td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                                <td>3</td>\r\n                                                                <td>-</td>\r\n                                                                <td>-</td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                                <td>4</td>\r\n                                                                <td>-</td>\r\n                                                                <td>-</td>\r\n                                                        </tr>\r\n                                                </tbody> -->\r\n                                        </table>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<section class=\"latest-blog-area\">\r\n        <div class=\"container\">\r\n                <div class=\"row justify-content-center\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                                <div class=\"main-title\">\r\n                                        <h1 class=\"data\" (click)=\"article()\">नए लेख - <span style=\"font-size: 16px; font-weight:normal\">इंश्योरेंस\r\n                                                        पॉलिसीस से जुडी महत्वपूर्ण जानकारियाँ</span></h1>\r\n                                        <!--<span class=\"main-title-line\"></span>-->\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n\r\n                <div class=\"row new-articles\">\r\n                        <div class=\" single-blog\" *ngFor=\"let funart of half_article\">\r\n                                <div class=\"single-blog-item\">\r\n                                        <div class=\"thumb\">\r\n                                                <img class=\"img-fluid w-100\" src=\"{{funart.image}}\" alt=\"\">\r\n                                        </div>\r\n                                        <p class=\"date\">{{funart.date | date : 'dd MMM yyyy'}}</p>\r\n                                        <h4>\r\n                                                <a (click)=\"goToArtical(funart._id)\">{{funart.posttitle}}</a>\r\n                                        </h4>\r\n                                        <p>\r\n                                                {{funart.description}}\r\n                                        </p>\r\n                                        <div class=\"meta-bottom d-flex justify-content-between\">\r\n                                                <p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n                                                <p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                        <!--<div class=\" single-blog\">\r\n                                    <div class=\"single-blog-item\">\r\n\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"./assets/img/b2.jpg\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">10 Jan 2018</p>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<a href=\"#\">टर्म एंड लाइफ इंश्योरेंस पालिसी में अंतर</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tinappropriate behavior ipsum dolor sit amet, consectetur.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"meta-bottom d-flex justify-content-between\">\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\" single-blog\">\r\n                                    <div class=\"single-blog-item\">\r\n\t\t\t\t\t<div class=\"thumb\">\r\n                                            <img class=\"img-fluid w-100\" src=\"./assets/img/cat-widget2.jpg\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">10 Jan 2018</p>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<a href=\"#\">पॉलिसी सेटलमेंट के सुझाव और सही चुनाव</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tinappropriate behavior ipsum dolor sit amet, consectetur.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"meta-bottom d-flex justify-content-between\">\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-blog\">\r\n                                    <div class=\"single-blog-item\">\r\n\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t<img class=\"img-fluid w-100\" src=\"./assets/img/b4.jpg\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">10 Jan 2018</p>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<a href=\"#\">टर्म एंड लाइफ इंश्योरेंस पालिसी में अंतर</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tinappropriate behavior ipsum dolor sit amet, consectetur.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"meta-bottom d-flex justify-content-between\">\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n                             <div class=\" single-blog\">\r\n                                    <div class=\"single-blog-item\">\r\n\t\t\t\t\t<div class=\"thumb\">\r\n                                            <img class=\"img-fluid w-100\" src=\"./assets/img/cat-widget2.jpg\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"date\">10 Jan 2018</p>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<a href=\"#\">पॉलिसी सेटलमेंट के सुझाव और सही चुनाव</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tinappropriate behavior ipsum dolor sit amet, consectetur.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<div class=\"meta-bottom d-flex justify-content-between\">\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-heart\"></span> 15 Likes</p>\r\n\t\t\t\t\t\t<p><span class=\"lnr lnr-bubble\"></span> 02 Comments</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n                </div>\r\n\r\n\r\n        </div>\r\n</section>\r\n\r\n\r\n\r\n<section class=\"testimonial-area feedback\" style=\"height: 377px;\">\r\n        <div class=\"container\">\r\n                <div class=\"row align-items-center\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                                <div class=\"main-title\">\r\n                                        <h1>आपके फीडबैक </h1>\r\n\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n\r\n                        <div class=\"col-md-4\">\r\n                                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n\r\n                                                <p style=\"margin-top:20px\">\r\n                                                        Accessories Here you can find the best computer accessory for\r\n                                                        your laptop, monitor,\r\n                                                        printer, scanner, speaker, projector,\r\n                                                        hardware.\r\n                                                </p>\r\n                                                <h5>Mark Alviro Wiens</h5>\r\n\r\n                                                <p> CEO at Google</p>\r\n\r\n                                        </div>\r\n\r\n                                </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-md-4\">\r\n                                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n\r\n                                                <p style=\"margin-top:20px\">\r\n                                                        Accessories Here you can find the best computer accessory for\r\n                                                        your laptop, monitor,\r\n                                                        printer, scanner, speaker, projector,\r\n                                                        hardware.\r\n                                                </p>\r\n                                                <h5>Lina Harrington</h5>\r\n\r\n                                                <p> CEO at Google</p>\r\n\r\n                                        </div>\r\n\r\n                                </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-md-4\">\r\n                                <div class=\"media back-data\" style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n\r\n                                                <p style=\"margin-top:20px\">\r\n                                                        Accessories Here you can find the best computer accessory for\r\n                                                        your laptop, monitor,\r\n                                                        printer, scanner, speaker, projector,\r\n                                                        hardware.\r\n                                                </p>\r\n                                                <h5>Mark Alviro Wiens</h5>\r\n\r\n                                                <p> CEO at Google</p>\r\n\r\n                                        </div>\r\n\r\n                                </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n\r\n                        <!--  <div class=\"single-testimonial item d-flex flex-row\">\r\n                                        <div class=\"thumb\">\r\n                                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                        </div>\r\n                                        <div class=\"desc\">\r\n                                            <p>\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h4 mt-30>Lina Harrington</h4>\r\n                                            <p class=\"mb-0\">CEO at Google</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                                        <div class=\"thumb\">\r\n                                            <img src=\"./assets/img/user1.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                        </div>\r\n                                        <div class=\"desc\">\r\n                                            <p>\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h4 mt-30>Mark Alviro Wiens</h4>\r\n                                            <p class=\"mb-0\">CEO at Google</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"single-testimonial item d-flex flex-row\">\r\n                                        <div class=\"thumb\">\r\n                                            <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                        </div>\r\n                                        <div class=\"desc\">\r\n                                            <p>\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h4 mt-30>Lina Harrington</h4>\r\n                                            <p class=\"mb-0\">CEO at Google</p>\r\n                                        </div>\r\n                                    </div>-->\r\n\r\n                </div>\r\n        </div>\r\n</section>\r\n\r\n<section class=\"recent-completed-project\">\r\n        <div class=\"container\">\r\n                <div class=\"row justify-content-center\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                                <div class=\"main-title\">\r\n                                        <h1>और जानिये </h1>\r\n                                        <!--<span class=\"main-title-line\"></span>-->\r\n\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                                <div class=\"filters project-filter\">\r\n                                        <ul>\r\n                                                <li class=\"active\" data-filter=\".all\">सभी इंश्योरेंस</li>\r\n                                                <li data-filter=\".brand\">यात्रा </li>\r\n                                                <li data-filter=\".creative\">कार </li>\r\n\r\n                                        </ul>\r\n                                </div>\r\n                                <div class=\"projects_inner row\" id=\"lightgallery\" style=\"position: relative; height: 525px;\">\r\n                                        <div class=\"col-lg-3 col-sm-6 web all creative\" *ngFor=\"let text of data\">\r\n\r\n                                                <div class=\"projects_item\" style=\"height: 231px;\">\r\n                                                        <img class=\"img-fluid w-100\" src={{text.image}} alt=\"\">\r\n                                                        <div class=\"icon\">\r\n                                                                <img class=\"img-fluid\" src=\"../.././assets/img/icon.png\"\r\n                                                                        alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"projects_text\">\r\n                                                                <h4>\r\n                                                                        <img src={{text.icon}}><a href=\"\">{{text.title}}\r\n                                                                        </a>\r\n                                                                </h4>\r\n\r\n                                                        </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        <!-- <div class=\"col-lg-3 col-sm-6 brand all brand\" data-src=\"../.././assets/img/products/service-4.jpg\"\r\n                                                style=\"position: absolute; left: 24.9573%; top: 0px;\">\r\n                                                <div class=\"projects_item\">\r\n                                                        <img class=\"img-fluid w-100\" src=\"../.././assets/img/service-4.jpg\"\r\n                                                                alt=\"\">\r\n                                                        <div class=\"icon\">\r\n                                                                <img class=\"img-fluid\" src=\"../.././assets/img/icon.png\"\r\n                                                                        alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"projects_text\">\r\n                                                                <h4>\r\n                                                                        <img src=\"../.././assets/img/5.png\"><a href=\"http://protossofttech.com/sahibeema/portfolio-details.html\">ट्रेवल\r\n                                                                                इंश्योरेंस </a>\r\n                                                                </h4>\r\n\r\n                                                        </div>\r\n                                                </div>\r\n                                        </div> \r\n                                        <div class=\"col-lg-3 col-sm-6 all\" data-src=\"../.././assets/img/products/service-3.jpg\"\r\n                                                style=\"position: absolute; left: 50%; top: 0px;\">\r\n                                                <div class=\"projects_item\">\r\n                                                        <img class=\"img-fluid w-100\" src=\"../.././assets/img/service-3.jpg\"\r\n                                                                alt=\"\">\r\n                                                        <div class=\"icon\">\r\n                                                                <img class=\"img-fluid\" src=\"../.././assets/img/icon.png\"\r\n                                                                        alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"projects_text\">\r\n                                                                <h4>\r\n                                                                        <img src=\"../.././assets/img/3.png\"><a href=\"http://protossofttech.com/sahibeema/portfolio-details.html\">हेल्थ\r\n                                                                                इंश्योरेंस </a>\r\n                                                                </h4>\r\n\r\n                                                        </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-sm-6 all\" data-src=\"../.././assets/img/products/service-5.jpg\"\r\n                                                style=\"position: absolute; left: 74.9573%; top: 0px;\">\r\n                                                <div class=\"projects_item\">\r\n                                                        <img class=\"img-fluid w-100\" src=\"../.././assets/img/service-5.jpg\"\r\n                                                                alt=\"\">\r\n                                                        <div class=\"icon\">\r\n                                                                <img class=\"img-fluid\" src=\"../.././assets/img/icon.png\"\r\n                                                                        alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"projects_text\">\r\n                                                                <h4>\r\n                                                                        <img src=\"../.././assets/img/1.png\"><a href=\"http://protossofttech.com/sahibeema/portfolio-details.html\">लाइफ\r\n                                                                                इंश्योरेंस </a>\r\n                                                                </h4>\r\n\r\n                                                        </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-sm-6 all\" data-src=\"../.././assets/img/products/service-6.jpg\"\r\n                                                style=\"position: absolute; left: 0%; top: 262px;\">\r\n                                                <div class=\"projects_item\">\r\n                                                        <img class=\"img-fluid w-100\" src=\"../.././assets/img/service-6.jpg\"\r\n                                                                alt=\"\">\r\n                                                        <div class=\"icon\">\r\n                                                                <img class=\"img-fluid\" src=\"../.././assets/img/icon.png\"\r\n                                                                        alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"projects_text\">\r\n                                                                <h4>\r\n                                                                        <img src=\"../.././assets/img/6.png\"><a href=\"http://protossofttech.com/sahibeema/portfolio-details.html\">मोटर\r\n                                                                                साइकिल इंश्योरेंस </a>\r\n                                                                </h4>\r\n\r\n                                                        </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-sm-6 all\" data-src=\"../.././assets/img/products/service-7.jpg\"\r\n                                                style=\"position: absolute; left: 24.9573%; top: 262px;\">\r\n                                                <div class=\"projects_item\">\r\n                                                        <img class=\"img-fluid w-100\" src=\"../.././assets/img/service-7.jpg\"\r\n                                                                alt=\"\">\r\n                                                        <div class=\"icon\">\r\n                                                                <img class=\"img-fluid\" src=\"../.././assets/img/icon.png\"\r\n                                                                        alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"projects_text\">\r\n                                                                <h4>\r\n                                                                        <img src=\"../.././assets/img/4.png\"><a href=\"http://protossofttech.com/sahibeema/portfolio-details.html\">होम\r\n                                                                                इंश्योरेंस </a>\r\n                                                                </h4>\r\n\r\n                                                        </div>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-sm-6 all\" data-src=\"../.././assets/img/products/service-8.jpg\"\r\n                                                style=\"position: absolute; left: 50%; top: 262px;\">\r\n                                                <div class=\"projects_item\">\r\n                                                        <img class=\"img-fluid w-100\" src=\"../.././assets/img/service-8.jpg\"\r\n                                                                alt=\"\">\r\n                                                        <div class=\"icon\">\r\n                                                                <img class=\"img-fluid\" src=\"../.././assets/img/icon.png\"\r\n                                                                        alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"projects_text\">\r\n                                                                <h4>\r\n                                                                        <img src=\"../.././assets/img/7.png\"><a href=\"http://protossofttech.com/sahibeema/portfolio-details.html\">अन्य\r\n                                                                                इंश्योरेंस </a>\r\n                                                                </h4>\r\n\r\n                                                        </div>\r\n                                                </div>\r\n                                        </div>-->\r\n\r\n\r\n\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</section>\r\n"

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<section class=\"banner-area relative\" id=\"home\" style=\"background-image: url('./assets/img/single-blog.jpg')\">\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center justify-content-center\">\r\n            <div class=\"about-content col-lg-8 col-md-8 col-sm-12\">\r\n                <h1 class=\"text-white text-uppercase\">\r\n                                            हमारी टीम से मिले \r\n                </h1>\r\n                <p class=\"text-white link-nav\"><a href=\"index.html\">मुख्य पृष्ट  </a>\r\n                    <span class=\"lnr lnr-arrow-right\"></span>\r\n                    <a href=\"#\">\r\n                        टीम  </a>\r\n                    \r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 home-banner-ad\" style=\"padding-right: 0\">\r\n                    <div class=\"banner-ads slick-initialized slick-slider slick-dotted\">\r\n                            <div class=\"slick-list draggable\">\r\n                                    <div class=\"slick-track\" style=\"opacity: 1; width: 1095px; transform: translate3d(0px, 0px, 0px);\">\r\n                                            <div class=\"slick-slide slick-current slick-active\"\r\n                                                    data-slick-index=\"0\" aria-hidden=\"false\" role=\"tabpanel\"\r\n                                                    id=\"slick-slide00\" style=\"width: 365px;\">\r\n                                                    <div>\r\n                                                            <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                                                    <a href=\"\"\r\n                                                                            tabindex=\"0\"><img class=\"img-fluid\"\r\n                                                                                    src=\"./assets/img/ad_4.jpeg\"></a>\r\n                                                            </div>\r\n                                                    </div>\r\n                                            </div>\r\n                                             <div class=\"slick-slide\" data-slick-index=\"1\" aria-hidden=\"true\"\r\n                                                    tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide01\" style=\"width: 365px;\">\r\n                                                    <div>\r\n                                                            <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                                                    <a href=\"\"\r\n                                                                            tabindex=\"-1\"><img src=\"./assets/img/ad_4.jpeg\"></a>\r\n                                                            </div>\r\n                                                    </div>\r\n                                            </div>\r\n                                            <div class=\"slick-slide\" data-slick-index=\"2\" aria-hidden=\"true\"\r\n                                                    tabindex=\"-1\" role=\"tabpanel\" id=\"slick-slide02\" style=\"width: 365px;\">\r\n                                                    <div>\r\n                                                            <div class=\"ad\" style=\"width: 100%; display: inline-block;\">\r\n                                                                    <a href=\"\"\r\n                                                                            tabindex=\"-1\"><img src=\"./assets/img/ad_4.jpeg\"></a>\r\n                                                            </div>\r\n                                                    </div>\r\n                                            </div> \r\n                                    </div>\r\n                            </div>\r\n                            <ul class=\"slick-dots\" style=\"display: block;\" role=\"tablist\">\r\n                                    <li class=\"slick-active\" role=\"presentation\"><button type=\"button\" role=\"tab\"\r\n                                                    id=\"slick-slide-control00\" aria-controls=\"slick-slide00\"\r\n                                                    aria-label=\"1 of 3\" tabindex=\"0\" aria-selected=\"true\">1</button></li>\r\n                                    <li role=\"presentation\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control01\"\r\n                                                    aria-controls=\"slick-slide01\" aria-label=\"2 of 3\"\r\n                                                    tabindex=\"-1\">2</button></li>\r\n                                    <li role=\"presentation\"><button type=\"button\" role=\"tab\" id=\"slick-slide-control02\"\r\n                                                    aria-controls=\"slick-slide02\" aria-label=\"3 of 3\"\r\n                                                    tabindex=\"-1\">3</button></li>\r\n                            </ul>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n<section class=\"post-content-area single-post-area\">\r\n    <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team\">\r\n                            <div class=\"team-img\"><img src=\"./assets/img/rajneesh.jpg\"></div>\r\n                            <div class=\"team-detail\" style=\"background:rgba(255,255,255,0.94)\">\r\n                                <h4>रजनीश चावला</h4>\r\n                                    <p>फाउंडर </p>\r\n                                <hr>\r\n                                <ul class=\"social-links\">\r\n                <li><a href=\"#\" style=\"background: #3b5998\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                <li><a href=\"#\" style=\"background: #38A1F3\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                <li><a href=\"#\" style=\"background: #0077B5\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                <li><a href=\"#\" style=\"background: #d34836\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                                </ul>\r\n<!--                                    <a class=\"collapse-btn\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                                    <i class=\"fa fa-angle-down\"></i>\r\n                                </a>-->\r\n\r\n<!--                                    <div class=\"collapse\" id=\"collapseExample\">\r\n                                  <div class=\"card card-body\">\r\n                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n                                  </div>\r\n                                </div>-->\r\n                                \r\n                                \r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                        <div class=\"team-info\" style=\"padding-left: 35px\">\r\n                        <div style=\"background:#3face4; padding: 10px 15px 2px 15px\"><h2><b style=\"color:#fff\"> रजनीश चावला</b></h2>\r\n                                                        <p style=\"color:#fff\">फाउंडर </p></div>\r\n                         <hr>\r\n                            <p>\r\n                                <b> रजनीश चावला</b>, एक बिक्री और विपणन दिग्गज ने बीएफएसआई वर्टिकल में प्रमुख रूप से भारत के प्रमुख कॉर्पोरेट्स में 23 वर्षों से अधिक काम किया है। रजनीश ने जीई मनी, एचडीएफसी बैंक और इंडियाबुल्स हाउसिंग फाइनेंस जैसे उद्योग के दिग्गजों में नेतृत्व की भूमिका निभाई है। रजनीश को एक अनुभवी नेता और अनुभवात्मक और डिजिटल मार्केटिंग के क्षेत्र में एक प्रर्वतक के रूप में जाना जाता है।\r\n                            </p>\r\n                            <p>\r\nग्राहक की नब्ज और उनकी सबसे पसंदीदा भाषा में सामग्री का उपभोग करने की आवश्यकता के अनुभव पर इस पृष्ठभूमि और हाथ के साथ। रजनीश ने सही-बीमा शुरू की है जो क्षेत्रीय भाषाओं के बारे में सबसे सरल और आसान समझने के लिए विभिन्न बीमा उत्पादों के बारे में सबसे व्यापक और निष्पक्ष जानकारी प्रदान करने का वादा करती है। यह पोर्टल इंश्योरेंस जार्गन्स को ध्वस्त करने का प्रयास करता है और अपने ग्राहकों को चुनने के लिए कई विकल्प प्रदान करता है।\r\n</p><p>पिछले कुछ वर्षों में, रजनीश ने मार्केटिंग और कंज्यूमर एंगेजमेंट के सभी क्षेत्रों में एक प्रतिभा पूल का पोषण किया है, जो जरूरत के आधार पर सही-बीमा में कोर टीम के रूप में जुड़े रहेंगे।\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    </div>\r\n</section>\r\n<section class=\"testimonial-area feedback\" style=\"height: 377px;\">\r\n                <div class=\"container\">\r\n                    <div class=\"row align-items-center\">\r\n                        <div class=\"col-lg-12\" style=\"padding: 0\">\r\n                            <div class=\"main-title\">\r\n                                <h1>आपके फीडबैक </h1>\r\n            \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            \r\n                    <div class=\"row\">\r\n                       \r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                    <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                                    <div class=\"media-body\">\r\n            \r\n                                        <p style=\"margin-top:20px\">\r\n                                            Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                            printer, scanner, speaker, projector,\r\n                                            hardware.\r\n                                        </p>\r\n                                        <h5>Mark Alviro Wiens</h5>\r\n            \r\n                                        <p> CEO at Google</p>\r\n            \r\n                                    </div>\r\n            \r\n                                </div>\r\n            \r\n                            </div>\r\n            \r\n            \r\n                            <div class=\"col-md-4\">\r\n                                    <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                        <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                        <div class=\"media-body\">\r\n                \r\n                                            <p style=\"margin-top:20px\">\r\n                                                Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                printer, scanner, speaker, projector,\r\n                                                hardware.\r\n                                            </p>\r\n                                            <h5>Lina Harrington</h5>\r\n                \r\n                                            <p> CEO at Google</p>\r\n                \r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                </div>\r\n            \r\n                                <div class=\"col-md-4\">\r\n                                        <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                            <img class=\"mr-3 box-data-value\" src=\"./assets/img/user1.png\" alt=\"Generic placeholder image\">\r\n                                            <div class=\"media-body\">\r\n                    \r\n                                                <p style=\"margin-top:20px\">\r\n                                                    Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                    printer, scanner, speaker, projector,\r\n                                                    hardware.\r\n                                                </p>\r\n                                                <h5>Mark Alviro Wiens</h5>\r\n                    \r\n                                                <p> CEO at Google</p>\r\n                    \r\n                                            </div>\r\n                    \r\n                                        </div>\r\n                    \r\n                                    </div>\r\n            \r\n                                     <!-- <div class=\"col-md-4\">\r\n                                            <div class=\"media back-data\"style=\"width: 360px;height: 204px;\">\r\n                                                <img class=\"mr-3 box-data-value\" src=\"./assets/img/user2.png\" alt=\"Generic placeholder image\">\r\n                                                <div class=\"media-body\">\r\n                        \r\n                                                    <p style=\"margin-top:20px\">\r\n                                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                                        printer, scanner, speaker, projector,\r\n                                                        hardware.\r\n                                                    </p>\r\n                                                    <h5>Lina Harrington</h5>\r\n                        \r\n                                                    <p> CEO at Google</p>\r\n                        \r\n                                                </div>\r\n                        \r\n                                            </div>\r\n                        \r\n                                        </div>\r\n            \r\n            \r\n                          <div class=\"single-testimonial item d-flex flex-row\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <p>\r\n                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                        printer, scanner, speaker, projector,\r\n                                        hardware.\r\n                                    </p>\r\n                                    <h4 mt-30>Lina Harrington</h4>\r\n                                    <p class=\"mb-0\">CEO at Google</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"single-testimonial item d-flex flex-row\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/user1.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <p>\r\n                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                        printer, scanner, speaker, projector,\r\n                                        hardware.\r\n                                    </p>\r\n                                    <h4 mt-30>Mark Alviro Wiens</h4>\r\n                                    <p class=\"mb-0\">CEO at Google</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"single-testimonial item d-flex flex-row\">\r\n                                <div class=\"thumb\">\r\n                                    <img src=\"./assets/img/user2.png\" alt=\"\" style=\"width: auto; height: 60px\">\r\n                                </div>\r\n                                <div class=\"desc\">\r\n                                    <p>\r\n                                        Accessories Here you can find the best computer accessory for your laptop, monitor,\r\n                                        printer, scanner, speaker, projector,\r\n                                        hardware.\r\n                                    </p>\r\n                                    <h4 mt-30>Lina Harrington</h4>\r\n                                    <p class=\"mb-0\">CEO at Google</p>\r\n                                </div>\r\n                            </div>-->\r\n                      \r\n                    </div>\r\n                </div>\r\n            </section>  "

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(373);


/***/ })

},[701]);
//# sourceMappingURL=main.bundle.map