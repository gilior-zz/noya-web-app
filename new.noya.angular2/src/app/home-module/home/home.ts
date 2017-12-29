import {Component, OnInit, Injector, AfterViewInit} from '@angular/core'
import {BaseComponent} from '../../common/base.component'
import {DataService, CacheManager} from '../../services/services'
import {TraverseItem, DataRequest, Language, HomePageTextResponse, DataError, HomePageText} from '../../dal/models'
import {Router} from '@angular/router'
import {UtiltyService} from '../../services/utitlity'
import {LOAD_HOME_PAGE_TEXT} from "../../../store/const";
import {Actions} from "../../../store/actions/actions";
import {select, select$} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";


@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})


export class Home extends BaseComponent implements OnInit, AfterViewInit {
  @select('homePageText') homePageText$: string;


  constructor(public router: Router, private injector: Injector, public actions: Actions, private cacheManager: CacheManager, private utiltyService: UtiltyService) {
    super(injector);
  }

  ngAfterViewInit(): void {

  }

  get isHeb(): boolean {
    return this.utiltyService.IsHebrewMode;
  }

  ngOnInit() {
    this.actions.dispatcAction({actiontype: LOAD_HOME_PAGE_TEXT, url: 'GetHomePageText'});
    // let lang: Language = +this.cacheManager.GetFromCache('lang', '0');
    // let req: DataRequest = {Language: lang}
    // this.dataService.ConnectToApiData(req, 'GetHomePageText').subscribe((res: HomePageTextResponse) => {
    //     this.homePageText = res.items[0];
    //   },
    //   (err: DataError) => {
    //   }
    // );
  }


}
