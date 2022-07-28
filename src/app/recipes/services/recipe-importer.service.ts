import { Injectable } from '@angular/core';
import {
  Importer,
  RawRecipe,
  ImporterPayload,
  ParsedRecipe,
  Instruction, Recipe,
} from "@thymesave/core";
import {
  parseIngredientInformation,
  IngredientParseError,
  propagateParseError,
  loadIngredientByKey,
} from "@thymesave/ingredients";
import { matchIngredientByText, matchUnitByText } from "@thymesave/translations";
import { map } from "rxjs";

import { LanguageService } from "@/shared/i18n/language.service";
import { ContextService } from "@/shared/plugins/context.service";

@Injectable({
  providedIn: 'root',
})
export class RecipeImporterService {

  constructor(private contextService: ContextService,
              private languageService: LanguageService) {
  }

  private parseIngredients(raw: string[]) {
    return raw.map(text => {
      try {
        const ingredient = parseIngredientInformation(text);
        if (ingredient.unit) {
          ingredient.unit = this.parseUnit(ingredient.unit);
        }
        ingredient.translationMatches = matchIngredientByText(this.languageService.currentLanguage, ingredient.ingredient, {});
        return ingredient;
      } catch (e: any | IngredientParseError) {
        return propagateParseError(e);
      }
    });
  }

  private parseInstructions(raw: string[]): Instruction[] {
    return raw
      .map(text => ({
        text,
      }));
  }

  private parseUnit(unit: string) {
    const language = this.languageService.currentLanguage;
    const matches = matchUnitByText(language, unit, {});
    return matches.length > 0 ? matches[0].key : unit;
  }

  private parseRecipe(raw: RawRecipe): ParsedRecipe {
    return {
      title: raw.title,
      description: raw.description,
      image: raw.image,
      ingredients: this.parseIngredients(raw.ingredients),
      instructions: this.parseInstructions(raw.instructions),
    };
  }

  /**
   * Finalize raw recipe information
   * @param raw
   */
  public finalize(raw: ParsedRecipe): Recipe {
    return {
      ingredients: raw.ingredients
        .map((i : any) => {
          console.log(i);
          const ingredient = loadIngredientByKey(i.translationKey);
          return {
            ...ingredient,
            translationKey: i.translationKey,
            unit: i.unit,
            minAmount: i.minAmount,
            maxAmount: i.maxAmount ?? i.minAmount,
            isNumeric: !isNaN((i.minAmount ?? "") as number) && !isNaN((i.maxAmount ?? 0) as number),
            isRange: i.minAmount != i.maxAmount,
          };
        }),
      instructions: raw.instructions,
      title: raw.title,
      description: raw.description,
      image: raw.image,
    };
  }

  public runRecipeImporter(importer: Importer<RawRecipe>, payload: ImporterPayload) {
    // TODO Always use all recipes
    return importer.import(this.contextService.createContext(), payload)
      .pipe(map(raw => this.parseRecipe(raw[0])));
  }
}
