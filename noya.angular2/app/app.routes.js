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
var home_1 = require("./Home/home");
var biography_1 = require("./Biography/biography");
var links_1 = require("./Links/links");
var contact_1 = require("./Contact/contact");
var programs_1 = require("./Programs/programs");
var pictures_1 = require("./Pictures/pictures");
var videos_1 = require("./Videos/videos");
var can_deactivate_guard_service_1 = require('./common/can-deactivate-guard.service');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    {
                        path: 'galilu',
                        loadChildren: 'app/galilu/galilu.module#GaliluModule',
                    },
                    { path: "home", component: home_1.Home },
                    { path: "biography", component: biography_1.Biography },
                    { path: "pictures", component: pictures_1.Pictures },
                    { path: "videos", component: videos_1.Videos },
                    { path: "programs", component: programs_1.Programs },
                    { path: "links", component: links_1.Links },
                    { path: "contact", component: contact_1.Contact, canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard], },
                    { path: '', redirectTo: 'home', pathMatch: 'full' }
                ], { useHash: true })
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                can_deactivate_guard_service_1.CanDeactivateGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routes.js.map