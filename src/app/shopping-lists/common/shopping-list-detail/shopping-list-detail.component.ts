import { Component, Input } from '@angular/core';
import { ShoppingList } from "@thymesave/core";
import { filter, map, Observable } from "rxjs";

import {
  GroupedShoppingListItems, ShoppingListItemEntity,
  ShoppingListItemService,
} from "@/shopping-lists/services/shopping-list-item.service";

@Component({
  selector: 'app-shopping-list-detail',
  styleUrls: ['./shopping-list-detail.component.scss'],
  templateUrl: './shopping-list-detail.component.html',
})
export class ShoppingListDetailComponent {
  private _list !: ShoppingList;
  public items$ !: Observable<GroupedShoppingListItems[]>;

  @Input()
  public set list(val) {
    this._list = val;
    this.loadItems();
  }

  public get list() {
    return this._list;
  }

  constructor(private shoppingListItemService: ShoppingListItemService) {
    shoppingListItemService.changes$
      .pipe(filter(item => item.shoppingList == this._list.uuid))
      .subscribe(docs => this.loadItems());
  }

  private loadItems() {
    this.items$ = this.shoppingListItemService.getItems(this.list)
      .pipe(map(items => this.shoppingListItemService.groupByIngredientAndUnit(items)));
  }

  public trackByFn(index: any, item: GroupedShoppingListItems) {
    return item.ingredientKey + "." + item.unit;
  }
}
