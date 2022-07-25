import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { FunnelCorsService, FunnelCORSProxyErrorResponse, FunnelCORSProxySuccessResponse } from "@thymesave/core";
import { catchError, map, Observable, switchMap, throwError } from "rxjs";

import { environment } from "@/../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class FunnelService implements FunnelCorsService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public fetch(url: URL): Observable<FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse> {
    // @ts-ignore
    return this.authService.getIdTokenClaims()
      .pipe(
        map(claims => claims!!.__raw),
        switchMap(token =>
          this.http
            .get(`${environment.funnelBaseUrl}/service/cors-proxy/`, {
              responseType: "text",
              params: {
                'url': url.toString(),
              },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .pipe(
              catchError(e => {
                if (!(e instanceof HttpErrorResponse)) {
                  return throwError(e);
                }

                try {
                  const parsed = JSON.parse(e.error);
                  return throwError(() => parsed as FunnelCORSProxyErrorResponse);
                } catch {
                  return throwError(() => e.message);
                }
              }),
              map(r => r as FunnelCORSProxySuccessResponse),
            ),
        ),
      );
  }
}
