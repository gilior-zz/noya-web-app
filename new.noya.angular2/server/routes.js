"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mailer = require("express-mailer");
var dbHelper_1 = require("./dbHelper");
var nodemailer = require("nodemailer");
var email_util_1 = require("./email-util");
function handleHomeRoutes(req, res) {
    dbHelper_1.callDB(req, res, 'HomePageTextSelect');
}
exports.handleHomeRoutes = handleHomeRoutes;
function handleTraverseItemsRoutes(req, res) {
    dbHelper_1.callDB(req, res, 'TraverseItemsSelect');
}
exports.handleTraverseItemsRoutes = handleTraverseItemsRoutes;
function handleCVRoutes(req, res) {
    dbHelper_1.callDB(req, res, 'CVSelect');
}
exports.handleCVRoutes = handleCVRoutes;
function handleImgRoutes(req, res) {
    dbHelper_1.callDB(req, res, 'ImagesGallery_NewSelect');
}
exports.handleImgRoutes = handleImgRoutes;
function handlePrgRoutes(req, res) {
    dbHelper_1.callDB(req, res, 'ProgramsSelect');
}
exports.handlePrgRoutes = handlePrgRoutes;
function handleLinksRoutes(req, res) {
    dbHelper_1.callDB(req, res, 'LinksSelect');
}
exports.handleLinksRoutes = handleLinksRoutes;
function handleMsgRoutes(req, res) {
    var smtpConfig = {
        host: 'relay-hosting.secureserver.net',
        port: 25,
        secure: false,
        auth: {
            user: "noya@noyaschleien.com",
            pass: "BUHVKV8448"
        }
    };
    var transporter = nodemailer.createTransport(smtpConfig);
    var message = {
        from: 'noyaschleien@noyaschleien.com',
        to: 'liorgish@gmail.com',
        subject: 'Message title',
        text: 'Plaintext version of the message',
        html: '<p>HTML version of the message</p>'
    };
    transporter.sendMail(message).then(function (sentMessageInfo) { return console.log(sentMessageInfo); });
}
exports.handleMsgRoutes = handleMsgRoutes;
function handleMsgRoutesB(req, res, app) {
    mailer.extend(app, {
        from: 'noyaschleien@noyaschleien.com',
        host: 'relay-hosting.secureserver.net',
        secureConnection: true,
        port: 25,
        transportMethod: 'SMTP',
        auth: {
            user: 'noya@noyaschleien.com',
            pass: 'BUHVKV8448'
        }
    });
    app['mailer'].send('email', {
        to: 'example@example.com',
        subject: 'Test Email',
        otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
    }, function (err) {
        if (err) {
            // handle error
            console.log(err);
            res.send('There was an error sending the email');
            return;
        }
        res.send('Email Sent');
    });
}
exports.handleMsgRoutesB = handleMsgRoutesB;
function handleMsgRoutesC(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataResponse, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    dataResponse = { items: [] };
                    return [4 /*yield*/, email_util_1.sendMail('liorgish@gmail.com', {
                            text: req.body.Message.Content,
                            html: req.body.Message.Content,
                            from: req.body.Message.Sender.Email
                        })];
                case 1:
                    _a.sent();
                    dataResponse.items.push(true);
                    res.status(200).json(dataResponse);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.error('e', e_1);
                    res.status(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.handleMsgRoutesC = handleMsgRoutesC;
