import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { FunnelCorsService, FunnelCORSProxyErrorResponse, FunnelCORSProxySuccessResponse } from "@thymesave/core";
import { catchError, map, Observable, switchMap, throwError } from "rxjs";

import { environment } from "@/../environments/environment";

export class FunnelError extends Error {
  public static readonly UNKNOWN = new FunnelError("unknown");
}

@Injectable({
  providedIn: 'root',
})
export class FunnelService implements FunnelCorsService {
  public constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public fetch(url: URL): Observable<FunnelCORSProxySuccessResponse> {
    // @ts-ignore
    return this.authService.getIdTokenClaims()
      .pipe(
        map(claims => claims!!.__raw),
        switchMap(token =>
          this.http
            .get(`${environment.funnelBaseUrl}/service/cors-proxy/`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                'url': url.toString(),
              },
              responseType: "text",
            })
            .pipe(
              catchError(e => {
                if (!(e instanceof HttpErrorResponse)) {
                  return throwError(() => new FunnelError("unknown"));
                }

                try {
                  const parsed = JSON.parse(e.error) as FunnelCORSProxyErrorResponse;
                  return throwError(() => new FunnelError(`funnel.${parsed.errorStatus}`));
                } catch {
                  return throwError(() => FunnelError.UNKNOWN);
                }
              }),
              map(r => r as FunnelCORSProxySuccessResponse),
            ),
        ),
      );
  }
}
