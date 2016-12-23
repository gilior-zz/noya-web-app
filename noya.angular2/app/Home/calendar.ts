import {Component, OnInit} from '@angular/core'
import * as dal from '../dal/models'
import * as services from '../services/services'
@Component({
    selector: 'noya-calendar',
    templateUrl: './calendar.html',
    moduleId: module.id
})
export class Calendar implements OnInit {
    dataDate: Date;
    text: string;
    month: number;
    year: number;
    constructor(private dataService: services.DataService, private cacheService: services.CacheManager) {
    }

    onLeft(): void {
        var lang: dal.Language = +this.cacheService.GetFromCache('lang', "0");
        switch (lang) {
            case dal.Language.Hebrew:
                var requiredData = dal.NextData.Next;
                break;
            case dal.Language.English:
                var requiredData = dal.NextData.Prev;
                break;
        }
        var req: dal.CalendarRequest = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: requiredData };

        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe((res: dal.CalendarResponse) => {
                this.dataDate = new Date(res.CalendarItem.DataDate.toString());
                this.text = res.CalendarItem.Text;
                this.cacheService.StoreInCache('currentDataDate', this.dataDate);
            },
            (err: dal.DataError) =>
            { }
            );
    }
    onRight(): void {

        var lang: dal.Language = +this.cacheService.GetFromCache('lang', "0");
        switch (lang) {
            case dal.Language.Hebrew:
                var requiredData = dal.NextData.Prev;
                break;
            case dal.Language.English:
                var requiredData = dal.NextData.Next;
                break;
        }

        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));

        var req: dal.CalendarRequest = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: requiredData };

        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe((res: dal.CalendarResponse) => {
                this.dataDate = new Date(res.CalendarItem.DataDate.toString());
                this.text = res.CalendarItem.Text;
                this.cacheService.StoreInCache('currentDataDate', this.dataDate);
            },
            (err: dal.DataError) =>
            { }
            );
    }
    ngOnInit() {
        var nextData = dal.NextData.Currnet
        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));

        var req: dal.CalendarRequest = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: nextData };

        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe((res: dal.CalendarResponse) => {
                this.dataDate = new Date(res.CalendarItem.DataDate.toString());
                this.text = res.CalendarItem.Text;
                this.cacheService.StoreInCache('currentDataDate', this.dataDate);
            },
            (err: dal.DataError) =>
            { }
            );
    }
}