import {NgModule} from '@angular/core'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {BrowserModule, Title} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './routing/app.routes'

import {Calendar} from './Home/calendar'

import {Updates} from './Home/updates'

import {Press} from './Home/press'


import {SharedModule} from './shared/shared.module'


import {HeaderImage} from './HeaderImage/header.image'
import {MenuComponent} from './Menu/menu'
import {LangBarComponent} from './LangBar/lang-bar.component'


import * as services from './services/services'
import {UtiltyService} from './services/utitlity'
import {BaseComponent} from './common/base.component'
import {ForbiddenValidatorDirective} from './common/invalid-email.directive'
//import {GaliluModule} from './galilu/galilu-module'
import {pageNameService} from './services/page-name.service';
import {HttpClientModule} from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsService} from './services/google-analytics';



declare  var ga;

@NgModule({
  declarations: [AppComponent, HeaderImage, Calendar, Press, Updates, MenuComponent, LangBarComponent, ForbiddenValidatorDirective, ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],

  providers: [pageNameService, services.CacheManager, services.DataService, services.DialogService, services.LogService, services.TranslationService, Title, services.youTubeService, UtiltyService, GoogleAnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
