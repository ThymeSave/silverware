import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { loadFunnelConfig } from "@helper/loadFunnelConfig";
import { createLogger } from "@helper/log";
import { PluginRegistry } from "@thymesave/plugin";
import { catchError, first, throwError } from "rxjs";

import { environment } from './environments/environment';
import { AppModule } from '@/app.module';

import "@plugins/builtin";

const logger = createLogger("main");

logger.debug("Registered builtin plugins", PluginRegistry.getRegistered());

if (environment.production) {
  enableProdMode();
}

loadFunnelConfig()
  .pipe(
    first(),
    catchError(_ => {
      alert("Failed to load application, make sure you are online once before using the app");
      return throwError(() => new Error());
    }),
  )
  .subscribe(funnelConfig => {
    // @ts-ignore Set for factory method in app module
    window.funnelConfig = funnelConfig;
    logger.debug("Funnel config loaded", funnelConfig);

    // Initialize app module
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(logger.error);
  });
