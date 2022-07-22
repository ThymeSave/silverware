import { Injectable } from '@angular/core';
import { Ingredient } from "@thymesave/core";
import { ingredients } from "@thymesave/ingredients";
import { flatMap, chain } from "lodash";

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private readonly _grouped;

  constructor() {
    this._grouped = chain(flatMap(this.allKeys, (entry) => ({name: entry, ...this.all[entry]})))
      .groupBy("category")
      .map((items, key) => ({
        name: key,
        ingredients: items,
      }))
      .value();
  }

  public get all(): { [key: string]: Ingredient } {
    return ingredients;
  }

  public get allKeys() {
    return Object.keys(ingredients);
  }

  public get groupedByCategory() {
    return this._grouped;
  }
}
