import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const email = control.value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const no = re.test(email);
        return no ? { 'illegalEmailFormat': { name } } : null;
    };
}

@Directive({
    selector: '[emailValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
   
    private valFn = Validators.nullValidator;

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

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/