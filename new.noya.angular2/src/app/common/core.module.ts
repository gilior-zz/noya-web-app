import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleAnalyticsService} from '../services/google-analytics';
import {UtiltyService} from '../services/utitlity';
import {pageNameService} from '../services/page-name.service';
import * as services from '../services/services';
import {Title} from '@angular/platform-browser';
import {Action} from '../../store/actions/actions';

@NgModule({

  providers: [pageNameService, services.CacheManager, services.DataService, services.DialogService, services.LogService, services.TranslationService, Title, services.youTubeService, UtiltyService, GoogleAnalyticsService, Action]
})
export class CoreModule {
}
