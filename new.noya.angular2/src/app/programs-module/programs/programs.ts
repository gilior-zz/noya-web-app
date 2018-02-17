import {Component, OnInit, Injector} from '@angular/core'

import {BaseComponent} from '../../common/base.component'
import {Router} from '@angular/router'
import * as services from '../../services/services'
import * as dal from '../../dal/models'
import {Actions} from "../../../store/actions/actions";
import {LOAD_PRGs} from "../../../store/const";
import {select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";

@Component({
  templateUrl: "./programs.html",
  styleUrls: ['./programs.scss']

})

export class Programs extends BaseComponent implements OnInit {
  @select('programs') programs$: Observable<dal.Program[]>;

  constructor(private dataService: services.DataService
    , public router: Router
    , private injector: Injector
    , public  actions: Actions) {
    super(injector);
  }

  ngOnInit() {
    this.actions.dispatcAction({actiontype: LOAD_PRGs, url: 'GetPrograms'})
    // var req: dal.DataRequest = { Language: dal.Language.Hebrew };
    // this.dataService.GetData(req, 'GetPrograms').subscribe(
    //     (res: dal.ProgramResponse) => { this.programs = res.items },
    //     (err: dal.DataError) => { console.error('error in items in ngOnInit: ' + err.ErrorText); },
    //     () => { }
    // )
  }
}
