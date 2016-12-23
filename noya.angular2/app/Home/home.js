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
var core_1 = require('@angular/core');
var base_component_1 = require('../common/base.component');
var services_1 = require('../services/services');
var router_1 = require('@angular/router');
var Home = (function (_super) {
    __extends(Home, _super);
    function Home(router, injector, dataService, cacheManager) {
        _super.call(this, injector);
        this.router = router;
        this.injector = injector;
        this.dataService = dataService;
        this.cacheManager = cacheManager;
    }
    Home.prototype.ngAfterViewInit = function () {
        //console.debug(this.pageName);
    };
    //public pageName
    Home.prototype.ngOnInit = function () {
        var _this = this;
        var lang = +this.cacheManager.GetFromCache('lang', "0");
        var req = { Language: lang };
        this.dataService.ConnectToApiData(req, 'api/Data/GetTraverseItems').subscribe(function (res) {
            _this.traverseItems = res.TraverseItems;
        }, function (err) { });
        ;
    };
    Home = __decorate([
        core_1.Component({
            templateUrl: "./home.html",
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.Injector, services_1.DataService, services_1.CacheManager])
    ], Home);
    return Home;
}(base_component_1.BaseComponent));
exports.Home = Home;
//# sourceMappingURL=home.js.map