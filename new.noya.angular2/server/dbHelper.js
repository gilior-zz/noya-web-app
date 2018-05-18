"use strict";
exports.__esModule = true;
var tedious = require("tedious");
var config_1 = require("./config");
function requestGenerator(proc, lang) {
    console.log(lang);
    var request = new tedious.Request(proc, function (err, rowCount, rows) {
        if (err) {
            console.log(err);
        }
    });
    request.addParameter('lang', tedious.TYPES.NVarChar, lang);
    return request;
}
function handleRowEvent(columns, dataResponse) {
    var obj = Object.create(Object.prototype);
    columns.forEach(function (i) {
        var metadata = i.metadata;
        var value = i.value;
        obj[metadata.colName] = value;
    });
    dataResponse.items.push(obj);
}
function executeStatement(dataResponse, proc, req, res, connection) {
    var request = requestGenerator(proc, res.locals.lang);
    request.on('row', function (columns) {
        handleRowEvent(columns, dataResponse);
    });
    request.on('doneInProc', function (rowCount, more, rows) {
        console.log('doneInProc');
        res.status(200).json(dataResponse);
    });
    connection.callProcedure(request);
}
function callDB(req, res, proc) {
    var dataResponse = { items: [] };
    var Connection = tedious.Connection;
    var connection = new Connection(config_1.DBConfig);
    connection.on('connect', function (err) {
        // If no error, then good to go...
        executeStatement(dataResponse, proc, req, res, connection);
    });
}
exports.callDB = callDB;
