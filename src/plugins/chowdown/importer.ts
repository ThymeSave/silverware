import { RawRecipe, RecipeURLImporter, ComponentContext, URLImporterPayload } from "@thymesave/core";
import { forkJoin, from, map, Observable, switchMap} from "rxjs";

abstract class BaseChowdownImporter extends RecipeURLImporter {
  protected async parseFromChowdownHTML(url: URL, rawHTML: string): Promise<RawRecipe[]> {
    const document = this.createDocument(url, rawHTML);
    let image = undefined;
    try {
      const rawImageSrc = (document.querySelector("[itemprop='image']") as any)?.src;
      image = rawImageSrc ? await this.imageURLToBase64(rawImageSrc) : undefined;
    } catch (e) {
      // ignore
    }

    return [{
      title: document.title,
      description: document.querySelector("[itemprop='description']")?.textContent ?? "",
      ingredients: this.extractTextFromNodes(document.querySelectorAll("[itemprop='recipeIngredient']")),
      instructions: this.extractTextFromNodes(document.querySelectorAll("[itemprop='recipeInstructions']>li")),
      image,
    }];
  }
}

export class ChowdownSingleRecipeImporter extends BaseChowdownImporter {
  public override get name() {
    return "Chowdown Single Recipe";
  }

  public override async parseFromHTML(_: ComponentContext, rawHTML: string, url: URL): Promise<RawRecipe[]> {
    return this.parseFromChowdownHTML(url, rawHTML);
  }
}

export class ChowdownAllRecipeImporter extends BaseChowdownImporter {
  get name(): string {
    return "Chowdown All Recipe";
  }

  private getRecipeURLsFromIndex(url: URL, rawHTML: string) {
    const parsedDocument = this.createDocument(url, rawHTML);
    return (Array.from(parsedDocument.querySelectorAll(".recipes a")) as HTMLLinkElement[])
      .map((a: HTMLLinkElement) => a.href);
  }

  private parseRecipeFromURL(context: ComponentContext, url: URL): Observable<RawRecipe[]> {
    return this.fetchContent(context, url)
      .pipe(
        switchMap(rawHtml => from(this.parseFromChowdownHTML(url, rawHtml as string))),
      );
  }

  public override import(context: ComponentContext, payload: URLImporterPayload): Observable<RawRecipe[]> {
    const url = new URL(payload.url);
    return this.fetchContent(context, url)
      .pipe(
        map(raw => this.getRecipeURLsFromIndex(url, String(raw))),
        switchMap(urls => forkJoin(urls.map((url: string) => this.parseRecipeFromURL(context, new URL(url))))),
        map(recipes => recipes.flat()),
      );
  }
}
