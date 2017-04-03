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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../dal/models");
var services_1 = require("./services");
var UtiltyService = (function () {
    function UtiltyService(cacheManager) {
        this.cacheManager = cacheManager;
    }
    Object.defineProperty(UtiltyService.prototype, "IsHebrewMode", {
        get: function () { return this.cacheManager.GetFromCache('lang', 0) == models_1.Language.Hebrew; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtiltyService.prototype, "IsEnglishMode", {
        get: function () { return !this.IsHebrewMode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtiltyService.prototype, "IsMobile", {
        get: function () { return window.innerWidth <= 767; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtiltyService.prototype, "IsPhablet", {
        get: function () { return window.innerWidth > 767 && window.innerWidth <= 991; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtiltyService.prototype, "IsTablet", {
        get: function () { return window.innerWidth > 991 && window.innerWidth <= 1199; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtiltyService.prototype, "IsDesktop", {
        get: function () { return window.innerWidth > 1199; },
        enumerable: true,
        configurable: true
    });
    return UtiltyService;
}());
UtiltyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [services_1.CacheManager])
], UtiltyService);
exports.UtiltyService = UtiltyService;
//# sourceMappingURL=utitlity.js.map