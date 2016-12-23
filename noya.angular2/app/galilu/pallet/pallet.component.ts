import { Component, OnInit } from '@angular/core';
import {ImageGalleryItem} from '../../dal/models'
@Component({
    moduleId: module.id,
    templateUrl: './pallet.component.html',
    styleUrls: ['./pallet.component.css']
})
export class PalletComponent implements OnInit {
    images: ImageGalleryItem[];
    ngOnInit() {
        this.images = [];
        for (let i = 1; i < 7; i++)
            this.images.push({ ID: i, Selected: false });
    }

    isSelected(id: number): boolean { return this.images.find(i => i.ID == id).Selected }

    onClick(id: number) {
        this.images.find(i => i.ID == id).Selected = !this.images.find(i => i.ID == id).Selected;
    }


}