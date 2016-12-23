import {Component, OnInit, Injector, AfterViewInit} from '@angular/core'
import {BaseComponent} from '../common/base.component'
import {DataService, CacheManager} from '../services/services'
import {TraverseItem, DataRequest, Language, TraverseItemResponse, DataError} from '../dal/models'
import {Router} from '@angular/router'
@Component({
    templateUrl: "./home.html",
    moduleId: module.id,

})

export class Home extends BaseComponent implements OnInit, AfterViewInit {
    traverseItems: TraverseItem[]
    constructor(public router: Router, private injector: Injector, private dataService: DataService, private cacheManager: CacheManager) {
        super(injector);
    }

    ngAfterViewInit(): void {
        //console.debug(this.pageName);
    }
    //public pageName
    ngOnInit() {
        let lang: Language = +this.cacheManager.GetFromCache('lang', "0");
        let req: DataRequest = { Language: lang }
        this.dataService.ConnectToApiData(req, 'api/Data/GetTraverseItems').subscribe((res: TraverseItemResponse) => {
            this.traverseItems = res.TraverseItems;
        },
            (err: DataError) =>
            { }
        );;
    }


}