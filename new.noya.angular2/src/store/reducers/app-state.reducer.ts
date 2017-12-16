import {Action, ActionReducer} from '@ngrx/store';
import {AppState} from '../states/state';

export const AppStateReducer: ActionReducer<AppState> = function (state: AppState, action: Action): AppState {
  switch (action.type) {
    default:
      return state;
  }
}
