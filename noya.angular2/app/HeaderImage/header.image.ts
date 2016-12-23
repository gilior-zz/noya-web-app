import {Component, OnInit, ViewEncapsulation, Input } from '@angular/core'
import { DomSanitizer, SafeUrl, SafeResourceUrl, SafeScript, SafeStyle} from '@angular/platform-browser';
import {Router, NavigationEnd, CanActivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'
import * as services from '../services/services'
import * as dal from '../dal/models'
import {pageNameService} from '../services/page-name.service'

@Component({
    selector: 'header-image',
    templateUrl: './header.image.html',
    moduleId: module.id,


})

export class HeaderImage implements OnInit {

    //ImageURL: string;
    //ImageURL: SafeUrl;
    constructor(private pn: pageNameService, private dataService: services.DataService, private logService: services.LogService, public sanitizer: DomSanitizer, public router: Router) {

    }
    active: boolean = true;
    ImageURL: string;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //this.active = false;
        //setTimeout(this.active = true, 0);
        return true;
    }
    get Title(): string { return this.pn.currentUrl.includes('galilu') ? 'Galilu' : 'Noya Schleien'; }
    get Subject(): string { return this.pn.currentUrl.includes('galilu') ? 'Custom designed products for toddlers' : 'Marimba & Percussion'; }

    mainImage: string = 'http://res.cloudinary.com/lior/image/upload/v1468953847/home_pic.jpg';
    kidsImage: string = 'http://res.cloudinary.com/lior/image/upload/v1478964869/galilu-home-image.png';
    safeMainImage = this.sanitizer.bypassSecurityTrustStyle(`url('${this.mainImage}')`);
    safeKidsImage = this.sanitizer.bypassSecurityTrustStyle(`url('${this.kidsImage}')`);
    @Input() pageName: string;
    get safeImage(): SafeStyle { return this.pn.currentUrl.includes('galilu') ? this.safeKidsImage : this.safeMainImage; }
    ngOnInit() {
        //this.logService.writeToLog('in ngOnInit');

        //var req: dal.MenuImageRequest = { Language: dal.Language.Hebrew, PathName: this.pageName };

        //this.dataService.ConnectToApiData(req, 'api/Data/GetImageForMenuItem').subscribe(
        //    (res: dal.MenuImageResponse) => {
        //        this.ImageURL = res.ImageURL; //console.log(this.ImageURL) }
        //        this.safeImage = this.sanitizer.bypassSecurityTrustStyle(`url('${this.ImageURL}')`);

        //    })
    }


}