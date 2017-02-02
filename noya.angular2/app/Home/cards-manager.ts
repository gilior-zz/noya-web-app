import { Component, OnInit, Injector } from '@angular/core'
import { BaseComponent } from '../common/base.component'
import { TraverseItem, DataRequest, Language, TraverseItemResponse, DataError } from '../dal/models'
import { DataService, CacheManager } from '../services/services'
@Component({ selector: 'cards-manager', moduleId: module.id, templateUrl: './cards-manager.html', styleUrls: ['./cards-manager.css'] })

export class CardsManagerComponent extends BaseComponent implements OnInit {
    traverseItems: TraverseItem[];
    constructor(private dataService: DataService, private cacheManager: CacheManager, private injector: Injector) {
        super(injector);
    }
    ngOnInit() {
        let lang: Language = +this.cacheManager.GetFromCache('lang', "0");
        let req: DataRequest = { Language: lang }
        this.dataService.ConnectToApiData(req, 'api/Data/GetTraverseItems').subscribe((res: TraverseItemResponse) => {
            this.traverseItems = res.TraverseItems;
        },
            (err: DataError) =>
            { }
        );
    }
}