import {CV, ImageGalleryItem, Link, Program, TraverseItem, VideoItem} from '../../app/dal/models';


export interface IAppState {
  videos: { [key: number]: VideoItem };
  images: { [key: number]: ImageGalleryItem };
  links: { [key: number]: Link };
  biographies: { [key: number]: CV };
  programs: { [key: number]: Program };
  cards: { [key: number]: TraverseItem };
}

export const initState: IAppState = {
  videos: {},
  images: {},
  links: {},
  biographies: {},
  programs: {},
  cards: []
}
