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
var services = require('../services/services');
var dal = require('../dal/models');
var TranslatePipe = (function () {
    function TranslatePipe(translationService, cacheManager) {
        this.translationService = translationService;
        this.cacheManager = cacheManager;
    }
    TranslatePipe.prototype.transform = function (value) {
        var res = this.translationService.TranlateItem(value);
        return res;
        //var lang = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew);
        //if (lang == 0) {
        //    return this.translationFile[value];
        //}
        //if (lang == 1) {
        //    return value;
        //}
    };
    TranslatePipe = __decorate([
        core_1.Pipe({
            name: 'translate',
        }), 
        __metadata('design:paramtypes', [services.TranslationService, services.CacheManager])
    ], TranslatePipe);
    return TranslatePipe;
}());
exports.TranslatePipe = TranslatePipe;
var SafeResourcePipe = (function () {
    function SafeResourcePipe(dataService, cacheManager, sanitizer) {
        this.dataService = dataService;
        this.cacheManager = cacheManager;
        this.sanitizer = sanitizer;
    }
    SafeResourcePipe.prototype.transform = function (value, resourceType) {
        switch (resourceType) {
            case dal.ResourceType.Html:
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case dal.ResourceType.Url:
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
    };
    SafeResourcePipe = __decorate([
        core_1.Pipe({
            name: 'safeResource',
        }), 
        __metadata('design:paramtypes', [services.DataService, services.CacheManager, platform_browser_1.DomSanitizer])
    ], SafeResourcePipe);
    return SafeResourcePipe;
}());
exports.SafeResourcePipe = SafeResourcePipe;
//# sourceMappingURL=pipes.js.map