
import { Language } from '../dal/models'
class Utilty {

    get IsHebrewMode(): boolean { return +(sessionStorage.getItem('lang') || '0') == Language.Hebrew; }
    get IsEnglishMode(): boolean { return !this.IsHebrewMode; }
    get IsMobile(): boolean { return window.innerWidth <= 480; }
    get IsPhablet(): boolean { return window.innerWidth <= 767; }
    get IsTablet(): boolean { return window.innerWidth <= 991; }
    get IsDesktop(): boolean { return window.innerWidth >= 992; }

}

export var utilty: Utilty = new Utilty();