import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


import { VideosRoutingModule } from './videos-routing.module';
import { Videos } from "./videos";

@NgModule({
  imports: [
    SharedModule,
    VideosRoutingModule
  ],
  declarations: [Videos]
})
export class VideosModule { }
