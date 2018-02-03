import {Request, Response} from "express";
import {HomePageText} from "../src/app/dal/models";
import {callDB} from "./dbHelper";

export function handleHomeRoutes(req: Request, res: Response) {
  callDB<HomePageText>(req, res,'HomePageTextSelect');
}


