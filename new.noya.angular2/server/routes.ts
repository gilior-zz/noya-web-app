import {Request, Response} from "express";
import {CV, HomePageText, ImageGalleryItem, Link, TraverseItem} from "../src/app/dal/models";
import {callDB} from "./dbHelper";
import {Program} from "@angular/compiler-cli/ngtools2";
import * as nodemailer from 'nodemailer'
import * as Mail from "nodemailer";
import {Options} from "nodemailer/lib/mailer";

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
      user: 'username',
      pass: 'password'
    }
  };
  let transporter = nodemailer.createTransport(smtpConfig)
  var message:Options = {
    from: 'noyaschleien@noyaschleien.com',
    to: 'liorgish@gmail.com',
    subject: 'Message title',
    text: 'Plaintext version of the message',
    html: '<p>HTML version of the message</p>'
  };

  transporter.sendMail(message);
}


