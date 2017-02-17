"use strict";
var models_1 = require('../dal/models');
var Utilty = (function () {
    function Utilty() {
    }
    Object.defineProperty(Utilty.prototype, "IsHebrewMode", {
        get: function () { return +(sessionStorage.getItem('lang') || '0') == models_1.Language.Hebrew; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Utilty.prototype, "IsEnglishMode", {
        get: function () { return !this.IsHebrewMode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Utilty.prototype, "IsMobile", {
        get: function () { return window.innerWidth <= 480; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Utilty.prototype, "IsPhablet", {
        get: function () { return window.innerWidth <= 767; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Utilty.prototype, "IsTablet", {
        get: function () { return window.innerWidth <= 991; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Utilty.prototype, "IsDesktop", {
        get: function () { return window.innerWidth >= 992; },
        enumerable: true,
        configurable: true
    });
    return Utilty;
}());
exports.utilty = new Utilty();
//# sourceMappingURL=utitlity.js.map