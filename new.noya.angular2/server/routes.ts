import * as mailer from 'express-mailer';
import {CV, DataResponse, HomePageText, ImageGalleryItem, Link, TraverseItem} from "../src/app/dal/models";
import {callDB} from "./dbHelper";
import {Program} from "@angular/compiler-cli/ngtools2";
import * as nodemailer from 'nodemailer'
import * as Mail from "nodemailer";
import {Options} from "nodemailer/lib/mailer";
import {Express, Request, Response} from "express";
import {sendMail} from "./email-util";

export function handleHomeRoutes(req: Request, res: Response) {
  callDB<HomePageText>(req, res, 'HomePageTextSelect');
}

export function handleTraverseItemsRoutes(req: Request, res: Response) {
  callDB<TraverseItem>(req, res, 'TraverseItemsSelect');
}

export function handleCVRoutes(req: Request, res: Response) {
  callDB<CV>(req, res, 'CVSelect');
}

export function handleImgRoutes(req: Request, res: Response) {
  callDB<ImageGalleryItem>(req, res, 'ImagesGallery_NewSelect');
}

export function handlePrgRoutes(req: Request, res: Response) {
  callDB<Program>(req, res, 'ProgramsSelect');
}

export function handleLinksRoutes(req: Request, res: Response) {
  callDB<Link>(req, res, 'LinksSelect');
}

export function handleMsgRoutes(req: Request, res: Response) {
  let smtpConfig = {
    host: 'relay-hosting.secureserver.net',
    port: 25,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "noya@noyaschleien.com",
      pass: "BUHVKV8448"
    }
  };
  let transporter = nodemailer.createTransport(smtpConfig)
  var message: Options = {
    from: 'noyaschleien@noyaschleien.com',
    to: 'liorgish@gmail.com',
    subject: 'Message title',
    text: 'Plaintext version of the message',
    html: '<p>HTML version of the message</p>'
  };

  transporter.sendMail(message).then(sentMessageInfo => console.log(sentMessageInfo))
}

export function handleMsgRoutesB(req: Request, res: Response, app: Express) {
  mailer.extend(app, {
    from: 'noyaschleien@noyaschleien.com',
    host: 'relay-hosting.secureserver.net', // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: 'noya@noyaschleien.com',
      pass: 'BUHVKV8448'
    }
  });

  app['mailer'].send('email', {
    to: 'example@example.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
    subject: 'Test Email', // REQUIRED.
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

export async function handleMsgRoutesC(req: Request, res: Response) {
  try {
    let dataResponse: DataResponse = {items: []};
    await sendMail('liorgish@gmail.com', {
      text: req.body.Message.Content,
      html: req.body.Message.Content,
      from: req.body.Message.Sender.Email
    });
    dataResponse.items.push(true);
    res.status(200).json(dataResponse);

  } catch (e) {
    console.error('e', e);
    res.status(500)
  }
}



