import { Component, OnInit, Injector, AfterViewInit } from '@angular/core'
import { BaseComponent } from '../common/base.component'
import { DataService, CacheManager } from '../services/services'
import { TraverseItem, DataRequest, Language, HomePageTextResponse, DataError, HomePageText } from '../dal/models'
import { Router } from '@angular/router'
@Component({
    templateUrl: "./home.html",
    moduleId: module.id,
    styleUrls: ['./home.css']
})

export class Home extends BaseComponent implements OnInit, AfterViewInit {
    homePageText: HomePageText;
    constructor(public router: Router, private injector: Injector, private dataService: DataService, private cacheManager: CacheManager) {
        super(injector);
    }

    ngAfterViewInit(): void {

    }

    ngOnInit() {
        let lang: Language = +this.cacheManager.GetFromCache('lang', "0");
        let req: DataRequest = { Language: lang }
        this.dataService.ConnectToApiData(req, 'api/Data/GetHomePageText').subscribe((res: HomePageTextResponse) => {
            this.homePageText = res.HomePageTexts[0];
        },
            (err: DataError) =>
            { }
        );
    }




}