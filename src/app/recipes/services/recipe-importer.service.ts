import { Injectable } from '@angular/core';
import {
  Importer,
  RawRecipe,
  ImporterPayload,
  ParsedRecipe,
  Instruction,
} from "@thymesave/core";
import { parseIngredientInformation, IngredientParseError, propagateParseError } from "@thymesave/ingredients";
import { matchUnitByText } from "@thymesave/translations";
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
        if (ingredient.unit)
          ingredient.unit = this.parseUnit(ingredient.unit);
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

  public runRecipeImporter(importer: Importer<RawRecipe>, payload: ImporterPayload) {
    return importer.import(this.contextService.createContext(), payload)
      .pipe(map(raw => this.parseRecipe(raw)));
  }
}
