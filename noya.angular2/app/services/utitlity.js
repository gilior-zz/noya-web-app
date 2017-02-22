"use strict";
var models_1 = require('../dal/models');
function IsHebrewMode() { return +(sessionStorage.getItem('lang') || '0') == models_1.Language.Hebrew; }
exports.IsHebrewMode = IsHebrewMode;
function IsEnglishMode() { return +(sessionStorage.getItem('lang') || '0') == models_1.Language.English; }
exports.IsEnglishMode = IsEnglishMode;
function IsMobile() { return window.innerWidth <= 480; }
exports.IsMobile = IsMobile;
function IsPhablet() { return window.innerWidth <= 767; }
exports.IsPhablet = IsPhablet;
function IsTablet() { return window.innerWidth <= 991; }
exports.IsTablet = IsTablet;
function IsDesktop() { return window.innerWidth >= 992; }
exports.IsDesktop = IsDesktop;
//# sourceMappingURL=utitlity.js.map