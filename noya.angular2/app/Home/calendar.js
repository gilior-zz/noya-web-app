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
var dal = require('../dal/models');
var services = require('../services/services');
var Calendar = (function () {
    function Calendar(dataService, cacheService) {
        this.dataService = dataService;
        this.cacheService = cacheService;
    }
    Calendar.prototype.onLeft = function () {
        var _this = this;
        var lang = +this.cacheService.GetFromCache('lang', "0");
        switch (lang) {
            case dal.Language.Hebrew:
                var requiredData = dal.NextData.Next;
                break;
            case dal.Language.English:
                var requiredData = dal.NextData.Prev;
                break;
        }
        var req = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: requiredData };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe(function (res) {
            _this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            _this.text = res.CalendarItem.Text;
            _this.cacheService.StoreInCache('currentDataDate', _this.dataDate);
        }, function (err) { });
    };
    Calendar.prototype.onRight = function () {
        var _this = this;
        var lang = +this.cacheService.GetFromCache('lang', "0");
        switch (lang) {
            case dal.Language.Hebrew:
                var requiredData = dal.NextData.Prev;
                break;
            case dal.Language.English:
                var requiredData = dal.NextData.Next;
                break;
        }
        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));
        var req = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: requiredData };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe(function (res) {
            _this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            _this.text = res.CalendarItem.Text;
            _this.cacheService.StoreInCache('currentDataDate', _this.dataDate);
        }, function (err) { });
    };
    Calendar.prototype.ngOnInit = function () {
        var _this = this;
        var nextData = dal.NextData.Currnet;
        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));
        var req = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: nextData };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe(function (res) {
            _this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            _this.text = res.CalendarItem.Text;
            _this.cacheService.StoreInCache('currentDataDate', _this.dataDate);
        }, function (err) { });
    };
    Calendar = __decorate([
        core_1.Component({
            selector: 'noya-calendar',
            templateUrl: './calendar.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [services.DataService, services.CacheManager])
    ], Calendar);
    return Calendar;
}());
exports.Calendar = Calendar;
//# sourceMappingURL=calendar.js.map