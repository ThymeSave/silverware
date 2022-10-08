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
  sources: ShoppingListItemSource[]
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
        created: new Date(),
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

  /**
   * Get shopping list items grouped by ingredient and unit
   * @param items
   */
  public groupByIngredientAndUnit(items: ShoppingListItemEntity[]): GroupedShoppingListItems[] {
    return chain(items)
      // group by ingredient first
      .groupBy(item => item.ingredientKey)
      .map((rawItems, ingredientKey) => ({
        ingredientKey,
        perUnit: groupBy(rawItems, item => item.unit),
      }))
      // group by ingredient and unit
      .map(itemsByIngredient =>
        Object.entries(itemsByIngredient.perUnit)
          .map(([unit, items]) => this.mapEntryToGrouped(
            itemsByIngredient.ingredientKey,
            this.normalizeDictKeyToVal(unit),
            items,
          )),
      )
      .flatten()
      // make sure the order is always the same, where the newest is always on top of the list
      .sort((a, b) => b.earliestCreate.getTime() - a.earliestCreate.getTime())
      .value();
  }

  /**
   * Convert dict key from lodash to an actual value.
   *
   * In case the key value is undefined or null lodash stringifies it, which is not desired in some cases.
   * @param key Key to normalize
   * @private
   */
  private normalizeDictKeyToVal(key: string) {
    return key == "null" ? null : key;
  }

  private mapEntryToGrouped(ingredientKey: string, unit: string | null, items: ShoppingListItemEntity[]) {
    return {
      earliestCreate: new Date(Math.min(...items.map(item => new Date(item.created).getTime()))),
      ingredientKey: ingredientKey,
      items: items,
      sources: uniqBy(items
        .map(item => item.source)
        .slice(0, 3), source => source.source),
      sum: items
        .map(item => item.amount)
        .reduce((a, b) => a!! + b!!)!!,
      unit: unit,
    };
  }
}
