import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
