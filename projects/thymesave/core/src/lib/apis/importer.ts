import { from, Observable, switchMap } from "rxjs";

import { ComponentContext } from "./context";
import { imageToBase64 } from "./image";
import { SERVICE_NAME_FUNNEL_CORS_PROXY, FunnelCorsService } from "./services";

import { FunnelCORSProxyErrorResponse, FunnelCORSProxySuccessResponse } from "../models/funnel";
import { RawRecipe, Recipe } from "../models/recipe";

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

export type EntityType = "recipe";

export interface ImporterPayload {
}

export abstract class Importer<T> {
  /**
   * Type specifies which inputs the importer can take and influence how the UI is displayed
   */
  abstract get type(): ImporterType

  /**
   * Specifies the entity type the importer can process
   */
  abstract get entityType() : EntityType

  /**
   * Name of the importer to display
   */
  abstract get name(): string

  /**
   * Run the import with specified input
   * @param context Context provided to importer
   * @param payload Input to the given recipe
   */
  abstract import(context: ComponentContext, payload: ImporterPayload): Observable<T>

  /**
   * Extract all text context from given node list
   * @param nodes Nodes to extract textContent from
   * @protected
   */
  protected extractTextFromNodes(nodes : NodeList) : string[] {
    return Array.from(nodes)
      .filter(el => !!el)
      .map(el => el.textContent as string);
  }

  /**
   * Create document from given html input
   * @param rawHTML Raw HTML input
   * @protected
   */
  protected createDocument(rawHTML : string) {
    const parser = new DOMParser();
    return parser.parseFromString(rawHTML, "text/html");
  }
  /**
   * Fetch publicly available image from URL and return base64 encoded URL.
   * Also handles default resizing and compression
   * @param url URL to load image from
   */
  protected async imageURLToBase64(url: string): Promise<string> {
    const blob = await fetch(url)
      .then(r => r.blob());

    return imageToBase64(blob);
  }
}

export type RecipeImporterList = Array<Importer<RawRecipe>>

export interface URLImporterPayload extends ImporterPayload {
  url: string
}

export abstract class URLImporter<T> extends Importer<T> {
  get type() {
    return ImporterType.URL;
  }

  /**
   * Run the import with specified input
   * @param context Context provided to importer
   * @param payload Input to the given recipe
   */
  abstract override import(context: ComponentContext, payload: URLImporterPayload): Observable<T>

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
  public fetchContent(context: ComponentContext, url: URL): Observable<FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse> {
    return context.getService<FunnelCorsService>(SERVICE_NAME_FUNNEL_CORS_PROXY).fetch(url);
  }
}

export abstract class RecipeURLImporter extends URLImporter<RawRecipe> {
  override get entityType(): EntityType {
    return "recipe";
  }

  public abstract parseFromHTML(context: ComponentContext, rawHTML : string) : Promise<RawRecipe>;

  public override import(context: ComponentContext, payload: URLImporterPayload): Observable<RawRecipe> {
    return this.fetchContent(context, new URL(payload.url))
      .pipe(switchMap(raw => from(this.parseFromHTML(context, raw as string))));
  }
}

export abstract class ManualImporter<T> extends Importer<T> {
  get type() {
    return ImporterType.MANUAL;
  }
}

export abstract class RecipeManualImporter extends Importer<RawRecipe> {
  override get entityType(): EntityType {
    return "recipe";
  }
}
