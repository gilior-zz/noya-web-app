//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { enableProdMode } from '@angular/core';



//import { AppModule } from './app.module';

//enableProdMode();

//platformBrowserDynamic().bootstrapModule(AppModule);


import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
