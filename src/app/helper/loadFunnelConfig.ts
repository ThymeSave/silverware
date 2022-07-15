import { isDevMode } from '@angular/core';
import {
  catchError,
  first,
  of,
  tap,
  throwError,
  timeout,
  from,
  delay,
  switchMap,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";

import { CACHE_FUNNEL_CONFIG, loadValue, saveValue } from "@/helper/simpleStorage";

/**
 * Configuration as returned by funnel
 */
export interface FunnelConfig {
  /**
   * OIDC related configuration
   */
  oidc: {
    clientId: string
    configUrl: string
    issuerUrl: string
    scopes: string[]
    usernameClaim: string
  }
}

/**
 * loadFunnelConfig from API
 */
export const loadFunnelConfig = () => {
  const minWaitTimeMS = isDevMode() ? 0 : 200;
  const due = new Date(Date.now() + minWaitTimeMS);
  return fromFetch('https://funnel.thymesave.app/')
    .pipe(
      first(),
      timeout({
        each: 1500,
      }),
      switchMap(r => from(r.json())),
      delay(due),
      tap(parsedConfig => {
        // @ts-ignore
        if (parsedConfig != {}) {
          saveValue<FunnelConfig>(CACHE_FUNNEL_CONFIG, parsedConfig);
        }
      }),
      catchError(err => {
        console.warn("Could not fetch funnel config", err);
        const cachedConfig = loadValue<FunnelConfig>(CACHE_FUNNEL_CONFIG);
        if (cachedConfig != null) {
          console.debug("Return cached funnel config", cachedConfig);
          return of(cachedConfig)
            .pipe(delay(due));
        }
        return throwError(() => err);
      }),
    );
};
