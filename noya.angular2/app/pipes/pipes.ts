import { Pipe, PipeTransform, OnInit } from '@angular/core'
import { DomSanitizer, SafeUrl, SafeResourceUrl, SafeScript, SafeStyle, SafeHtml } from '@angular/platform-browser';
import * as services from '../services/services'
import * as dal from '../dal/models'
@Pipe({
    name: 'translate',

})

export class TranslatePipe implements PipeTransform {


    constructor(private translationService: services.TranslationService, private cacheManager: services.CacheManager) {

    }
    transform(value: string): string {

        let res = this.translationService.TranlateItem(value);
        return res;
        //var lang = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew);
        //if (lang == 0) {
        //    return this.translationFile[value];


        //}
        //if (lang == 1) {
        //    return value;
        //}
    }
}


@Pipe({
    name: 'safeResource',

})

export class SafeResourcePipe implements PipeTransform {


    constructor(private dataService: services.DataService, private cacheManager: services.CacheManager, public sanitizer: DomSanitizer) {

    }
    transform(value: string, resourceType: dal.ResourceType) {
        switch (resourceType) {
            case dal.ResourceType.Html:
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case dal.ResourceType.Url:
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }





    }
}


