import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../states/state';
import {TraverseItem} from '../../app/dal/models';
import {CARDS_LOADED} from '../const';

@Injectable()

export class Action {
  constructor(public store: NgRedux<IAppState>) {

  }

  postCards(items: TraverseItem[]) {
    this.store.dispatch(this.foo(items))
  }

  foo(foo: TraverseItem[]) {
    return {type: CARDS_LOADED, payload: foo}
  }

}
