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
import { map, Observable } from "rxjs";

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
        ingredient.minAmount = ingredient.minAmount == 0 ? "" : ingredient.minAmount;
        ingredient.maxAmount = ingredient.maxAmount == 0 ? "" : ingredient.maxAmount;
        return ingredient;
      } catch (e: any | IngredientParseError) {
        return propagateParseError(e);
      }
    });
  }

  private parseInstructions(raw: string[]): Instruction[] {
    return raw
      .map(text => ({
        text: text.trim(),
      }));
  }

  private parseUnit(unit: string) {
    const language = this.languageService.currentLanguage;
    const matches = matchUnitByText(language, unit, {});
    return matches.length > 0 ? matches[0].key : unit;
  }

  private parseRecipe(raw: RawRecipe): ParsedRecipe {
    return {
      description: raw.description?.trim(),
      image: raw.image,
      ingredients: this.parseIngredients(raw.ingredients),
      instructions: this.parseInstructions(raw.instructions),
      title: raw.title.trim(),
    };
  }

  /**
   * Finalize raw recipe information
   * @param raw
   */
  public finalize(raw: ParsedRecipe): Recipe {
    return {
      description: raw.description,
      image: raw.image,
      ingredients: raw.ingredients
        .map((i : any) => {
          console.log(i);
          const ingredient = loadIngredientByKey(i.translationKey);
          return {
            ...ingredient,
            isNumeric: !isNaN((i.minAmount ?? "") as number) && !isNaN((i.maxAmount ?? 0) as number),
            isRange: i.minAmount != i.maxAmount,
            maxAmount: i.maxAmount ?? i.minAmount,
            minAmount: i.minAmount,
            translationKey: i.translationKey,
            unit: i.unit,
          };
        }),
      instructions: raw.instructions,
      title: raw.title,
    };
  }

  public runRecipeImporter(importer: Importer<RawRecipe>, payload: ImporterPayload) : Observable<ParsedRecipe[]> {
    return importer.import(this.contextService.createContext(), payload)
      .pipe(map(rawRecipes => rawRecipes.map(rawRecipe => this.parseRecipe(rawRecipe))));
  }
}
