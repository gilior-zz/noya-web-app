"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services = require("../services/services");
var dal = require("../dal/models");
var router_1 = require("@angular/router");
var base_component_1 = require("../common/base.component");
var page_name_service_1 = require("../services/page-name.service");
var MenuComponent = (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(dataService, cacheManager, router, injector, pn, yts) {
        var _this = _super.call(this, injector) || this;
        _this.dataService = dataService;
        _this.cacheManager = cacheManager;
        _this.router = router;
        _this.injector = injector;
        _this.pn = pn;
        _this.yts = yts;
        _this.isCollapsed = true;
        return _this;
    }
    Object.defineProperty(MenuComponent.prototype, "pageName", {
        get: function () { return this.pn.currentPageName; },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.UpdateImage = function (imageUrl) {
    };
    MenuComponent.prototype.goToContact = function () {
        this.router.navigate(['/contact']);
    };
    Object.defineProperty(MenuComponent.prototype, "dir", {
        get: function () {
            var l = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew);
            if (l == dal.Language.Hebrew)
                return 'rtl';
            else
                return 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.changeMode = function () {
        if (this.pn.currentUrl.includes('galilu'))
            this.router.navigate(['/home']);
        else
            this.router.navigate(['galilu']);
    };
    Object.defineProperty(MenuComponent.prototype, "isHebrew", {
        get: function () {
            var l = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew) == dal.Language.Hebrew;
            return l;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "galiluMessage", {
        get: function () {
            return this.pn.currentUrl.includes('galilu') ? 'Noya Schleien' : 'To store';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "displayMenu", {
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
    MenuComponent.prototype.changeToEnglish = function () {
        this.cacheManager.StoreInCache("lang", dal.Language.English);
        document.location.reload();
    };
    MenuComponent.prototype.changeToHebrew = function () {
        this.cacheManager.StoreInCache("lang", dal.Language.Hebrew);
        document.location.reload();
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
    };
    return MenuComponent;
}(base_component_1.BaseComponent));
MenuComponent = __decorate([
    core_1.Component({ selector: 'main-menu', moduleId: module.id, templateUrl: './menu.html', styleUrls: ['./menu.css'] }),
    __metadata("design:paramtypes", [services.DataService, services.CacheManager, router_1.Router, core_1.Injector, page_name_service_1.pageNameService, services.youTubeService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.js.map