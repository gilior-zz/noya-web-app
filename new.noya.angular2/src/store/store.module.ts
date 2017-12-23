import {NgModule} from '@angular/core';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {IAppState, initState} from './states/state';
import {rootReducer} from './reducers/app-state.reducer';
import {createLogger} from 'redux-logger';
import {provideReduxForms} from '@angular-redux/form';

@NgModule({
  imports: [],
  exports:[NgReduxModule, NgReduxRouterModule]
})

export class StoreModule {
  constructor(public store: NgRedux<IAppState>,
              public  devTools: DevToolsExtension,
              public ngReduxRouter: NgReduxRouter,) {
    store.configureStore(rootReducer,
      initState, [createLogger()],
      devTools.isEnabled() ? [devTools.enhancer()] : [])

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
    provideReduxForms(store);
  }
}
