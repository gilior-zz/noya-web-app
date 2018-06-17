"use strict";
exports.__esModule = true;
var config_1 = require("./config");
var mailgun = require("mailgun-js");
var _mailgun = mailgun(config_1.emailConfig);
exports.sendMail = function (recipient, message, attachment) {
    if (attachment === void 0) { attachment = null; }
    return new Promise(function (resolve, reject) {
        var data = {
            from: message.from,
            to: config_1.emailConfig.to,
            subject: config_1.emailConfig.subject,
            text: message.text,
            inline: attachment,
            html: message.html
        };
        var sender = _mailgun.messages();
        sender.send(data, function (error) {
            if (error) {
                return reject(error);
            }
            return resolve();
        });
    });
};
