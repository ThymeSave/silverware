import { resourceBundle } from "@plugins/generic-homepage/index";
import { ComponentContext, RawRecipe, RecipeDefaults, RecipeURLImporter } from "@thymesave/core";
import { HowToStep, Recipe, WithContext } from "schema-dts";

export class GenericHomepageImporter extends RecipeURLImporter {
  public override getName(languageCode: string): string {
    return resourceBundle.getTranslation(languageCode, `${this.identifier}.name`);
  }

  private parseRecipeJsonSchemas(document: Document): WithContext<Recipe>[] {
    return this.extractTextFromNodes(document.querySelectorAll("script[type='application/ld+json']"))
      .map(scriptContent => JSON.parse(scriptContent))
      .filter(schema => schema["@type"] == "Recipe") as WithContext<Recipe>[];
  }

  private convertRecipeInstructionsFromSchema(recipeSchema: Recipe): string[] {
    if (Array.isArray(recipeSchema.recipeInstructions)) {
      return (recipeSchema.recipeInstructions as HowToStep[])
        .filter(step => step["@type"] == "HowToStep" && step.text)
        .map(howtoStep => howtoStep.text!!.toString());
    } else {
      return (recipeSchema.recipeInstructions as string)
        .split("\n")
        .filter(instruction => instruction.trim().length > 0);
    }
  }

  private parseDescriptionFromElement(descriptionElement: HTMLMetaElement | undefined): string {
    if (descriptionElement?.textContent != "") {
      return descriptionElement?.textContent!!;
    }

    if (descriptionElement.content != "") {
      return descriptionElement.content;
    }

    return "";
  }

  private parseInstructionsFromDocument(document: Document): string[] {
    // we have clear structured instructions
    let instructions = this.extractTextFromNodes(document.querySelectorAll("[itemprop='recipeInstruction']"));
    if (instructions.length > 0) {
      return instructions;
    }

    // instructions are one text block, in worst case we have one big chunk of text
    // which is tried to be split on new line, if there are line breaks
    // if that also does not work it is split by dots indicating new sentences
    instructions = this.extractTextFromNodes(document.querySelectorAll("[itemprop='recipeInstructions']"));
    if (instructions.length > 0) {
      instructions = instructions
        .map(i => i.split("\n"))
        .flat();
      if(instructions.length == 1) {
        return instructions[0].split(/\.\b/);
      }
    }

    return [];
  }

  override async parseFromHTML(context: ComponentContext, rawHTML: string, url: URL): Promise<RawRecipe[]> {
    const document = this.createDocument(url, rawHTML);

    // Parse as ld+json
    const jsonMetaDataSchemas = this.parseRecipeJsonSchemas(document);
    if (jsonMetaDataSchemas.length > 0) {
      return Promise.all(jsonMetaDataSchemas.map(async recipeSchema => ({
        description: recipeSchema.description?.toString() ?? "",
        image: (recipeSchema.image ? await this.imageURLToBase64(recipeSchema.image!!.toString()) : undefined),
        ingredients: recipeSchema.recipeIngredient as string[],
        instructions: this.convertRecipeInstructionsFromSchema(recipeSchema),
        servings: recipeSchema.recipeYield ? parseInt(recipeSchema.recipeYield.toString()) : RecipeDefaults.SERVINGS,
        title: recipeSchema.name?.toString() ?? document.title,
      })));
    }

    // parse from html meta
    return [
      {
        description: this.parseDescriptionFromElement(document.querySelector("[itemprop='description']") as HTMLMetaElement | undefined),
        ingredients: this.extractTextFromNodes(document.querySelectorAll("[itemprop='recipeIngredient']")),
        instructions: this.parseInstructionsFromDocument(document),
        servings: RecipeDefaults.SERVINGS,
        title: document.title,
      },
    ];

  }

  public override get identifier(): string {
    return "GenericHomepageImporter";
  }
}
