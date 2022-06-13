export enum FunnelCORSProxyErrorResponseStatus {
  ORIGIN_REQUEST_FAILED = "ORIGIN_REQUEST_FAILED",
  ORIGIN_RESPONSE_READ_FAILED = "ORIGIN_RESPONSE_READ_FAILED",
  ORIGIN_RESPONSE_CONTENT_TYPE_UNSUPPORTED = "ORIGIN_RESPONSE_CONTENT_TYPE_UNSUPPORTED",
  INVALID_URL = "INVALID_URL"
}

export interface FunnelCORSProxyErrorResponse {
  upstreamResponse: string | null
  errorStatus : FunnelCORSProxyErrorResponseStatus
}

export type FunnelCORSProxySuccessResponse = string
