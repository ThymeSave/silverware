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

export interface ImporterPayload {
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
    const sourceReader = new FileReader();
    sourceReader.readAsDataURL(blob);

    return new Promise((resolve, reject) => {
      sourceReader.onerror = reject;
      sourceReader.onload = _ => {
        const img = new Image();
        img.src = sourceReader.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const width = Math.min(500, img.width);
          const scaleFactor = width / img.width;
          canvas.width = width;
          canvas.height = img.height * scaleFactor;

          const ctx = canvas.getContext('2d')!!;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          ctx.canvas.toBlob((blob) => {
            const compressedReader = new FileReader();
            compressedReader.readAsDataURL(blob as Blob);
            compressedReader.onloadend = () => resolve(compressedReader.result as string);
            compressedReader.onerror = reject;
          }, 'image/jpeg', .3);
        };
      };
    });
  }
}

export type RecipeImporterList = Array<Importer<Recipe>>

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
  protected fetchContent(context: ComponentContext, url: URL): Observable<FunnelCORSProxyErrorResponse | FunnelCORSProxySuccessResponse> {
    return context.getService<FunnelCorsService>(SERVICE_NAME_FUNNEL_CORS_PROXY).fetch(url);
  }
}

export abstract class ManualImporter<T> extends Importer<T> {
  get type() {
    return ImporterType.MANUAL;
  }
}
