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
var router_1 = require("@angular/router");
var services_1 = require("../services/services");
var models_1 = require("../dal/models");
var Videos = (function (_super) {
    __extends(Videos, _super);
    function Videos(router, injector, yts, cacheManager) {
        var _this = _super.call(this, injector) || this;
        _this.router = router;
        _this.injector = injector;
        _this.yts = yts;
        _this.cacheManager = cacheManager;
        _this.videos = new Array();
        return _this;
    }
    Videos.prototype.ngAfterViewInit = function () {
        //var options = {
        //    apiKey: "AIzaSyCveFKo8nQBAsJtrTyotXVx2wxqg5rHDBY",
        //    clientId: "32210824715-6kkbgjdro3468agc4e66erp7llv3kf8n.apps.googleusercontent.com",
        //    channel: "https://www.youtube.com/user/noyaschleien",
        //    youtube_channel_uploads: [
        //        {
        //            name: "",
        //            url: "https://www.youtube.com/user/noyaschleien",
        //            selected: true
        //        },
        //    ],
        //    autoPlayVideo: true,
        //    displayFirstVideoOnLoad: true,
        //    autoLoadComments: true,
        //    hideNavigation: true,
        //    hideLoadMore: true,
        //    hideHeader: true
        //};
        //this.youmaxObj = new youmax(options);
    };
    Videos.prototype.ngOnInit = function () {
        var _this = this;
        var cachedLang = this.cacheManager.GetFromCache('lang', models_1.Language.Hebrew);
        var lang = cachedLang == models_1.Language.English ? 'en' : 'he';
        this.yts.fetchVideos().subscribe(function (i) { return i.forEach(function (j) {
            _this.videos.push({ title: j['snippet']['title'], videoId: j['snippet']['resourceId']['videoId'], lang: lang });
        }); });
    };
    return Videos;
}(base_component_1.BaseComponent));
Videos = __decorate([
    core_1.Component({
        templateUrl: "./videos.html",
        moduleId: module.id,
        styleUrls: ['./videos.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, core_1.Injector, services_1.youTubeService, services_1.CacheManager])
], Videos);
exports.Videos = Videos;
//# sourceMappingURL=videos.js.map