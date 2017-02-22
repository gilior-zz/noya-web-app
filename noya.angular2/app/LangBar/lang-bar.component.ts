import { Component, Injector, animate, trigger, state, style, transition, keyframes } from '@angular/core'
import { BaseComponent } from '../common/base.component'
import { Language } from '../dal/models'
import { CacheManager } from '../services/services'




@Component({
    selector: 'lang-bar',
    moduleId: module.id, templateUrl: './lang-bar.component.html',
    styleUrls: ['./lang-bar.component.css'],
    animations: [
        trigger(
            'isLangBarOpenRTL', [
                state('true', style({ transform: 'translateX(0)' })),
                state('false', style({ transform: 'translateX(-28px)' })),
                transition('0=>1', [animate(300, keyframes([
                    style({ transform: 'translateX(-28px)', offset: 0 }),
                    style({ transform: 'translateX(15px)', offset: 0.3 }),
                    style({ transform: 'translateX(0)', offset: 1.0 })
                ]))]),
                transition('1=>0', [animate(300, keyframes([
                    style({ transform: 'translateX(0)', offset: 0 }),
                    style({ transform: 'translateX(15px)', offset: 0.7 }),
                    style({ transform: 'translateX(-28px)', offset: 1.0 })
                ]))
                ]),
            ]
        ),
        trigger(
            'isLangBarOpenLTR', [
                state('true', style({ transform: 'translateX(0)' })),
                state('false', style({ transform: 'translateX(28px)' })),
                transition('0=>1', [animate(300, keyframes([
                    style({ transform: 'translateX(28px)', offset: 0 }),
                    style({ transform: 'translateX(-15px)', offset: 0.3 }),
                    style({ transform: 'translateX(0)', offset: 1.0 })
                ]))]),
                transition('1=>0', [animate(300, keyframes([
                    style({ transform: 'translateX(0)', offset: 0 }),
                    style({ transform: 'translateX(-15px)', offset: 0.7 }),
                    style({ transform: 'translateX(28px)', offset: 1.0 })
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
       
        this.isLangBarOpen = !this.isLangBarOpen;
    }

    get isEng(): boolean { return this.cacheManager.GetFromCache('lang', Language.Hebrew) == Language.English; }
    get isHeb(): boolean { return !this.isEng; }

    toEng() {
        this.cacheManager.StoreInCache("lang", Language.English);
        document.location.reload();
    }
    toHeb() {
        this.cacheManager.StoreInCache("lang", Language.Hebrew);
        document.location.reload();
    }
}