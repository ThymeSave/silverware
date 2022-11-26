import { Injectable } from '@angular/core';
import { Recipe, ShoppingListItem, ShoppingListItemSource } from "@thymesave/core";
import { chain, groupBy, sum, uniqBy } from "lodash";
import {
  merge,
  Observable,
  switchMap,
} from "rxjs";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";
import {
  ShoppingListAddDialogDataItem,
} from "@/shopping-lists/common/shopping-list-item-add/shopping-list-item-add.component";
import { ShoppingListFilterService } from "@/shopping-lists/services/shopping-list-filter.service";
import { ShoppingListEntity } from "@/shopping-lists/services/shopping-list.service";

export interface ShoppingListItemEntity extends ShoppingListItem, BaseDocument {

}

export interface GroupedShoppingListItems {
  ingredientKey: string
  unit: string | null
  items: ShoppingListItemEntity[]
  sum: number
  sources: ShoppingListItemSource[]
  done: boolean
  earliestCreate: Date
  doneSum: number
  openSum: number
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingListItemService extends EntityService<ShoppingListItemEntity> {
  public constructor(storageService: StorageService, private readonly shoppingListFilterService: ShoppingListFilterService) {
    super(storageService);
  }

  public get entityType(): string {
    return "shopping-list-item";
  }

  private setNewItemDefaults(shoppingListItem: Partial<ShoppingListItem>): ShoppingListItem {
    return {
      ...shoppingListItem,
      amount: shoppingListItem.amount || 1,
      created: new Date(),
      done: false,
      uuid: this.generateUUID(),
    } as ShoppingListItem;
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
      done: items.filter(item => item.done || false).length > 0,
      doneSum: sum(items
        .filter(i => i.done)
        .map(item => item.amount)),
      earliestCreate: new Date(Math.min(...items.map(item => new Date(item.created).getTime()))),
      ingredientKey: ingredientKey,
      items: items,
      openSum: sum(items
        .filter(i => !i.done)
        .map(item => item.amount)),
      sources: uniqBy(items
        .map(item => item.source)
        .slice(0, 3), source => source.source),
      sum: sum( items
        .map(item => item.amount)),
      unit: unit,
    } as GroupedShoppingListItems;
  }

  public addRecipeToShoppingList(shoppingList: Partial<ShoppingListEntity>, recipe: Recipe) {
    const shoppingListItems = recipe.ingredients
      .map(ingredient => this.setNewItemDefaults({
        amount: ingredient.isNumeric ? ingredient.minAmount as number : undefined,
        ingredientKey: ingredient.translationKey,
        shoppingList: shoppingList.uuid!!,
        source: {
          source: recipe.title || '',
          type: "Recipe",
        },
        unit: ingredient.unit ?? undefined,
      })) as ShoppingListItem[];

    return this.shoppingListFilterService.filterItems(shoppingListItems)
      .pipe(
        switchMap(items => items),
        switchMap(entity => this.insert(entity)),
      );
  }

  public getItems(shoppingList: Partial<ShoppingListEntity>) {
    return this.storageService.getAll<ShoppingListItemEntity>(this.entityType, {
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

  public addManualToShoppingList(shoppingList: Partial<ShoppingListEntity>, items: ShoppingListAddDialogDataItem[]): Observable<unknown> {
    const inserts = items
      .map(item => this.setNewItemDefaults({
        amount: item.amount,
        ingredientKey: item.ingredientKey,
        shoppingList: shoppingList.uuid!!,
        source: {
          source: item.text,
          type: 'Manual',
        },
        unit: item.unit,
      } as ShoppingListItem))
      .map(entity => this.insert(entity));

    return merge(...inserts);
  }
}
