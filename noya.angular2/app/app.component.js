"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var services = require("./services/services");
var dal = require("./dal/models");
var router_1 = require('@angular/router');
var base_component_1 = require('./common/base.component');
var page_name_service_1 = require('./services/page-name.service');
//import * as blabla from './youmax/js/source_unpacked/jquery.youmax.js' 
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(dataService, cacheManager, router, injector, pn, yts) {
        _super.call(this, injector);
        this.dataService = dataService;
        this.cacheManager = cacheManager;
        this.router = router;
        this.injector = injector;
        this.pn = pn;
        this.yts = yts;
    }
    Object.defineProperty(AppComponent.prototype, "pageName", {
        get: function () { return this.pn.currentPageName; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.UpdateImage = function (imageUrl) {
    };
    AppComponent.prototype.goToContact = function () {
        this.router.navigate(['/contact']);
    };
    AppComponent.prototype.changeMode = function () {
        if (this.pn.currentUrl.includes('galilu'))
            this.router.navigate(['/home']);
        else
            this.router.navigate(['galilu']);
    };
    Object.defineProperty(AppComponent.prototype, "isHebrew", {
        get: function () {
            var l = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew) == dal.Language.Hebrew;
            return l;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "galiluMessage", {
        get: function () {
            return this.pn.currentUrl.includes('galilu') ? 'Noya Schleien' : 'To store';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "displayMenu", {
        //@HostListener('mouseenter') onMouseEnter() {
        //    this.kidsArtMessage = 'Coming Soon...';
        //}
        //@HostListener('mouseleave') onMouseLeave() {
        //    this.kidsArtMessage = 'Kids Art';
        //}
        get: function () {
            //console.log('in displayMenu');
            return !this.pn.currentUrl.includes('galilu');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.changeToEnglish = function () {
        this.cacheManager.StoreInCache("lang", dal.Language.English);
        document.location.reload();
    };
    AppComponent.prototype.changeToHebrew = function () {
        this.cacheManager.StoreInCache("lang", dal.Language.Hebrew);
        document.location.reload();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        //var req: dal.DataRequest = { Language: dal.Language.Hebrew };
        //this.dataService.ConnectToApiData(req, "api/Data/GetMenuItems").
        //    subscribe(
        //    (dataresponse: dal.MenuResponse) => {
        //        this.menuItems = dataresponse.MenuItems
        //    },
        //    (error: dal.DataError) => console.error(error));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./app.component.html",
            styleUrls: ['./app.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [services.DataService, services.CacheManager, router_1.Router, core_1.Injector, page_name_service_1.pageNameService, services.youTubeService])
    ], AppComponent);
    return AppComponent;
}(base_component_1.BaseComponent));
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map