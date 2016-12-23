import { Component, OnInit, HostListener}   from '@angular/core';
import {Router} from '@angular/router'
import {CacheManager}  from '../../services/services'
import {Language} from "../../dal/models"
import {pageNameService} from '../../services/page-name.service'
@Component({
    selector: 'galilu-link',
    moduleId: module.id,
    templateUrl: 'link.component.html',
    styleUrls: ['./link.component.css']
})

export class GaliluLink implements OnInit {
    position: string;
    bottom: string;
    left: string;
    right: string;
    isAbsolute: boolean;
    isFixed: boolean;


    constructor(private cacheManager: CacheManager, private router: Router, private pn: pageNameService) {

    }

    changeMode() {
        if (this.pn.currentUrl.includes('galilu'))
            this.router.navigate(['/home']);
        else
            this.router.navigate(['galilu']);
    }

    ngOnInit() {
        //this.float=
    }
    get galiluMessage(): string { return this.pn.currentUrl.includes('galilu') ? 'Noya Schleien' : 'To store' }

    //@HostListener('mouseenter') onMouseEnter() {
    //    this.kidsArtMessage = 'Coming Soon...';
    //}

    //@HostListener('mouseleave') onMouseLeave() {
    //    this.kidsArtMessage = 'Kids Art';
    //}

    //@HostListener('document:scroll') onscroll() {
    //    this.resetStyleVariables();

    //    if ($('.fixed-button').offset().top + $('.fixed-button').height()
    //        >= $('#footer').offset().top) {

    //        this.position = `absolute`;
    //        this.bottom = `${$('#footer').height()}px`;
    //        this.isAbsolute = true;

    //        //console.log(this.position);
    //        //console.log(this.bottom);
    //        //$('.fixed-button').css('position', 'absolute');
    //        //$('.fixed-button').css('bottom', `${$('#footer').height()}px`);
    //    }

    //    if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top) {
    //        this.position = `fixed`;
    //        this.bottom = '0px';
    //        this.isFixed = true;
    //        //$('.fixed-button').css('position', 'fixed'); // restore when you scroll up
    //        //$('.fixed-button').css('bottom', `0`);
    //    }
    //    this.setClasses();
    //}

    resetStyleVariables(): void {
        this.isAbsolute = false;
        this.isFixed = false;
        //this.isHebrew = false;
        //this.isEnglish = false;
    }

    setClasses() {
        //console.log(this.isFixed)
        //console.log(this.isAbsolute)
        let classes = {
            //'non-footer-mode': this.isFixed,
            //'footer-mode': !this.isAbsolute,
            'hebrew-mode': this.isHebrew,
            'english-mode': !this.isHebrew,
        };

        return classes;
    }


    get float(): string {
        if (this.isHebrew) return 'left';
        return 'right';
    }


    get isEnglish(): boolean { return !this.isHebrew; }

    get isHebrew(): boolean {
        let l = this.cacheManager.GetFromCache('lang', Language.Hebrew) == Language.Hebrew;
        return l;
    }
}