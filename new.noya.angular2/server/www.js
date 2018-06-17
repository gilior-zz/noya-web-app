"use strict";
exports.__esModule = true;
var express = require("express");
var path_1 = require("path");
var routes_1 = require("./routes");
// Faster server renders w/ Prod mode (dev mode never needed)
// Express server
var app = express();
var PORT = process.env.PORT || 4000;
var DIST_FOLDER = path_1.join(process.cwd(), 'dist');
var parser = require('body-parser');
app.use(parser.json());
app.set('view engine', 'html');
app.set('views', path_1.join(DIST_FOLDER, 'browser'));
// TODO: implement data requests securely
// app.use('/api/Data', () => handleHomeRoutes(app));
app.use('/api/Data', function (req, res, next) {
    console.log(req.query);
    res.locals.lang = req.query.lang.substring(0, 3);
    next();
});
app.get('/api/Data/GetHomePageText', function (req, res) {
    routes_1.handleHomeRoutes(req, res);
});
app.get('/api/Data/GetTraverseItems', function (req, res) {
    routes_1.handleTraverseItemsRoutes(req, res);
});
app.get('/api/Data/GetCV', function (req, res) {
    routes_1.handleCVRoutes(req, res);
});
app.get('/api/Data/GetImages', function (req, res) {
    routes_1.handleImgRoutes(req, res);
});
app.get('/api/Data/GetPrograms', function (req, res) {
    routes_1.handlePrgRoutes(req, res);
});
app.get('/api/Data/GetLinks', function (req, res) {
    routes_1.handleLinksRoutes(req, res);
});
app.post('/api/Data/SendMessage', function (req, res) {
    routes_1.handleMsgRoutesC(req, res);
});
// Server static files from /browser
app.get('*.*', express.static(DIST_FOLDER));
// All regular routes use the Universal engine
app.get('*', function (req, res) {
    res.sendfile(path_1.join(DIST_FOLDER, 'index.html'), { req: req });
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node server listening on http://localhost:" + PORT);
});
