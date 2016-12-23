"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var services = require('../services/services');
var page_name_service_1 = require('../services/page-name.service');
var HeaderImage = (function () {
    //ImageURL: string;
    //ImageURL: SafeUrl;
    function HeaderImage(pn, dataService, logService, sanitizer, router) {
        this.pn = pn;
        this.dataService = dataService;
        this.logService = logService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.active = true;
        this.mainImage = 'http://res.cloudinary.com/lior/image/upload/v1468953847/home_pic.jpg';
        this.kidsImage = 'http://res.cloudinary.com/lior/image/upload/v1478964869/galilu-home-image.png';
        this.safeMainImage = this.sanitizer.bypassSecurityTrustStyle("url('" + this.mainImage + "')");
        this.safeKidsImage = this.sanitizer.bypassSecurityTrustStyle("url('" + this.kidsImage + "')");
    }
    HeaderImage.prototype.canActivate = function (route, state) {
        //this.active = false;
        //setTimeout(this.active = true, 0);
        return true;
    };
    Object.defineProperty(HeaderImage.prototype, "Title", {
        get: function () { return this.pn.currentUrl.includes('galilu') ? 'Galilu' : 'Noya Schleien'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderImage.prototype, "Subject", {
        get: function () { return this.pn.currentUrl.includes('galilu') ? 'Custom designed products for toddlers' : 'Marimba & Percussion'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderImage.prototype, "safeImage", {
        get: function () { return this.pn.currentUrl.includes('galilu') ? this.safeKidsImage : this.safeMainImage; },
        enumerable: true,
        configurable: true
    });
    HeaderImage.prototype.ngOnInit = function () {
        //this.logService.writeToLog('in ngOnInit');
        //var req: dal.MenuImageRequest = { Language: dal.Language.Hebrew, PathName: this.pageName };
        //this.dataService.ConnectToApiData(req, 'api/Data/GetImageForMenuItem').subscribe(
        //    (res: dal.MenuImageResponse) => {
        //        this.ImageURL = res.ImageURL; //console.log(this.ImageURL) }
        //        this.safeImage = this.sanitizer.bypassSecurityTrustStyle(`url('${this.ImageURL}')`);
        //    })
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HeaderImage.prototype, "pageName", void 0);
    HeaderImage = __decorate([
        core_1.Component({
            selector: 'header-image',
            templateUrl: './header.image.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [page_name_service_1.pageNameService, services.DataService, services.LogService, platform_browser_1.DomSanitizer, router_1.Router])
    ], HeaderImage);
    return HeaderImage;
}());
exports.HeaderImage = HeaderImage;
//# sourceMappingURL=header.image.js.map