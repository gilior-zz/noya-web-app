import {Request, Response} from "express";
import {CV, HomePageText, TraverseItem} from "../src/app/dal/models";
import {callDB} from "./dbHelper";

export function handleHomeRoutes(req: Request, res: Response) {
  callDB<HomePageText>(req, res, 'HomePageTextSelect');
}

export function handleTraverseItemsRoutes(req: Request, res: Response) {
  callDB<TraverseItem>(req, res, 'TraverseItemsSelect');
}

export function handleCVRoutes(req: Request, res: Response) {
  callDB<CV>(req, res, 'CVSelect');
}


