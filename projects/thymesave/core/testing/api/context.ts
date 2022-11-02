import {
  ComponentContext,
  FunnelCorsService,
  Service,
  FunnelCORSProxyErrorResponse,
  FunnelCORSProxySuccessResponse,
  ImporterPayload,
  Importer,
  SERVICE_NAME_FUNNEL_CORS_PROXY,
} from "@thymesave/core";
import { Observable, of } from "rxjs";

import { runImporter } from "./importer";

export class FunnelCorsMockService implements FunnelCorsService, Service {
  constructor(private responses: Map<RegExp, FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse>) {

  }

  fetch(url: URL): Observable<FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse> {
    for (const [key, value] of this.responses.entries()) {
      if (url.toString().match(key)) {
        return of(value as FunnelCORSProxySuccessResponse);
      }
    }

    throw new Error(`No response found for url ${url}`);
  }

}

export class TestContext implements ComponentContext {
  public readonly services = new Map<string, Service>();

  public injectService(name: string, service: Service) {
    this.services.set(name, service);
  }

  public getService<T extends Service>(name: string): T {
    return this.services.get(name) as T;
  }

  public runWith<T>(callback: (context: ComponentContext) => T): T {
    return callback(this);
  }

  public runImporter<T extends Importer<any>>(importer: T, payload: ImporterPayload) {
    return this.runWith(async context => runImporter(importer, context, payload));
  }

}

export class TestContextBuilder {
  private _context: TestContext = new TestContext();

  public withService(name: string, service: Service) {
    this._context.injectService(name, service);
    return this;
  }

  public withFunnelCorsResponse(response: FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse) {
    return this.withService(
      SERVICE_NAME_FUNNEL_CORS_PROXY,
      new FunnelCorsMockService(new Map<RegExp, any>([[/.*/, response]])),
    );
  }

  public build(): TestContext {
    return this._context;
  }
}
