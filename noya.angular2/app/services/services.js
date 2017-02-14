"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var model = require('../dal/models');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var CacheManager = (function () {
    function CacheManager() {
    }
    CacheManager.prototype.StoreInCache = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    CacheManager.prototype.GetFromCache = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var retVal = sessionStorage.getItem(key);
        if (!retVal && defaultValue != null)
            retVal = defaultValue;
        return retVal;
    };
    CacheManager.prototype.RemoveFromCache = function (key) {
        sessionStorage.removeItem(key);
    };
    Object.defineProperty(CacheManager.prototype, "IsHebrewMode", {
        get: function () { return +(sessionStorage.getItem('lang') || '0') == model.Language.Hebrew; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CacheManager.prototype, "IsEnglishMode", {
        get: function () { return !this.IsHebrewMode; },
        enumerable: true,
        configurable: true
    });
    CacheManager.prototype.ClearCache = function () {
        sessionStorage.clear();
    };
    CacheManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CacheManager);
    return CacheManager;
}());
exports.CacheManager = CacheManager;
exports.MyCacheManager = new CacheManager();
var DataService = (function () {
    function DataService(http, CacheManager) {
        this.http = http;
        this.CacheManager = CacheManager;
    }
    //public ConnectToApiData(request: model.DataRequest, url: string): Promise<model.DataResponse> {
    //    let body = JSON.stringify({ request });
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    let options = new RequestOptions({ headers: headers });
    //    return this.http.post(url, body, options)
    //        .toPromise()
    //        .then(this.extractData)
    //        .catch(this.handleError);
    //}
    //private extractData(res: Response): model.DataResponse {
    //    if (res.status < 200 || res.status >= 300) {
    //        throw new Error('Bad response status: ' + res.status);
    //    }
    //    let body = res.json();
    //    return body;
    //}
    DataService.prototype.GetFileContent = function (filePath) {
        return this.http.get(filePath).map(function (res) { return res.json(); });
        //.do(data => //console.log(data)) // eyeball results in the console
        //.catch(this.handleError)
    };
    DataService.prototype.ConnectToApiData = function (request, url) {
        var lang = this.CacheManager.GetFromCache('lang', model.Language.Hebrew);
        request.Language = lang;
        var body = JSON.stringify({ request: request });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, CacheManager])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm
 */
var DialogService = (function () {
    function DialogService() {
    }
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns promise resolving to `true`=confirm or `false`=cancel
     */
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve, reject) {
            return resolve(window.confirm(message || 'Is it OK?'));
        });
    };
    ;
    return DialogService;
}());
exports.DialogService = DialogService;
var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.writeToLog = function (msg) {
        //log.debug(msg, ['a','b','c']);
    };
    return LogService;
}());
exports.LogService = LogService;
var TranslationService = (function () {
    function TranslationService(cacheManager) {
        this.cacheManager = cacheManager;
        this.translationFile = {
            "menu": "תפריט",
            "noya schleien": "נויה שליין",
            "marimba & percussion": "מרימבה וכלי הקשה",
            "home": "בית",
            "biography": "ביוגרפיה",
            "pictures": "תמונות",
            "videos": "וידאו",
            "programs": "תכניות",
            "links": "קישורים",
            "contact": "יצירת קשר",
            "hey noya, i would like to get some details about your concerts. please contact me": "שלום נויה, אנא צרי עמי קשר על מנת לקבל פרטים אודות קונצרט",
            "email": "אי-מייל",
            "content": "תוכן",
            "order concert": "הזמנת קונצרט",
            "products": "חנות מוצרים",
            "kids art": "עולם הילדים",
            "coming soon...": "בקרוב...",
            "galilu": "גלילו",
            "custom designed products for toddlers": "מוצרים לקטנטנים בעיצוב אישי",
            "toddlers activity pallet": "משטח פעילות לקטנטנים",
            "toddlers activity books": "ספרי פעילות לקטנטנים",
            "toddlers lamps": "מנורות לקטנטנים",
            "toddlers bags": "תיקים לקטנטנים",
            "toddlers cushions": "כריות לקטנטנים",
            "to store": "לחנות",
            "back to previous page": "חזרה לעמוד קודם",
            "must select at leat 4 items (click om item to select/deselect item)": "יש לבחור לפחות 4 פריטים",
            "click on item to select/deselect item": "יש ללחוץ על פריט כדי לבחור / לבטל את בחירתו",
            "message": "הודעה",
            "name": "שם",
            "message is required": "יש להזין הודעה",
            "submit": "שליחה",
            "name is required": "יש להזין שם",
            "email is required": "יש להזין אימייל",
            "content is required": "יש להזין תוכן",
            "invalid email format": "אימייל אינו חוקי"
        };
    }
    TranslationService.prototype.TranlateItem = function (value) {
        if (!value)
            return;
        var lang = this.cacheManager.GetFromCache('lang', model.Language.Hebrew);
        if (lang == 0) {
            var translateItem = this.translationFile[value.toLowerCase()];
            if (!translateItem)
                return value;
            return translateItem;
        }
        if (lang == 1) {
            return value;
        }
    };
    TranslationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [CacheManager])
    ], TranslationService);
    return TranslationService;
}());
exports.TranslationService = TranslationService;
var youTubeService = (function () {
    function youTubeService(http) {
        this.http = http;
    }
    youTubeService.prototype.fetchVideos = function () {
        //let params = new URLSearchParams();
        //params.set('part', 'contentDetails');
        //params.set('forUsername', 'noyaschleien');
        //params.set('key', 'AIzaSyBH2ltO-MFMiW7dftsCCM3w8F86M-kwDHM');
        //return this.http.get('https://www.googleapis.com/youtube/v3/channels', { search: params }).toPromise().then(i => i.json()['items'][0]['contentDetails']['relatedPlaylists']['uploads']).then(
        //    j => {
        var params = new http_1.URLSearchParams();
        params.set('part', 'snippet'); // the user's search value
        params.set('playlistId', 'UUO2Xi-wHrqM27neDaVrfebQ');
        params.set('maxResults', '50');
        params.set('key', 'AIzaSyBH2ltO-MFMiW7dftsCCM3w8F86M-kwDHM');
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems', { search: params }).map(function (k) { return k.json()['items']; });
        // }
        //);
    };
    youTubeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], youTubeService);
    return youTubeService;
}());
exports.youTubeService = youTubeService;
//# sourceMappingURL=services.js.map