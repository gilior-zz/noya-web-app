import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {CenterComponent} from './center/center.component'
import {HomeComponent} from './home/home.component'
import {PalletComponent} from './pallet/pallet.component'
import {BagsComponent} from './bags/bags.component'
import {CushionsComponent} from './cushions/cushions.component'
import {LampsComponent} from './lamps/lamps.component'
import {BooksComponent} from './books/books.component'
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'center'
                    },
                    {
                        path: 'center',
                        component: CenterComponent
                    },
                    {
                        path: 'pallet',
                        component: PalletComponent
                    },
                    {
                        path: 'books',
                        component: BooksComponent
                    },
                    {
                        path: 'cushions',
                        component: CushionsComponent
                    },
                    {
                        path: 'lamps',
                        component: LampsComponent
                    },
                    {
                        path: 'bags',
                        component: BagsComponent
                    },
                ]

            }
        ])


    ],
    exports: [
        RouterModule
    ]
})
export class GaliluRoutingModule { }