import { RawRecipe, RecipeURLImporter, ComponentContext, URLImporterPayload } from "@thymesave/core";
import { Observable } from "rxjs";

abstract class BaseChowdownImporter extends RecipeURLImporter {
  protected async parseFromChowdownHTML(rawHTML : string) : Promise<RawRecipe>  {
    const document = this.createDocument(rawHTML);
    let image = undefined;
    try {
      const rawImageSrc = (document.querySelector("[itemprop='image']") as any)?.src;
      image = rawImageSrc ? await this.imageURLToBase64(rawImageSrc) : undefined;
    } catch (e) {
      // ignore
    }

    return {
      title: document.title,
      description: document.querySelector("[itemprop='description']")?.textContent ?? "",
      ingredients: this.extractTextFromNodes(document.querySelectorAll("[itemprop='recipeIngredient']")),
      instructions: this.extractTextFromNodes(document.querySelectorAll("[itemprop='recipeInstructions']>li")),
      image,
    };
  }
}

export class ChowdownSingleRecipeImporter extends BaseChowdownImporter {
  public override get name() {
    return "Chowdown Single Recipe";
  }

  public override async parseFromHTML(_: ComponentContext, rawHTML: string): Promise<RawRecipe> {
    return this.parseFromChowdownHTML(rawHTML);
  }
}

export class ChowndownAllRecipeImporter extends BaseChowdownImporter {
  get name(): string {
    return "";
  }

  override parseFromHTML(context: ComponentContext, rawHTML: string): Promise<RawRecipe> {
    throw new Error("not implemented");
  }

  override import(context: ComponentContext, payload: URLImporterPayload): Observable<RawRecipe> {
    return super.import(context, payload);
  }
}
