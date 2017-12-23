import {SharedModule} from '../common/shared.module';
import {NgModule} from '@angular/core';


import {BiographyRoutingModule} from './biography-routing.module';

import {BiographyComponent} from './biography/biography.component';
import {Biography} from './biographies/biography';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    BiographyRoutingModule
  ],
  declarations: [Biography, BiographyComponent]
})
export class BiographyModule {
}
