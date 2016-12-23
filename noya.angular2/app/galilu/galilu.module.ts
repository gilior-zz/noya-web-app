import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {SharedModule} from '../shared.module'
import {CenterComponent} from './center/center.component'
import {HomeComponent} from './home/home.component'
import {GaliluRoutingModule} from './galilu-rounting.module'
import {TranslatePipe}  from "../pipes/pipes"
import {PalletComponent} from './pallet/pallet.component'
import {BagsComponent} from './bags/bags.component'
import {CushionsComponent} from './cushions/cushions.component'
import {LampsComponent} from './lamps/lamps.component'
import {BooksComponent} from './books/books.component'
import {ProductPageCaptionComponent} from './helper-directives/product-page-caption.component'

@NgModule({
    imports: [
        CommonModule,
        GaliluRoutingModule,
        SharedModule

    ],
    declarations: [CenterComponent, CenterComponent, PalletComponent, HomeComponent, BagsComponent, CushionsComponent, LampsComponent, BooksComponent, ProductPageCaptionComponent],
    exports: []

})

export class GaliluModule { }