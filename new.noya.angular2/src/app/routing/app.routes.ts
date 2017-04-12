import { NgModule } from '@angular/core';
import { RouterModule, CanDeactivate } from '@angular/router';





import { HeaderImage } from '../HeaderImage/header.image';
import { CanDeactivateGuard } from '../common/can-deactivate-guard.service';




@NgModule({
    imports:  [
        RouterModule.forRoot( 
            [
            { path: 'home', loadChildren: './../Home/home.module#HomeModule' },
            { path: 'biography', loadChildren: './../Biography/biography.module#BiographyModule' },
            { path: 'contact', loadChildren: './../Contact/contact.module#ContactModule'},
              { path: 'links', loadChildren: './../Links/links.module#LinksModule'},
                { path: 'programs', loadChildren: './../Programs/programs.module#ProgramsModule'},
                  { path: 'videos', loadChildren: './../Videos/videos.module#VideosModule'},
            { path: 'pictures', loadChildren: './../Pictures/pictures.module#PicturesModule'},
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ], {useHash: true}
        )
    ],
    exports: [
        RouterModule
    ],
    providers:[
        CanDeactivateGuard
    ]
})
export class AppRoutingModule { }






