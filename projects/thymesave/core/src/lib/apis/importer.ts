import { Observable } from "rxjs";

import { ComponentContext } from "./context";
import { SERVICE_NAME_FUNNEL_CORS_PROXY, FunnelCorsService } from "./services";

import { FunnelCORSProxyErrorResponse, FunnelCORSProxySuccessResponse } from "../models/funnel";
import { Recipe } from "../models/recipe";

export enum ImporterType {
  /**
   * Import from publicly accessible URL
   */
  URL,
  /**
   * Enter using a generated form
   */
  MANUAL
}

export abstract class Importer<T> {
  /**
   * Type specifies which inputs the importer can take and influence how the UI is displayed
   */
  abstract get type(): ImporterType

  /**
   * Name of the importer to display
   */
  abstract get name(): string

  /**
   * Run the import with specified input
   * @param context Context provided to importer
   * @param payload Input to the given recipe
   */
  abstract import(context: ComponentContext, payload: T): Observable<Recipe>
}

export type RecipeImporterList = Array<Importer<Recipe>>

export abstract class URLImporter<T> extends Importer<T> {
  get type() {
    return ImporterType.URL;
  }

  /**
   * Fetch URL content using funnel cors proxy.
   *
   * This is mainly convenience for context#getService to get the funnel cors service instance,
   * you can also call it directly in your completely custom implementation.
   *
   * If you don't want to use this service keep in mind that the code will run in the browser
   * and therefore is restricted to CORS and other browser security features.
   *
   * @param context Context for service discovery
   * @param url URL to fetch
   * @private
   */
  protected fetchContent(context: ComponentContext, url: URL): Observable<FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse> {
    return context.getService<FunnelCorsService>(SERVICE_NAME_FUNNEL_CORS_PROXY).fetch(url);
  }
}

export abstract class ManualImporter<T> extends Importer<T> {
  get type() {
    return ImporterType.MANUAL;
  }
}
