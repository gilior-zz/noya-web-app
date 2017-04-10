import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicturesRoutingModule } from './pictures-routing.module';
import { Pictures } from "./pictures";

@NgModule({
  imports: [
    SharedModule,
    PicturesRoutingModule
  ],
  declarations: [Pictures]
})
export class PicturesModule { }
