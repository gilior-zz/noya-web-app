import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { Contact } from "./Contact/contact";

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [Contact]
})
export class ContactModule { }
