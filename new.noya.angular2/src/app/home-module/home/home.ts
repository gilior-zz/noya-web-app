import {Component, OnInit, Injector, AfterViewInit} from '@angular/core'
import {BaseComponent} from '../../common/base.component'
import {DataService, CacheManager} from '../../services/services'
import {TraverseItem, DataRequest, Language, HomePageTextResponse, DataError, HomePageText} from '../../dal/models'
import {Router} from '@angular/router'
import {UtiltyService} from '../../services/utitlity'

@Component({
  templateUrl: './home.html',

  styleUrls: ['./home.scss']
})

export class Home extends BaseComponent implements OnInit, AfterViewInit {
  homePageText: HomePageText;

  constructor(public router: Router, private injector: Injector, private dataService: DataService, private cacheManager: CacheManager, private utiltyService: UtiltyService) {
    super(injector);
  }

  ngAfterViewInit(): void {

  }

  get isHeb(): boolean {
    return this.utiltyService.IsHebrewMode;
  }

  ngOnInit() {
    let lang: Language = +this.cacheManager.GetFromCache('lang', '0');
    let req: DataRequest = {Language: lang}
    this.dataService.ConnectToApiData(req, 'GetHomePageText').subscribe((res: HomePageTextResponse) => {
        this.homePageText = res.HomePageTexts[0];
      },
      (err: DataError) => {
      }
    );
  }


}
