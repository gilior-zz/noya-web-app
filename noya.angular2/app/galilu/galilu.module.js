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
var common_1 = require('@angular/common');
var shared_module_1 = require('../shared.module');
var center_component_1 = require('./center/center.component');
var home_component_1 = require('./home/home.component');
var galilu_rounting_module_1 = require('./galilu-rounting.module');
var pallet_component_1 = require('./pallet/pallet.component');
var bags_component_1 = require('./bags/bags.component');
var cushions_component_1 = require('./cushions/cushions.component');
var lamps_component_1 = require('./lamps/lamps.component');
var books_component_1 = require('./books/books.component');
var product_page_caption_component_1 = require('./helper-directives/product-page-caption.component');
var GaliluModule = (function () {
    function GaliluModule() {
    }
    GaliluModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                galilu_rounting_module_1.GaliluRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [center_component_1.CenterComponent, center_component_1.CenterComponent, pallet_component_1.PalletComponent, home_component_1.HomeComponent, bags_component_1.BagsComponent, cushions_component_1.CushionsComponent, lamps_component_1.LampsComponent, books_component_1.BooksComponent, product_page_caption_component_1.ProductPageCaptionComponent],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], GaliluModule);
    return GaliluModule;
}());
exports.GaliluModule = GaliluModule;
//# sourceMappingURL=galilu.module.js.map