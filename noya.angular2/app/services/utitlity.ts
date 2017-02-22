
import { Language } from '../dal/models'


export function IsHebrewMode(): boolean { return +(sessionStorage.getItem('lang') || '0') == Language.Hebrew; }
export function IsEnglishMode(): boolean { return +(sessionStorage.getItem('lang') || '0') == Language.English; }
export function IsMobile(): boolean { return window.innerWidth <= 480; }
export function IsPhablet(): boolean { return window.innerWidth <= 767; }
export function IsTablet(): boolean { return window.innerWidth <= 991; }
export function IsDesktop(): boolean { return window.innerWidth >= 992; }





