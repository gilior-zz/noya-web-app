import {Component, OnInit, Injector, HostBinding} from '@angular/core'
import {BaseComponent} from '../../common/base.component'
import {Router} from '@angular/router'
import * as services from '../../services/services'
import * as dal from '../../dal/models'

import {Observable} from 'rxjs';
import {Actions} from "../../../store/actions/actions";
import {LOAD_CVs} from "../../../store/const";
import {select} from "@angular-redux/store";

@Component({
  templateUrl: "./biography.html",

  //animations:[slideInDownAnimation]

})

export class Biography extends BaseComponent implements OnInit {
  @select('biographies') cvs$: Observable<dal.CV[]>;


  constructor(private dataService: services.DataService, public router: Router, private injector: Injector, public actions: Actions) {
    super(injector);
  }

  //@HostBinding('@routeAnimation') routeAnimation = true;
  //@HostBinding('style.display') display = 'block';
  //@HostBinding('style.position') position = 'absolute';

  ngOnInit() {
    this.actions.dispatcAction({actiontype: LOAD_CVs, url: 'GetCV'});

    // var req: dal.DataRequest = { Language: dal.Language.Hebrew };
    // this.dataService.GetData(req, 'GetCV').subscribe(
    //     (res: dal.CVResponse) => { this.cvs = res.CVs },
    //     (err: dal.DataError) => { console.error('error in biography in ngOnInit: ' + err.ErrorText); },
    //     () => { }
    // )

  }
}
