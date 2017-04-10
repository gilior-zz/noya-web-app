import { PPipe } from './../pipes/pipes.pipe';
import { SafeResourcePipe } from './../pipes/safe.pipe';
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }        from '@angular/forms';



@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [PPipe,SafeResourcePipe],
    exports: [FormsModule,PPipe,SafeResourcePipe,CommonModule]
})
export class SharedModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/