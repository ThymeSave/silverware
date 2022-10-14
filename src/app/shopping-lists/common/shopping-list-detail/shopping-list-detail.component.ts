import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingList } from "@thymesave/core";
import { filter, map, Observable } from "rxjs";

import {
  GroupedShoppingListItems,
  ShoppingListItemService,
} from "@/shopping-lists/services/shopping-list-item.service";
import { ShoppingListService } from "@/shopping-lists/services/shopping-list.service";

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

  @Output() public deleted = new EventEmitter<void>();

  public get list() {
    return this._list;
  }

  constructor(private shoppingListItemService: ShoppingListItemService,
              private shoppingListService : ShoppingListService) {
    shoppingListItemService.changes$
      .pipe(filter(item => (item as any)._deleted || item.shoppingList == this._list.uuid ))
      .subscribe(_ => this.loadItems());
  }

  private loadItems() {
    this.items$ = this.shoppingListItemService.getItems(this.list)
      .pipe(map(items => this.shoppingListItemService.groupByIngredientAndUnit(items)));
  }

  public trackByFn(index: any, item: GroupedShoppingListItems) {
    return item.ingredientKey + "." + item.unit;
  }

  public deleteList() {
    this.shoppingListService.delete(this.list)
      .subscribe(() => this.deleted.next());
  }
}
