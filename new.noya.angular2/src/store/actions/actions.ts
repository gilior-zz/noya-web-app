import {Action} from '@ngrx/store';
import {TraverseItem} from '../../app/dal/models';

export const CARDS_ITEMS_LOADED = 'CARDS_ITEMS_LOADED'

export class CardItemLoadedAction implements Action {
  readonly type: string = CARDS_ITEMS_LOADED;
  constructor(public payload: TraverseItem[]) {
  }
}
