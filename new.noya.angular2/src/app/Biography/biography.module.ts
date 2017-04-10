import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


import { BiographyRoutingModule } from './biography-routing.module';
import { Biography } from "./biography";

@NgModule({
  imports: [  
    SharedModule,
    BiographyRoutingModule
  ],
  declarations: [Biography]
})
export class BiographyModule { }
