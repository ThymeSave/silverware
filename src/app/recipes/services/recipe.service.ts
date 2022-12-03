import { Injectable } from "@angular/core";
import { Recipe, RecipeDefaults } from "@thymesave/core";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";

export interface RecipeEntity extends Recipe, BaseDocument {

}

@Injectable({
  providedIn: 'root',
})
export class RecipeService extends EntityService<RecipeEntity> {
  public get entityType(): string {
    return "recipes";
  }

  public constructor(storageService: StorageService) {
    super(storageService);
  }

  public recalculateServings(recipe: Recipe, newServings: number) {
    const currentServings = recipe.servings ?? RecipeDefaults.SERVINGS;
    recipe.ingredients.forEach(ingredient => {
      if (!ingredient.scalable) {
        return;
      }
      if (ingredient.isNumeric) {
        ingredient.minAmount = ((ingredient.minAmount as number / currentServings) * newServings);
        if (ingredient.isRange) {
          ingredient.maxAmount = ((ingredient.maxAmount as number / currentServings) * newServings);
        }
      }
    });
    recipe.servings = newServings;
  }
}
