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
   * Unique identifier within the plugin
   */
  abstract get identifier() : string

  /**
   * Specifies the entity type the importer can process
   */
  abstract get entityType(): EntityType

  /**
   * Name of the importer to display
   * @param languageCode Code of the language to use, for a list of all language
   * code take the Languages object from @thymesave/translations as base.
   *
   * If you dont want your plugin name to be localized simply ignore the language code parameter
   */
  abstract getName(languageCode : string): string

  /**
   * Run the import with specified input
   * @param context Context provided to importer
   * @param payload Input to the given recipe
   */
  abstract import(context: ComponentContext, payload: ImporterPayload): Observable<T[]>

  /**
   * Extract all text context from given node list
   * @param nodes Nodes to extract textContent from
   * @protected
   */
  protected extractTextFromNodes(nodes: NodeList): string[] {
    return this.domNodesToList(nodes)
      .filter(el => !!el)
      .map(el => el.textContent as string);
  }

  protected domNodesToList<T extends HTMLElement>(nodes : NodeList) : T[] {
    return Array.from(nodes) as T[];
  }

  /**
   * Create document from given html input
   * @param rawHTML Raw HTML input
   * @param baseURL Base url for document
   * @protected
   */
  protected createDocument(baseURL : URL, rawHTML: string) {
    const parser = new DOMParser();
    return parser.parseFromString(`${rawHTML}<base href='${baseURL.toString()}'>`, "text/html");
  }

  /**
   * Fetch publicly available image from URL and return base64 encoded URL.
   * Also handles default resizing and compression
   * @param url URL to load image from
   */
  protected async imageURLToBase64(url: string): Promise<string | undefined> {
    try {
      const response = await fetch(url, {});
      const blob = await response.blob();
      return await imageToBase64(blob);
    } catch (e) {
      return;
    }
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
  abstract override import(context: ComponentContext, payload: URLImporterPayload): Observable<T[]>

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

  /**
   * The default method used internally by import, simplifying the logic you need to write.
   *
   * If you need more control override import instead
   * @param context Context for plugin
   * @param rawHTML RAW html loaded form url
   * @param url URL
   */
  public parseFromHTML(context: ComponentContext, rawHTML: string, url : URL): Promise<RawRecipe[]> {
    throw new Error("not implemented");
  }

  public override import(context: ComponentContext, payload: URLImporterPayload): Observable<RawRecipe[]> {
    const url = new URL(payload.url);
    return this.fetchContent(context, url)
      .pipe(switchMap(raw => from(this.parseFromHTML(context, String(raw), url))));
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
