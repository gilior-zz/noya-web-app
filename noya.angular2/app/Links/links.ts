import {Router} from '@angular/router'
import {Component, OnInit, Injector} from '@angular/core'
import {BaseComponent} from '../common/base.component'
import * as services from '../services/services'
import * as dal from '../dal/models'

@Component({
    templateUrl: "./links.html",
    moduleId: module.id
})

export class Links extends BaseComponent implements OnInit {
    links: dal.Link[];
    ImageURL: string;
    constructor(private dataService: services.DataService, public router: Router, private injector: Injector) {
        super(injector);
    }
    ngOnInit() {
        var request: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(request, 'api/Data/GetLinks').subscribe((res: dal.LinksResponse) => { this.links = res.Links }, (error: dal.DataError) => { console.error('error in Links in ngOnInit: ' + error.ErrorText); });
    }
}