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
var models_1 = require('../dal/models');
var services_1 = require('../services/services');
var Updates = (function () {
    function Updates(dataService) {
        this.dataService = dataService;
    }
    Updates.prototype.ngOnInit = function () {
        var _this = this;
        var req = { Language: models_1.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetUpdates').subscribe(function (res) { return _this.updates = res.Updates; });
    };
    Updates = __decorate([
        core_1.Component({
            selector: 'noya-updates',
            templateUrl: './updates.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [services_1.DataService])
    ], Updates);
    return Updates;
}());
exports.Updates = Updates;
//# sourceMappingURL=updates.js.map