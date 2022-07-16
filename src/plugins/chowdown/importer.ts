import { ComponentContext, Recipe, URLImporter } from "@thymesave/core";
import { URLImporterPayload, Instruction } from "@thymesave/core";
import { parseIngredientInformation } from "@thymesave/ingredients";
import { IngredientParseError, propagateParseError, loadIngredientByKey } from "@thymesave/ingredients";
import { matchIngredientByText, Languages } from "@thymesave/translations";
import { from, Observable, switchMap } from "rxjs";

export class ChowdownSingleRecipeImporter extends URLImporter<Recipe> {
  public get name() {
    return "Chowdown Single Recipe";
  }

  public import(context: ComponentContext, payload: URLImporterPayload): Observable<Recipe> {
    return this.fetchContent(context, new URL(payload.url))
      .pipe(switchMap(raw => from(this.parseRecipe(raw as string))));
  }

  private parseInstructions(doc: Document) {
    return this.extractTextFromNodes(doc.querySelectorAll("[itemprop='recipeInstructions']>li"))
      .map(text => ({text} as Instruction));
  }

  private parseIngredients(doc: Document) {
    return this.extractTextFromNodes(doc.querySelectorAll("[itemprop='recipeIngredient']"))
      .map(text => {
        try {
          return parseIngredientInformation(text);
        } catch (e: any | IngredientParseError) {
          return propagateParseError(e);
        }
      })
      .map(parsed => {
        // TODO Specify language to plugin
        const matches = matchIngredientByText(Languages.en_US, parsed.ingredient);

        // TODO Allow user specific selections for translations -> return type needs to be changed probably
        const firstTranslation = matches[0];
        const ingredient = loadIngredientByKey(firstTranslation.key);

        return {
          ...parsed,
          translationKey: firstTranslation.key,
          category: ingredient.category,
          scalable: ingredient.scalable,
        };
      });
  }

  private async parseRecipe(rawHTML: string): Promise<Recipe> {
    const parsedDocument = this.createDocument(rawHTML);

    const imageSrc = (parsedDocument.querySelector("[itemprop='image']") as any)?.src;

    return {
      title: parsedDocument.title,
      description: parsedDocument.querySelector("[itemprop='description']")?.textContent ?? "",
      ingredients: this.parseIngredients(parsedDocument),
      instructions: this.parseInstructions(parsedDocument),
      image: imageSrc ? await this.imageURLToBase64(imageSrc) : undefined,
    };
  }
}
