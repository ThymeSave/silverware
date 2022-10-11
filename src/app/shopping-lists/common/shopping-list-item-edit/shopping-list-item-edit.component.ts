import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ShoppingListItem } from "@thymesave/core";

import { LanguageService } from "@/shared/i18n/language.service";
import {
  GroupedShoppingListItems,
  ShoppingListItemEntity,
  ShoppingListItemService,
} from "@/shopping-lists/services/shopping-list-item.service";

@Component({
  selector: 'app-shopping-list-item-edit',
  styleUrls: ['./shopping-list-item-edit.component.scss'],
  templateUrl: './shopping-list-item-edit.component.html',
})
export class ShoppingListItemEditComponent {

  public get items() {
    return this.group.items
      .filter(i => i.amount !== -1);
  }

  public get fromRecipes(): ShoppingListItemEntity[] {
    return this.items
      .filter(i => i.source.type == 'Recipe');
  }

  public get fromManual(): ShoppingListItemEntity[] {
    return this.items
      .filter(i => i.source.type == 'Manual');
  }

  constructor(@Inject(MAT_DIALOG_DATA) public group: GroupedShoppingListItems,
              private shoppingListItemService: ShoppingListItemService,
              private languageService: LanguageService) {
  }

  public addManualItem() {
    this.group.items.push({
      amount: undefined,
      created: new Date(),
      done: false,
      ingredientKey: this.group.ingredientKey, shoppingList: this.group.items[0].shoppingList,
      source: {
        source: this.languageService.localize("shopping_lists.source.manual.default_value", "ui"),
        type: 'Manual',
      },
      unit: this.group.unit ?? undefined,
      uuid: "",
    });
  }

  public markAsDelete(item: ShoppingListItem) {
    return item.amount = -1;
  }
}
