import { Component, Input} from '@angular/core';

@Component({
    selector: 'product-page-caption',
    moduleId: module.id,
    templateUrl: './product-page-caption.component.html',
    styleUrls: ['./product-page-caption.component.css']
})
export class ProductPageCaptionComponent {
    @Input() product: string;
}