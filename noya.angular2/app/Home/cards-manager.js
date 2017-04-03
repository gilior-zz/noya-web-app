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
var base_component_1 = require("../common/base.component");
var services_1 = require("../services/services");
var utitlity_1 = require("../services/utitlity");
var CardsManagerComponent = (function (_super) {
    __extends(CardsManagerComponent, _super);
    function CardsManagerComponent(dataService, cacheManager, injector, utiltyService) {
        var _this = _super.call(this, injector) || this;
        _this.dataService = dataService;
        _this.cacheManager = cacheManager;
        _this.injector = injector;
        _this.utiltyService = utiltyService;
        _this.trios = new Array();
        _this.dous = new Array();
        return _this;
    }
    CardsManagerComponent.prototype.onResize = function () {
    };
    Object.defineProperty(CardsManagerComponent.prototype, "showTrio", {
        get: function () { return this.utiltyService.IsDesktop || this.utiltyService.IsTablet; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardsManagerComponent.prototype, "showDuo", {
        get: function () { return this.utiltyService.IsPhablet; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardsManagerComponent.prototype, "showOne", {
        get: function () { return this.utiltyService.IsMobile; },
        enumerable: true,
        configurable: true
    });
    CardsManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var lang = +this.cacheManager.GetFromCache('lang', "0");
        var req = { Language: lang };
        this.dataService.ConnectToApiData(req, 'api/Data/GetTraverseItems').subscribe(function (res) {
            _this.traverseItems = res.TraverseItems;
            var i = 0;
            var j = 0;
            _this.traverseItems.forEach(function (traverseItem) {
                if (i++ % 3 == 0) {
                    _this.trios[_this.trios.length] = new Array();
                    //console.log('new trio');
                }
                _this.trios[_this.trios.length - 1].push(traverseItem);
                if (j++ % 2 == 0) {
                    _this.dous[_this.dous.length] = new Array();
                    //console.log('new dou');
                }
                _this.dous[_this.dous.length - 1].push(traverseItem);
            });
        }, function (err) { });
    };
    return CardsManagerComponent;
}(base_component_1.BaseComponent));
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CardsManagerComponent.prototype, "onResize", null);
CardsManagerComponent = __decorate([
    core_1.Component({ selector: 'cards-manager', moduleId: module.id, templateUrl: './cards-manager.html', styleUrls: ['./cards-manager.css'] }),
    __metadata("design:paramtypes", [services_1.DataService, services_1.CacheManager, core_1.Injector, utitlity_1.UtiltyService])
], CardsManagerComponent);
exports.CardsManagerComponent = CardsManagerComponent;
//# sourceMappingURL=cards-manager.js.map