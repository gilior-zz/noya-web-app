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
var LampsComponent = (function () {
    function LampsComponent() {
    }
    LampsComponent.prototype.ngOnInit = function () {
        this.images = [];
        for (var i = 1; i < 4; i++)
            this.images.push({ ID: i, Selected: false });
    };
    LampsComponent.prototype.isSelected = function (id) { return this.images.find(function (i) { return i.ID == id; }).Selected; };
    LampsComponent.prototype.onClick = function (id) {
        this.images.find(function (i) { return i.ID == id; }).Selected = !this.images.find(function (i) { return i.ID == id; }).Selected;
    };
    LampsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './lamps.component.html',
            styleUrls: ['./lamps.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LampsComponent);
    return LampsComponent;
}());
exports.LampsComponent = LampsComponent;
//# sourceMappingURL=lamps.component.js.map