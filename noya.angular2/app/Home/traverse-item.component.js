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
var TraverseItemComponent = (function () {
    function TraverseItemComponent(dataService) {
        this.dataService = dataService;
        this.person = { Email: '', Name: '' };
    }
    TraverseItemComponent.prototype.ngOnInit = function () {
        this.message = { Content: '', Date: new Date(), IP: '', Sender: { Email: this.person.Email, Name: this.person.Name } };
    };
    TraverseItemComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.message);
        this.isSubmitting = true;
        var req = { Message: this.message, Language: models_1.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/SendMessage')
            .subscribe(function (res) {
            _this.submitted = true;
            _this.isSubmitting = false;
        }, function (err) {
            _this.displaySubmitError = true;
            _this.isSubmitting = false;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TraverseItemComponent.prototype, "traverseItem", void 0);
    TraverseItemComponent = __decorate([
        core_1.Component({
            selector: 'traverse-item',
            moduleId: module.id,
            templateUrl: './traverse-item.component.html',
            styleUrls: ['./traverse-item.component.css']
        }), 
        __metadata('design:paramtypes', [services_1.DataService])
    ], TraverseItemComponent);
    return TraverseItemComponent;
}());
exports.TraverseItemComponent = TraverseItemComponent;
//# sourceMappingURL=traverse-item.component.js.map