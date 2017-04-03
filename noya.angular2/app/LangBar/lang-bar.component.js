"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var base_component_1 = require("../common/base.component");
var models_1 = require("../dal/models");
var services_1 = require("../services/services");
var LangBarComponent = (function (_super) {
    __extends(LangBarComponent, _super);
    function LangBarComponent(injector, cacheManager) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.cacheManager = cacheManager;
        _this.isLangBarOpen = false;
        return _this;
    }
    LangBarComponent.prototype.toggleLangBarState = function () {
        this.isLangBarOpen = !this.isLangBarOpen;
    };
    Object.defineProperty(LangBarComponent.prototype, "isEng", {
        get: function () { return this.cacheManager.GetFromCache('lang', models_1.Language.Hebrew) == models_1.Language.English; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LangBarComponent.prototype, "isHeb", {
        get: function () { return !this.isEng; },
        enumerable: true,
        configurable: true
    });
    LangBarComponent.prototype.toEng = function () {
        this.cacheManager.StoreInCache("lang", models_1.Language.English);
        document.location.reload();
    };
    LangBarComponent.prototype.toHeb = function () {
        this.cacheManager.StoreInCache("lang", models_1.Language.Hebrew);
        document.location.reload();
    };
    LangBarComponent.prototype.onChange = function (lang) {
        switch (lang) {
            case 'heb':
                this.toHeb();
                break;
            case 'eng':
                this.toEng();
                break;
        }
    };
    return LangBarComponent;
}(base_component_1.BaseComponent));
LangBarComponent = __decorate([
    core_1.Component({
        selector: 'lang-bar',
        moduleId: module.id, templateUrl: './lang-bar.component.html',
        styleUrls: ['./lang-bar.component.css'],
        animations: [
            animations_1.trigger('isLangBarOpenRTL', [
                animations_1.state('1', animations_1.style({ transform: 'translateX(0)' })),
                animations_1.state('0', animations_1.style({ transform: 'translateX(-52px)' })),
                animations_1.transition('0=>1', [animations_1.animate(300, animations_1.keyframes([
                        animations_1.style({ transform: 'translateX(-52px)', offset: 0 }),
                        animations_1.style({ transform: 'translateX(15px)', offset: 0.3 }),
                        animations_1.style({ transform: 'translateX(0)', offset: 1.0 })
                    ]))]),
                animations_1.transition('1=>0', [animations_1.animate(300, animations_1.keyframes([
                        animations_1.style({ transform: 'translateX(0)', offset: 0 }),
                        animations_1.style({ transform: 'translateX(15px)', offset: 0.7 }),
                        animations_1.style({ transform: 'translateX(-52px)', offset: 1.0 })
                    ]))
                ]),
            ]),
            animations_1.trigger('isLangBarOpenLTR', [
                animations_1.state('1', animations_1.style({ transform: 'translateX(0)' })),
                animations_1.state('0', animations_1.style({ transform: 'translateX(89px)' })),
                animations_1.transition('0=>1', [animations_1.animate(300, animations_1.keyframes([
                        animations_1.style({ transform: 'translateX(89px)', offset: 0 }),
                        animations_1.style({ transform: 'translateX(-15px)', offset: 0.3 }),
                        animations_1.style({ transform: 'translateX(0)', offset: 1.0 })
                    ]))]),
                animations_1.transition('1=>0', [animations_1.animate(300, animations_1.keyframes([
                        animations_1.style({ transform: 'translateX(0)', offset: 0 }),
                        animations_1.style({ transform: 'translateX(-15px)', offset: 0.7 }),
                        animations_1.style({ transform: 'translateX(89px)', offset: 1.0 })
                    ]))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [core_1.Injector, services_1.CacheManager])
], LangBarComponent);
exports.LangBarComponent = LangBarComponent;
//# sourceMappingURL=lang-bar.component.js.map