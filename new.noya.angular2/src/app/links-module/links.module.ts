import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';


import {LinksRoutingModule} from './links-routing.module';
import {Links} from './Links/links';
import {LinkComponent} from './link/link.component';

@NgModule({
  imports: [
    SharedModule,
    LinksRoutingModule
  ],
  declarations: [Links, LinkComponent]
})
export class LinksModule {
}
