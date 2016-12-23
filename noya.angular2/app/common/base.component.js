"use strict";
var router_1 = require('@angular/router');
var services = require('../services/services');
var platform_browser_1 = require('@angular/platform-browser');
var BaseComponent = (function () {
    function BaseComponent(injector) {
        var titleService = injector.get(platform_browser_1.Title);
        var routerService = injector.get(router_1.Router);
        var translationService = injector.get(services.TranslationService);
        var url = routerService.routerState.snapshot.url.replace('/', '');
        var tranlatedItem = translationService.TranlateItem(url);
        titleService.setTitle(tranlatedItem);
        //$(".pageName").text(tranlatedItem);
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map