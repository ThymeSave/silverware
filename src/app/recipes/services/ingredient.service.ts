import { Injectable } from '@angular/core';
import { Ingredient } from "@thymesave/core";
import { ingredients } from "@thymesave/ingredients";
import { loadIngredientByKey } from "@thymesave/translations";
import { flatMap, chain } from "lodash";

import { LanguageService } from "@/shared/i18n/language.service";

export type FlattenedIngredient = { category: string, scalable: boolean, name: string, localized: string }
export type IngredientsGroupedByCategory = { name: string, ingredients: FlattenedIngredient[] }[]

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private readonly _grouped: IngredientsGroupedByCategory;

  constructor(private languageService: LanguageService) {
    this._grouped = chain(flatMap(this.allKeys, (entry) => ({
      name: entry,
      localized: this.localize(entry, 1),
      ...this.all[entry],
    })))
      .groupBy("category")
      .map((items, key) => Object.freeze({
        name: key,
        ingredients: items,
      }))
      .value();
  }

  public get all(): { [key: string]: Ingredient } {
    return ingredients;
  }

  public localize(translationKey: string, amount: number = 1) {
    return loadIngredientByKey(this.languageService.currentLanguage, translationKey, amount);
  }

  public get allKeys() {
    return Object.freeze(Object.keys(ingredients));
  }

  public get groupedByCategory() {
    return Object.freeze(this._grouped);
  }
}
