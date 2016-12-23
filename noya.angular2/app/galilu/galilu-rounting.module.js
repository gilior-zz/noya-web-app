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
var router_1 = require('@angular/router');
var center_component_1 = require('./center/center.component');
var home_component_1 = require('./home/home.component');
var pallet_component_1 = require('./pallet/pallet.component');
var bags_component_1 = require('./bags/bags.component');
var cushions_component_1 = require('./cushions/cushions.component');
var lamps_component_1 = require('./lamps/lamps.component');
var books_component_1 = require('./books/books.component');
var GaliluRoutingModule = (function () {
    function GaliluRoutingModule() {
    }
    GaliluRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: home_component_1.HomeComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'center'
                            },
                            {
                                path: 'center',
                                component: center_component_1.CenterComponent
                            },
                            {
                                path: 'pallet',
                                component: pallet_component_1.PalletComponent
                            },
                            {
                                path: 'books',
                                component: books_component_1.BooksComponent
                            },
                            {
                                path: 'cushions',
                                component: cushions_component_1.CushionsComponent
                            },
                            {
                                path: 'lamps',
                                component: lamps_component_1.LampsComponent
                            },
                            {
                                path: 'bags',
                                component: bags_component_1.BagsComponent
                            },
                        ]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GaliluRoutingModule);
    return GaliluRoutingModule;
}());
exports.GaliluRoutingModule = GaliluRoutingModule;
//# sourceMappingURL=galilu-rounting.module.js.map