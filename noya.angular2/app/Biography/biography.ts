import {Component, OnInit, Injector} from '@angular/core'
import {BaseComponent} from '../common/base.component'
import {Router} from '@angular/router'
import * as services from '../services/services'
import * as dal from '../dal/models'


@Component({
    templateUrl: "./biography.html",
    moduleId: module.id,

})

export class Biography extends BaseComponent implements OnInit {
    cvs: dal.CV[];


    constructor(private dataService: services.DataService, public router: Router, private injector: Injector) {
        super(injector);
    }
    ngOnInit() {


        var req: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCV').subscribe(
            (res: dal.CVResponse) => { this.cvs = res.CVs },
            (err: dal.DataError) => { console.error('error in Biography in ngOnInit: ' + err.ErrorText); },
            () => { }
        )

    }
}