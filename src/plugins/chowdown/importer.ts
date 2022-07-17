import { RawRecipe, RecipeURLImporter, ComponentContext } from "@thymesave/core";

export class ChowdownSingleRecipeImporter extends RecipeURLImporter {
  public override get name() {
    return "Chowdown Single Recipe";
  }

  public override async parseFromHTML(_ : ComponentContext, rawHTML: string): Promise<RawRecipe> {
    const parsedDocument = this.createDocument(rawHTML);
    const imageSrc = (parsedDocument.querySelector("[itemprop='image']") as any)?.src;

    return {
      title: parsedDocument.title,
      description: parsedDocument.querySelector("[itemprop='description']")?.textContent ?? "",
      ingredients: this.extractTextFromNodes(parsedDocument.querySelectorAll("[itemprop='recipeIngredient']")),
      instructions: this.extractTextFromNodes(parsedDocument.querySelectorAll("[itemprop='recipeInstructions']>li")),
      image: imageSrc ? await this.imageURLToBase64(imageSrc) : undefined,
    };
  }
}
