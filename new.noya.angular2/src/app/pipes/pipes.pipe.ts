import { TranslationService, CacheManager } from './../services/services';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class PPipe implements PipeTransform {
  constructor(private translationService: TranslationService, private cacheManager: CacheManager) {

    }
  transform(value: any, args?: any): string {
   let res = this.translationService.TranlateItem(value);
        return res;
  }

}
