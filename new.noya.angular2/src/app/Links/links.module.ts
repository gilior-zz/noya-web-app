import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


import { LinksRoutingModule } from './links-routing.module';
import { Links } from "./links";

@NgModule({
  imports: [
    SharedModule,
    LinksRoutingModule
  ],
  declarations: [Links]
})
export class LinksModule { }
