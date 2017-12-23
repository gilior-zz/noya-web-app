import { Component, OnInit, Injector, HostBinding } from '@angular/core'
import { BaseComponent } from '../../common/base.component'
import { Router } from '@angular/router'
import * as services from '../../services/services'
import * as dal from '../../dal/models'

import {Observable} from 'rxjs/Observable';

@Component({
    templateUrl: "./biography.html",

    //animations:[slideInDownAnimation]

})

export class Biography extends BaseComponent implements OnInit {
    cvs: dal.CV[];


    constructor(private dataService: services.DataService, public router: Router, private injector: Injector) {
        super(injector);
    }
    //@HostBinding('@routeAnimation') routeAnimation = true;
    //@HostBinding('style.display') display = 'block';
    //@HostBinding('style.position') position = 'absolute';

    ngOnInit() {


        var req: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'GetCV').subscribe(
            (res: dal.CVResponse) => { this.cvs = res.CVs },
            (err: dal.DataError) => { console.error('error in Biography in ngOnInit: ' + err.ErrorText); },
            () => { }
        )

    }
}
