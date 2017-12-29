import {Component, OnInit, Injector, HostListener} from '@angular/core'
import {BaseComponent} from '../../common/base.component'
import {TraverseItem, DataRequest, Language, TraverseItemResponse, DataError} from '../../dal/models'
import {DataService, CacheManager} from '../../services/services'
import {UtiltyService} from '../../services/utitlity'

import {IAppState} from '../../../store/states/state';
import {NgRedux, select} from '@angular-redux/store';
import {CARDS_LOADED, LOAD_CARDS} from '../../../store/const';
import {Observable} from 'rxjs/Observable';

import {Actions} from "../../../store/actions/actions";


@Component({
  selector: 'cards-manager',
  templateUrl: './cards-manager.component.html',
  styleUrls: ['./cards-manager.component.scss']
})

export class CardsManagerComponent extends BaseComponent implements OnInit {
  @select('cards') cards$: Observable<Array<TraverseItem>>;
  traverseItems: TraverseItem[];
  trios: Array<Array<TraverseItem>>;
  dous: Array<Array<TraverseItem>>;

  constructor(private dataService: DataService, private cacheManager: CacheManager, private injector: Injector, private utiltyService: UtiltyService, public actions: Actions) {
    super(injector);

    this.cards$.subscribe((val) => {
      console.log(val);
    })
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
    this.actions.dispatcAction({actiontype:LOAD_CARDS,url:'GetTraverseItems'});
  }
}



