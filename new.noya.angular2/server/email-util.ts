import {emailConfig} from './config'
import  * as mailgun from 'mailgun-js'
const _mailgun = mailgun(emailConfig);


export const sendMail = (recipient, message, attachment = null) =>
  new Promise((resolve, reject) => {
    const data = {
      from: message.from,
      to: emailConfig.to,
      subject: emailConfig.subject,
      text: message.text,
      inline: attachment,
      html: message.html,
    };

    let sender = _mailgun.messages();
    sender.send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
