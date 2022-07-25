import { RawRecipe, RecipeURLImporter, ComponentContext } from "@thymesave/core";

export class ChowdownSingleRecipeImporter extends RecipeURLImporter {
  public override get name() {
    return "Chowdown Single Recipe";
  }

  public override async parseFromHTML(_: ComponentContext, rawHTML: string): Promise<RawRecipe> {
    const parsedDocument = this.createDocument(rawHTML);

    let image = undefined;
    try {
      const rawImageSrc = (parsedDocument.querySelector("[itemprop='image']") as any)?.src;
      image = rawImageSrc ? await this.imageURLToBase64(rawImageSrc) : undefined;
    } catch (e) {
      // ignore
    }

    return {
      title: parsedDocument.title,
      description: parsedDocument.querySelector("[itemprop='description']")?.textContent ?? "",
      ingredients: this.extractTextFromNodes(parsedDocument.querySelectorAll("[itemprop='recipeIngredient']")),
      instructions: this.extractTextFromNodes(parsedDocument.querySelectorAll("[itemprop='recipeInstructions']>li")),
      image,
    };
  }
}
