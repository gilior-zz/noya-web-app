import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


import { BiographyRoutingModule } from './biography-routing.module';

import { BiographyComponent } from './biography/biography.component';
import {Biography} from './biographies/biography';

@NgModule({
  imports: [
    SharedModule,
    BiographyRoutingModule
  ],
  declarations: [Biography, BiographyComponent]
})
export class BiographyModule { }
