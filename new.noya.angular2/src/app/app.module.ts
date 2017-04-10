
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app.routes'

import { Calendar } from './Home/calendar'

import { Updates } from './Home/updates'

import { Press } from './Home/press'



import { SharedModule } from './shared/shared.module'





import { HeaderImage } from "./HeaderImage/header.image"
import { MenuComponent } from "./Menu/menu"
import { LangBarComponent } from "./LangBar/lang-bar.component"


import * as services from "./services/services"
import { UtiltyService} from './services/utitlity'
import { BaseComponent } from './common/base.component'
import { ForbiddenValidatorDirective } from './common/invalid-email.directive'
//import {GaliluModule} from './galilu/galilu-module'
import { pageNameService } from './services/page-name.service';


@NgModule({
    declarations: [AppComponent, HeaderImage, Calendar, Press, Updates, MenuComponent, LangBarComponent, ForbiddenValidatorDirective],
    imports: [
        BrowserModule,
        HttpModule,       
        SharedModule,
        BrowserAnimationsModule,
       AppRoutingModule,

    ],

    providers: [pageNameService, services.CacheManager, services.DataService, services.DialogService, services.LogService, services.TranslationService, Title, services.youTubeService,UtiltyService],
    bootstrap: [AppComponent],
})
export class AppModule { }
