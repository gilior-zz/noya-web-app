import {Injectable} from "@angular/core";
import {CacheManager, DataService, youTubeService} from "../../app/services/services";
import {ActionsObservable, Epic} from "redux-observable";
import {CARDS_LOADED, LOAD_CARDS, LOAD_VIDs, VIDs_LOADED} from "../const";
import {DataRequest, Language, TraverseItemResponse, VideoItem} from "../../app/dal/models";

import {Observable} from "rxjs/Observable";
import {IAppState} from "../states/state";
import {Actions, MetaData, Payload} from "../actions/actions";
import {FSA} from "flux-standard-action";

@Injectable()
export class Epics {
  private SessionActions: any;
  private http: any;
  private BASE_URL: any;

  constructor(public dataService: DataService, private cacheManager: CacheManager, public  homeAPIActions: Actions, private yts: youTubeService) {
  }

  lang: Language = +this.cacheManager.GetFromCache('lang', '0');
  req: DataRequest = {Language: this.lang}

  public createDataServiceEpic(actionType: string, nextActionType?: string): Epic<FSA<Payload, MetaData>, IAppState> {

    return (action$, store) => action$.ofType(actionType)
      .switchMap((action: FSA<Payload, MetaData>) => this.dataService.ConnectToApiData(this.req, action.meta.url)
        .map((data) => this.homeAPIActions.doAction({actiontype: nextActionType}, data.items)))
  }

  public createVideoEpic(): Epic<FSA<Payload, MetaData>, IAppState> {
    let l = this.lang == Language.English ? 'en' : 'he';
    let items: Array<VideoItem> = [];
    return (action$, store) => action$.ofType(LOAD_VIDs)
      .switchMap((action: FSA<Payload, MetaData>) => this.yts.fetchVideos()
        .map((data) => {
            (<Array<any>>data).forEach(j => {

              items.push({title: j['snippet']['title'], videoId: j['snippet']['resourceId']['videoId'], lang: l})

            }

            return this.homeAPIActions.doAction({actiontype: VIDs_LOADED}, items)
          }
        ))
  }
}
