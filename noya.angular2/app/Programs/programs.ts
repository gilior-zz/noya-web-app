import {Component, OnInit, Injector} from '@angular/core'

import {BaseComponent} from '../common/base.component'
import {Router} from '@angular/router'
import * as services from '../services/services'
import * as dal from '../dal/models'

@Component({
    templateUrl: "./programs.html",
    moduleId: module.id,
})

export class Programs extends BaseComponent implements OnInit {
    programs: dal.Program[];

    constructor(private dataService: services.DataService, public router: Router, private injector: Injector) {
        super(injector);
    }
    ngOnInit() {
        var req: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetPrograms').subscribe(
            (res: dal.ProgramResponse) => { this.programs = res.Programs },
            (err: dal.DataError) => { console.error('error in Programs in ngOnInit: ' + err.ErrorText); },
            () => { }
        )
    }
}