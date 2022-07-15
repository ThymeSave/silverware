import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { catchError, first, throwError } from "rxjs";

import { environment } from './environments/environment';
import { AppModule } from '@/app.module';
import { loadFunnelConfig } from "@/helper/loadFunnelConfig";

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
    console.log(funnelConfig);
    // @ts-ignore Set for factory method in app module
    window.funnelConfig = funnelConfig;

    // Initialize app module
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });

