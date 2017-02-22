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
var forms_1 = require('@angular/forms');
/** A hero's name can't match the given regular expression */
function forbiddenNameValidator() {
    return function (control) {
        var email = control.value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var no = re.test(email);
        return no ? { 'illegalEmailFormat': { name: name } } : null;
    };
}
exports.forbiddenNameValidator = forbiddenNameValidator;
var EmailValidatorDirective = (function () {
    function EmailValidatorDirective() {
        this.valFn = forms_1.Validators.nullValidator;
    }
    //ngOnChanges(changes: SimpleChanges): void {
    //    const change = changes['forbiddenName'];
    //    if (change) {
    //        const val: string | RegExp = change.currentValue;
    //        const re = val instanceof RegExp ? val : new RegExp(val, 'i');
    //        this.valFn = forbiddenNameValidator(re);
    //    } else {
    //        this.valFn = Validators.nullValidator;
    //    }
    //}
    EmailValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    EmailValidatorDirective = __decorate([
        core_1.Directive({
            selector: '[emailValidator]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
        }), 
        __metadata('design:paramtypes', [])
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
}());
exports.EmailValidatorDirective = EmailValidatorDirective;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=invalid-enail.directive.js.map