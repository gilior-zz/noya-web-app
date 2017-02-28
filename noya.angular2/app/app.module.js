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
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var home_1 = require("./Home/home");
var calendar_1 = require('./Home/calendar');
var traverse_item_component_1 = require('./Home/traverse-item.component');
var updates_1 = require('./Home/updates');
var cards_manager_1 = require('./Home/cards-manager');
var press_1 = require('./Home/press');
var biography_1 = require("./Biography/biography");
var links_1 = require("./Links/links");
var contact_1 = require("./Contact/contact");
var shared_module_1 = require('./shared.module');
var programs_1 = require("./Programs/programs");
var pictures_1 = require("./Pictures/pictures");
var videos_1 = require("./Videos/videos");
var link_component_1 = require('./galilu/link/link.component');
var header_image_1 = require("./HeaderImage/header.image");
var menu_1 = require("./Menu/menu");
var lang_bar_component_1 = require("./LangBar/lang-bar.component");
var pipes = require('./pipes/pipes');
var services = require("./services/services");
var utitlity_1 = require('./services/utitlity');
var invalid_email_directive_1 = require('./common/invalid-email.directive');
//import {GaliluModule} from './galilu/galilu-module'
var page_name_service_1 = require('./services/page-name.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, home_1.Home, biography_1.Biography, links_1.Links, contact_1.Contact, programs_1.Programs, pictures_1.Pictures, videos_1.Videos, header_image_1.HeaderImage, calendar_1.Calendar, press_1.Press, press_1.Press, updates_1.Updates, traverse_item_component_1.TraverseItemComponent, pipes.SafeResourcePipe, link_component_1.GaliluLink, cards_manager_1.CardsManagerComponent, menu_1.MenuComponent, lang_bar_component_1.LangBarComponent, invalid_email_directive_1.ForbiddenValidatorDirective],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routes_1.AppRoutingModule,
                shared_module_1.SharedModule
            ],
            providers: [page_name_service_1.pageNameService, services.CacheManager, services.DataService, services.DialogService, services.LogService, services.TranslationService, platform_browser_1.Title, services.youTubeService, utitlity_1.UtiltyService],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map