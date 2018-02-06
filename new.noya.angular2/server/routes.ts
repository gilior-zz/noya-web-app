import {Request, Response} from "express";
import {CV, HomePageText, ImageGalleryItem, TraverseItem} from "../src/app/dal/models";
import {callDB} from "./dbHelper";
import {Program} from "@angular/compiler-cli/ngtools2";

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

export function handleImgRoutes(req: Request, res: Response) {
  callDB<Program>(req, res, 'ProgramsSelect');
}


