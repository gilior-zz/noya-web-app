import {Injectable} from "@angular/core";
import {CacheManager, DataService} from "../../app/services/services";
import {ActionsObservable, Epic} from "redux-observable";
import {CARDS_LOADED, LOAD_CARDS} from "../const";
import {DataRequest, Language, TraverseItemResponse} from "../../app/dal/models";

import {Observable} from "rxjs/Observable";
import {IAppState} from "../states/state";
import {Actions, MetaData, Payload} from "../actions/actions";
import {FSA} from "flux-standard-action";

@Injectable()
export class Epics {
  private SessionActions: any;
  private http: any;
  private BASE_URL: any;

  constructor(public dataService: DataService, private cacheManager: CacheManager, public  homeAPIActions: Actions) {
  }

  public createDataServiceEpic(actionType: string, nextActionType?: string): Epic<FSA<Payload, MetaData>, IAppState> {
    let lang: Language = +this.cacheManager.GetFromCache('lang', '0');
    let req: DataRequest = {Language: lang}
    return (action$, store) => action$.ofType(actionType)
      .switchMap((action: FSA<Payload, MetaData>) => this.dataService.ConnectToApiData(req, action.meta.url)
        .map((data) => this.homeAPIActions.doAction({actiontype: nextActionType}, data.items)))
  }
}
