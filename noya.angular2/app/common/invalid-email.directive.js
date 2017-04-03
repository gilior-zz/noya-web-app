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
var forms_1 = require("@angular/forms");
/** A hero's name can't match the given regular expression */
function forbiddenNameValidator() {
    return function (control) {
        var name = control.value;
        var nameRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var no = nameRe.test(name) || !name;
        return !no ? { 'forbiddenName': { name: name } } : null;
    };
}
exports.forbiddenNameValidator = forbiddenNameValidator;
var ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = (function () {
    function ForbiddenValidatorDirective() {
        this.valFn = forms_1.Validators.nullValidator;
    }
    ForbiddenValidatorDirective.prototype.ngOnInit = function () {
        this.valFn = forbiddenNameValidator();
    };
    ForbiddenValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    return ForbiddenValidatorDirective;
}());
ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[forbiddenName]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: ForbiddenValidatorDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], ForbiddenValidatorDirective);
exports.ForbiddenValidatorDirective = ForbiddenValidatorDirective;
var ForbiddenValidatorDirective_1;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=invalid-email.directive.js.map