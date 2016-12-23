import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {Home} from "./Home/home"
import {Biography} from "./Biography/biography"
import {Links} from "./Links/links"
import {Contact} from "./Contact/contact"
import {Programs} from "./Programs/programs"
import {Pictures} from "./Pictures/pictures"
import {Videos} from "./Videos/videos"
import {HeaderImage} from "./HeaderImage/header.image"
import {CanDeactivateGuard} from  './common/can-deactivate-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'galilu',
                loadChildren: 'app/galilu/galilu.module#GaliluModule',
            },
            { path: "home", component: Home },
            { path: "biography", component: Biography },
            { path: "pictures", component: Pictures },
            { path: "videos", component: Videos },
            { path: "programs", component: Programs },
            { path: "links", component: Links },
            { path: "contact", component: Contact, canDeactivate: [CanDeactivateGuard], },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ], { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard
    ]
})
export class AppRoutingModule { }






