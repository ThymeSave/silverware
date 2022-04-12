import { enableProdMode, Injectable, Optional } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { loadFunnelConfig, FunnelConfig } from "./helper/loadFunnelConfig";

if (environment.production) {
  enableProdMode();
}

loadFunnelConfig().then(funnelConfig => {
  // @ts-ignore Set for factory method in app module
  window.funnelConfig = funnelConfig;

  // Initialize app module
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
