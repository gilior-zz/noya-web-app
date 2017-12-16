import {Component, OnInit, Injector, HostListener} from '@angular/core'
import {BaseComponent} from '../../common/base.component'
import {TraverseItem, DataRequest, Language, TraverseItemResponse, DataError} from '../../dal/models'
import {DataService, CacheManager} from '../../services/services'
import {UtiltyService} from '../../services/utitlity'
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/states/state';
import {CardItemLoadedAction} from '../../../store/actions/actions';

@Component({
  selector: 'cards-manager',
  templateUrl: './cards-manager.component.html',
  styleUrls: ['./cards-manager.component.scss']
})

export class CardsManagerComponent extends BaseComponent implements OnInit {
  traverseItems: TraverseItem[];
  trios: Array<Array<TraverseItem>>;
  dous: Array<Array<TraverseItem>>;

  constructor(private dataService: DataService, private cacheManager: CacheManager, private injector: Injector, private utiltyService: UtiltyService, private  store: Store<AppState>) {
    super(injector);
    this.trios = new Array<Array<TraverseItem>>();
    this.dous = new Array<Array<TraverseItem>>();
  }

  @HostListener('window:resize')
  onResize() {

  }

  get showTrio(): boolean {
    return this.utiltyService.IsDesktop || this.utiltyService.IsTablet;
  }

  get showDuo(): boolean {
    return this.utiltyService.IsPhablet;
  }

  get showOne(): boolean {
    return this.utiltyService.IsMobile;
  }

  ngOnInit() {
    let lang: Language = +this.cacheManager.GetFromCache('lang', '0');
    let req: DataRequest = {Language: lang}
    this.dataService.ConnectToApiData(req, 'GetTraverseItems').subscribe((res: TraverseItemResponse) => {
        this.store.dispatch(new CardItemLoadedAction(res.TraverseItems))
        this.traverseItems = res.TraverseItems;
        let i = 0;
        let j = 0;
        this.traverseItems.forEach((traverseItem) => {

          if (i++ % 3 == 0) {
            this.trios[this.trios.length] = new Array<TraverseItem>();
            //console.log('new trio');
          }
          this.trios[this.trios.length - 1].push(traverseItem);
          if (j++ % 2 == 0) {
            this.dous[this.dous.length] = new Array<TraverseItem>();
            //console.log('new dou');
          }

          this.dous[this.dous.length - 1].push(traverseItem);

        })

      },
      (err: DataError) => {
      }
    );
  }
}



