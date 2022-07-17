import { Injectable } from '@angular/core';
import {
  Importer,
  RawRecipe,
  ImporterPayload,
  ComponentContext,
  Service,
  ParsedRecipe,
  Instruction,
} from "@thymesave/core";
import { parseIngredientInformation, IngredientParseError, propagateParseError } from "@thymesave/ingredients";
import { map } from "rxjs";

import { ContextService } from "@/shared/plugins/context.service";

@Injectable({
  providedIn: 'root',
})
export class RecipeImporterService {

  constructor(private contextService : ContextService) {
  }

  private parseIngredients(raw: string[]) {
    return raw.map(text => {
      try {
        return parseIngredientInformation(text);
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
