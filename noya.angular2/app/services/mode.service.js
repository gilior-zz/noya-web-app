"use strict";
var ModeService = (function () {
    function ModeService() {
    }
    Object.defineProperty(ModeService.prototype, "currentMode", {
        get: function () { return this.currentMode; },
        set: function (mode) { this.currentMode = mode; },
        enumerable: true,
        configurable: true
    });
    return ModeService;
}());
exports.ModeService = ModeService;
//# sourceMappingURL=mode.service.js.map