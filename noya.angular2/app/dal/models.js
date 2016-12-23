"use strict";
(function (ResourceType) {
    ResourceType[ResourceType["Html"] = 0] = "Html";
    ResourceType[ResourceType["Url"] = 1] = "Url";
})(exports.ResourceType || (exports.ResourceType = {}));
var ResourceType = exports.ResourceType;
(function (Mode) {
    Mode[Mode["Store"] = 0] = "Store";
    Mode[Mode["Noya"] = 1] = "Noya";
})(exports.Mode || (exports.Mode = {}));
var Mode = exports.Mode;
(function (Language) {
    Language[Language["Hebrew"] = 0] = "Hebrew";
    Language[Language["English"] = 1] = "English";
})(exports.Language || (exports.Language = {}));
var Language = exports.Language;
(function (DataAmount) {
    DataAmount[DataAmount["All"] = 0] = "All";
    DataAmount[DataAmount["Single"] = 1] = "Single";
})(exports.DataAmount || (exports.DataAmount = {}));
var DataAmount = exports.DataAmount;
(function (NextData) {
    NextData[NextData["Next"] = 0] = "Next";
    NextData[NextData["Prev"] = 1] = "Prev";
    NextData[NextData["Currnet"] = 2] = "Currnet";
})(exports.NextData || (exports.NextData = {}));
var NextData = exports.NextData;
//# sourceMappingURL=models.js.map