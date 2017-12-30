
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {NgModule} from '@angular/core'


import {BrowserModule, Title} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes'


import {SharedModule} from '../common/shared.module'


import {HeaderImage} from '../HeaderImage/header.image'
import {MenuComponent} from '../Menu/menu'
import {LangBarComponent} from '../LangBar/lang-bar.component'


import * as services from '../services/services'
import {UtiltyService} from '../services/utitlity'
import {BaseComponent} from '../common/base.component'

//import {GaliluModule} from './galilu/galilu-module'
import {pageNameService} from '../services/page-name.service';

import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsService} from '../services/google-analytics';
import {CoreModule} from '../common/core.module';
import {PPipe} from '../pipes/pipes.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SafeResourcePipe} from '../pipes/safe.pipe';
import {NgReduxModule} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';
import {StoreModule} from '../../store/store.module';


declare var ga;

@NgModule({
  declarations: [AppComponent, HeaderImage, MenuComponent, LangBarComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    StoreModule
  ],
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
