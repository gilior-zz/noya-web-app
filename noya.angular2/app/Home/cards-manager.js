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
var CardsManagerComponent = (function (_super) {
    __extends(CardsManagerComponent, _super);
    function CardsManagerComponent(dataService, cacheManager, injector) {
        _super.call(this, injector);
        this.dataService = dataService;
        this.cacheManager = cacheManager;
        this.injector = injector;
        this.trios = new Array();
        this.dous = new Array();
    }
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
                }
                _this.trios[_this.trios.length - 1].push(traverseItem);
                if (j++ % 2 == 0) {
                    _this.dous[_this.dous.length] = new Array();
                }
                _this.dous[_this.dous.length - 1].push(traverseItem);
            });
        }, function (err) { });
    };
    CardsManagerComponent = __decorate([
        core_1.Component({ selector: 'cards-manager', moduleId: module.id, templateUrl: './cards-manager.html', styleUrls: ['./cards-manager.css'] }), 
        __metadata('design:paramtypes', [services_1.DataService, services_1.CacheManager, core_1.Injector])
    ], CardsManagerComponent);
    return CardsManagerComponent;
}(base_component_1.BaseComponent));
exports.CardsManagerComponent = CardsManagerComponent;
//# sourceMappingURL=cards-manager.js.map