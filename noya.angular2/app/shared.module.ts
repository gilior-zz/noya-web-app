import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }        from '@angular/forms';

import {TranslatePipe}  from "./pipes/pipes"

@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [TranslatePipe],
    exports: [TranslatePipe,FormsModule]
})
export class SharedModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/