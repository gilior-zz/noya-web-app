import {Router} from '@angular/router'
import {Component, OnInit, Injector} from '@angular/core'
import {BaseComponent} from '../../common/base.component'
import * as services from '../../services/services'
import * as dal from '../../dal/models'
import {Actions} from "../../../store/actions/actions";
import {LOAD_LNKs} from "../../../store/const";
import {select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";

@Component({
  templateUrl: "./links.html",

})

export class Links extends BaseComponent implements OnInit {
 @select('links') links$:Observable< dal.Link[]>;
  ImageURL: string;

  constructor(private dataService: services.DataService
    , public router: Router
    , private injector: Injector
    , public actions: Actions) {
    super(injector);
  }

  ngOnInit() {
    this.actions.dispatcAction({actiontype: LOAD_LNKs, url: 'GetLinks'})
    // var request: dal.DataRequest = {Language: dal.Language.Hebrew};
    // this.dataService.GetData(request, 'GetLinks').subscribe((res: dal.LinksResponse) => {
    //   this.links = res.items
    // }, (error: dal.DataError) => {
    //   console.error('error in items in ngOnInit: ' + error.ErrorText);
    // });
  }
}
