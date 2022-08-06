import { Injectable } from '@angular/core';
import { createLogger } from "@helper/log";
import {
  Importer,
  RawRecipe,
  ImporterPayload,
  ParsedRecipe,
  Instruction, Recipe, ParsedRecipeIngredient,
} from "@thymesave/core";
import {
  parseIngredientInformation,
  IngredientParseError,
  propagateParseError,
  loadIngredientByKey,
} from "@thymesave/ingredients";
import { matchIngredientByText, matchUnitByText } from "@thymesave/translations";
import { first, intersectionWith } from "lodash";
import { map, Observable } from "rxjs";

import { LanguageService } from "@/shared/i18n/language.service";
import { ContextService } from "@/shared/plugins/context.service";

@Injectable({
  providedIn: 'root',
})
export class RecipeImporterService {

  private logger = createLogger("RecipeImporterService");

  constructor(private contextService: ContextService,
              private languageService: LanguageService) {
  }

  private findExactIngredientInText(text: string) {
    return first(Object.keys(this.languageService.currentLanguage.ingredients)
      .map(key => ({
        key,
        variants: this.languageService.currentLanguage.ingredients[key],
      }))
      .filter(i => i.variants
        .map(variant => text.includes(variant))
        .filter(includes => includes)
        .length > 0),
    )?.key;
  }

  private patchExactMatch(ingredient: ParsedRecipeIngredient, exactMatch: string) {
    this.logger.debug("Override", ingredient, exactMatch);
    ingredient.ingredient = exactMatch;
    ingredient.translationMatches = [
      {
        key: exactMatch,
        similarity: .99,
        variant: exactMatch,
      },
    ];
  }

  private parseIngredients(raw: string[]) {
    return raw
      .map(text => text.trim())
      .map(text => {
        try {
          let ingredient = parseIngredientInformation(text);
          ingredient.translationMatches = matchIngredientByText(this.languageService.currentLanguage, ingredient.ingredient, {});

          // In case we have no matches try to find one manually, also if we are uncertain if the match is correct
          // maybe we can find a more accurate one
          if (ingredient.translationMatches.length == 0 || ingredient.translationMatches.filter(tm => tm.similarity > 0.8).length == 0) {
            const exactMatch = this.findExactIngredientInText(text);

            // Found exact match -> map it
            if (exactMatch) {
              this.patchExactMatch(ingredient, exactMatch);
            }
          }

          if (ingredient.unit) {
            ingredient.unit = this.parseUnit(ingredient.unit);
          }

          ingredient.minAmount = ingredient.minAmount == 0 ? "" : ingredient.minAmount;
          ingredient.maxAmount = ingredient.maxAmount == 0 ? "" : ingredient.maxAmount;
          return ingredient;
        } catch (e: any | IngredientParseError) {
          this.logger.warn("Failed parsing", e);
          const fallbackIngredient = propagateParseError(e);
          // Try to find in failed parsing, maybe just malformed but ingredient still can be found
          const exactMatch = this.findExactIngredientInText(text);
          // Found exact match -> map it
          if (exactMatch) {
            this.patchExactMatch(fallbackIngredient, exactMatch);
          }
          return fallbackIngredient;
        }
      });
  }

  private parseInstructions(raw: string[]): Instruction[] {
    return raw
      .map(text => text.trim())
      .map(text => ({
        text: text,
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
      rawIngredients: raw.ingredients,
      rawInstructions: raw.instructions,
      servings: raw.servings,
      title: raw.title.trim(),
    };
  }

  private parseAmount(amount: string | number) {
    if (amount == 0 || amount == "0" || amount?.toString()?.trim() == "") {
      return "";
    }

    return amount;
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
          const ingredientInfo = loadIngredientByKey(i.translationKey);
          const minAmount = this.parseAmount(i.minAmount);
          const maxAmount = this.parseAmount(i.maxAmount);
          const isRange = maxAmount != "" && minAmount != maxAmount;

          return {
            ...ingredientInfo,
            isNumeric: minAmount != "" && !isNaN(minAmount as number) && ((maxAmount == "" && !isRange) || !isNaN(maxAmount as number)),
            isRange,
            maxAmount,
            minAmount,
            translationKey: i.translationKey,
            unit: i.unit,
          };
        }),
      instructions: raw.instructions,
      servings: raw.servings,
      title: raw.title,
    };
  }

  public runRecipeImporter(importer: Importer<RawRecipe>, payload: ImporterPayload): Observable<ParsedRecipe[]> {
    return importer.import(this.contextService.createContext(), payload)
      .pipe(map(rawRecipes => rawRecipes.map(rawRecipe => this.parseRecipe(rawRecipe))));
  }
}
