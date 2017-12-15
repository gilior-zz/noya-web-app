import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';


import { VideosRoutingModule } from './videos-routing.module';
import { Videos } from "./Videos/videos";
import {VideoComponent} from './video/video.component';

@NgModule({
  imports: [
    SharedModule,
    VideosRoutingModule
  ],
  declarations: [Videos,VideoComponent]
})
export class VideosModule { }
