import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { Contact } from "./Contact/contact";
import {DynamicFormQuestionComponent} from './model/dynamic-form-question.component';


@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [Contact,DynamicFormQuestionComponent]
})
export class ContactModule { }
