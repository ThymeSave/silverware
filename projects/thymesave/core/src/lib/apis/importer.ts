import { Observable } from "rxjs";
import { FunnelCORSProxyErrorResponse, FunnelCORSProxySuccessResponse } from "../models/funnel";
import { Recipe } from "../models/recipe";
import { ComponentContext } from "./context";
import { SERVICE_NAME_FUNNEL_CORS_PROXY, FunnelCorsService} from "./services";

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
  constructor(protected readonly context : ComponentContext) {
  }

  /**
   * Type specifies which inputs the importer can take and influence how the UI is displayed
   */
  abstract readonly type : ImporterType

  /**
   * Run the import with specified input
   * @param payload Input to the given recipe
   */
  abstract import(payload : T) : Observable<Recipe>
}

export abstract class URLImporter<T> extends Importer<T> {
  readonly type: ImporterType = ImporterType.URL;

  /**
   * Fetch URL content using funnel cors proxy.
   *
   * This is mainly convenience for context#getService to get the funnel cors service instance,
   * you can also call it directly in your completely custom implementation.
   *
   * If you don't want to use this service keep in mind that the code will run in the browser
   * and therefore is restricted to CORS and other browser security features.
   *
   * @param url URL to fetch
   * @private
   */
  private fetchContent(url : URL) : Observable<FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse> {
    return this.context.getService<FunnelCorsService>(SERVICE_NAME_FUNNEL_CORS_PROXY).fetch(url);
  }
}

export abstract class ManualImporter<T> extends Importer<T> {
  readonly type: ImporterType = ImporterType.MANUAL;
}
