import { Component, Injector, animate, trigger, state, style, transition, keyframes } from '@angular/core'
import { BaseComponent } from '../common/base.component'
import { Language } from '../dal/models'
import { CacheManager } from '../services/services'
import { utilty } from '../services/utitlity'
@Component({
    selector: 'lang-bar',
    moduleId: module.id, templateUrl: './lang-bar.component.html',
    styleUrls: ['./lang-bar.component.css'],
    animations: [
        trigger(
            'isLangBarOpen', [
                state('true', style({ transform: 'translateX(0)' })),
                state('false', style({ transform: utilty.IsHebrewMode ? 'translateX(-28px)' : 'translateX(28px)' })),
                transition('0=>1', [animate(300, keyframes([
                    style({ transform: utilty.IsHebrewMode ? 'translateX(-28px)' : 'translateX(28px)', offset: 0 }),
                    style({ transform: utilty.IsHebrewMode ? 'translateX(15px)' : 'translateX(-15px)', offset: 0.3 }),
                    style({ transform: 'translateX(0)', offset: 1.0 })
                ]))]),
                transition('1=>0', [animate(300, keyframes([
                    style({ transform: 'translateX(0)', offset: 0 }),
                    style({ transform: utilty.IsHebrewMode ? 'translateX(15px)' : 'translateX(-15px)', offset: 0.7 }),
                    style({ transform: utilty.IsHebrewMode ? 'translateX(-28px)' : 'translateX(28px)', offset: 1.0 })
                ]))
                ]),
            ]
        )
    ]
})

export class LangBarComponent extends BaseComponent {

    constructor(private injector: Injector, private cacheManager: CacheManager) {
        super(injector);

    }

    isLangBarOpen: boolean = false;
    toggleLangBarState() {
        console.log('toggleLangBarState');
        this.isLangBarOpen = !this.isLangBarOpen;
    }

    get isEng(): boolean { return utilty.IsEnglishMode; }
    get isHeb(): boolean { return utilty.IsHebrewMode; }

    toEng() {
        this.cacheManager.StoreInCache("lang", Language.English);
        document.location.reload();
    }
    toHeb() {
        this.cacheManager.StoreInCache("lang", Language.Hebrew);
        document.location.reload();
    }
}