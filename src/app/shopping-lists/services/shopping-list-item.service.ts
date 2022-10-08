import { Injectable } from '@angular/core';
import { Recipe, ShoppingListItem, ShoppingListItemSource } from "@thymesave/core";
import { chain, groupBy, uniqBy } from "lodash";
import { combineLatest } from "rxjs";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";
import { ShoppingListEntity } from "@/shopping-lists/services/shopping-list.service";

export interface ShoppingListItemEntity extends ShoppingListItem, BaseDocument {

}

export interface GroupedShoppingListItems {
  ingredientKey: string
  unit: string | null
  items: ShoppingListItemEntity[]
  sum: number
  sources : ShoppingListItemSource[]
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
    return this.storageService.getAll(this.entityType, {
      'shoppingList': shoppingList.uuid,
    });
  }

  public groupByIngredientAndUnit(items: ShoppingListItemEntity[]): GroupedShoppingListItems[] {
    return chain(items)
      .groupBy(item => item.ingredientKey)
      .map((items, ingredientKey) => {
        return {
          ingredientKey,
          perUnit: groupBy(items, item => item.unit),
        };
      })
      .map((items, ingredientKey) => {
        let results = [];
        for (let unit in items.perUnit) {
          const itemsPerUnit = items.perUnit[unit];
          results.push({
            ingredientKey: items.ingredientKey,
            items: itemsPerUnit,
            sources: uniqBy(itemsPerUnit
              .map(item => item.source)
              .slice(0, 3),source => source.source),
            sum: itemsPerUnit
              .map(item => item.amount)
              .reduce((a, b) => a!! + b!!)!!,
            // lodash converts null value to string -> convert back to null since we don't want to display a unit
            unit: unit == "null" ? null : unit,
          });
        }
        return results;
      })
      .flatten()
      .sort()
      .value();
  }
}
