import {NgModule} from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {IAppState, initState} from './states/state';
import {rootReducer} from './reducers/app-state.reducer';
import {createLogger} from 'redux-logger';
import {provideReduxForms} from '@angular-redux/form';
import {Epics} from "./epics/epics";
import {createEpicMiddleware} from "redux-observable";
import {
  CARDS_LOADED, CVs_LOADED, HOME_PAGE_TEXT_LOADED, IMGs_LOADED, LNKs_LOADED, LOAD_CARDS, LOAD_CVs, LOAD_HOME_PAGE_TEXT,
  LOAD_IMGs, LOAD_LNKs, LOAD_PRGs, PRGs_LOADED
} from "./const";


@NgModule({
  imports: [],
  exports: [NgReduxModule, NgReduxRouterModule],
  providers: [Epics]
})

export class StoreModule {
  constructor(public store: NgRedux<IAppState>,
              public  devTools: DevToolsExtension,
              public ngReduxRouter: NgReduxRouter, private epics: Epics) {

    const middleware = [
      //createLogger(),
      createEpicMiddleware(this.epics.createVideoEpic()),
      createEpicMiddleware(this.epics.createDataServiceEpic(LOAD_CARDS, CARDS_LOADED)),
      createEpicMiddleware(this.epics.createDataServiceEpic(LOAD_HOME_PAGE_TEXT, HOME_PAGE_TEXT_LOADED)),
      createEpicMiddleware(this.epics.createDataServiceEpic(LOAD_CVs, CVs_LOADED)),
      createEpicMiddleware(this.epics.createDataServiceEpic(LOAD_IMGs, IMGs_LOADED)),
      createEpicMiddleware(this.epics.createDataServiceEpic(LOAD_PRGs, PRGs_LOADED)),
      createEpicMiddleware(this.epics.createDataServiceEpic(LOAD_LNKs, LNKs_LOADED)),
    ];
    store.configureStore(rootReducer,
      initState, middleware,
      devTools.isEnabled() ? [devTools.enhancer()] : [])

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
    provideReduxForms(store);
  }
}
