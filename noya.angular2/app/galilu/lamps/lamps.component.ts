import { Component } from '@angular/core';
import {ImageGalleryItem} from '../../dal/models'
@Component({
    moduleId: module.id,
    templateUrl: './lamps.component.html',
    styleUrls: ['./lamps.component.css']
})
export class LampsComponent {
    images: ImageGalleryItem[];
    ngOnInit() {
        this.images = [];
        for (let i = 1; i < 4; i++)
            this.images.push({ ID: i, Selected: false });
    }

    isSelected(id: number): boolean { return this.images.find(i => i.ID == id).Selected }

    onClick(id: number) {
        this.images.find(i => i.ID == id).Selected = !this.images.find(i => i.ID == id).Selected;
    }
}