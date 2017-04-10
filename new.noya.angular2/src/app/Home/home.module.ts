import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';


import { TraverseItemComponent } from './traverse-item.component';
import { CardsManagerComponent } from './cards-manager/cards-manager.component';
import { NgModule } from '@angular/core';

import {Home} from './home'


@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [TraverseItemComponent,CardsManagerComponent,Home],
  exports:[]
})
export class HomeModule { }
