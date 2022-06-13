import { Observable } from "rxjs";
import { FunnelCORSProxyErrorResponse, FunnelCORSProxySuccessResponse } from "../models/funnel";

export interface Service {
}

export const SERVICE_NAME_FUNNEL_CORS_PROXY = "FUNNEL_CORS_SERVICE"

/**
 * Service to fetch website content serverside to bypass CORS and other security features of browsers
 *
 * See https://funnel.docs.thymesave.app/ for more information about the underlying limitations and usage.
 */
export interface FunnelCorsService extends Service {
  fetch(url : URL): Observable<FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse>
}
