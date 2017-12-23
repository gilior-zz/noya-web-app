import {Action, Reducer} from 'redux';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {IAppState} from '../states/state';
import {CARDS_LOADED} from '../const';
import * as _ from 'lodash'

export const appStateReducer: Reducer<IAppState> = (state: IAppState, action: Action): IAppState => {
  switch (action.type) {
    case CARDS_LOADED:
      let newStore: IAppState = _.cloneDeep(state);
      newStore.cards = (<any>action).payload;
      return newStore;

    default:
      return state;
  }
}

export const rootReducer = composeReducers(defaultFormReducer(), appStateReducer)
