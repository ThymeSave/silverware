import { Injectable } from '@angular/core';
import { Recipe, ShoppingListItem } from "@thymesave/core";
import { combineLatest, first, forkJoin } from "rxjs";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";
import { ShoppingListEntity } from "@/shopping-lists/services/shopping-list.service";

export interface ShoppingListItemEntity extends ShoppingListItem, BaseDocument {

}

@Injectable({
  providedIn: 'root',
})
export class ShoppingListItemService extends EntityService<ShoppingListItemEntity> {
  public constructor(storageService: StorageService) {
    super(storageService);
  }

  get entityType(): string {
    return "shopping-list-item";
  }

  public addRecipeToShoppingList(shoppingList: Partial<ShoppingListEntity>, recipe: Recipe) {
    const inserts = recipe.ingredients
      .map(ingredient => ({
        amount: ingredient.minAmount,
        done: false,
        ingredientKey: ingredient.translationKey,
        shoppingList: shoppingList.uuid!!,
        source: {
          source: recipe.title || '',
          type: "Recipe",
        },
        unit: ingredient.unit,
        uuid: this.generateUUID(),
      }))
      .map(entry => this.insert(entry as ShoppingListItemEntity));
    return combineLatest(inserts);
  }

  public getItems(shoppingList: Partial<ShoppingListEntity>) {
    return this.storageService.getAll(this.entityType,{
     'shoppingList': shoppingList.uuid,
    });
  }
}
