import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';

import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'
import { Home } from "./Home/home"
import { Calendar } from './Home/calendar'
import { TraverseItemComponent } from './Home/traverse-item.component'
import { Updates } from './Home/updates'
import { CardsManagerComponent } from './Home/cards-manager'
import { Press } from './Home/press'
import { Biography } from "./Biography/biography"
import { Links } from "./Links/links"
import { Contact } from "./Contact/contact"
import { SharedModule } from './shared.module'
import { Programs } from "./Programs/programs"
import { Pictures } from "./Pictures/pictures"
import { Videos } from "./Videos/videos"
import { GaliluLink } from './galilu/link/link.component'
import { HeaderImage } from "./HeaderImage/header.image"
import { MenuComponent } from "./Menu/menu"
import { LangBarComponent } from "./LangBar/lang-bar.component"
import * as pipes from './pipes/pipes'
import * as services from "./services/services"
import { BaseComponent } from './common/base.component'
//import {GaliluModule} from './galilu/galilu-module'
import { pageNameService } from './services/page-name.service'
@NgModule({
    declarations: [AppComponent, Home, Biography, Links, Contact, Programs, Pictures, Videos, HeaderImage, Calendar, Press, Press, Updates, TraverseItemComponent, pipes.SafeResourcePipe, GaliluLink, CardsManagerComponent, MenuComponent, LangBarComponent],
    imports: [
        BrowserModule,
        HttpModule,

        AppRoutingModule,
        SharedModule
        //GaliluModule
    ],

    providers: [pageNameService, services.CacheManager, services.DataService, services.DialogService, services.LogService, services.TranslationService, Title, services.youTubeService],
    bootstrap: [AppComponent],
})
export class AppModule { }
