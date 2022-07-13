import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppModule } from '@/app.module';
import { loadFunnelConfig } from "@/helper/loadFunnelConfig";

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
