import { Component, Input, OnInit } from '@angular/core';
import { ShoppingList } from "@thymesave/core";
import { Observable } from "rxjs";

import { ShoppingListItemEntity, ShoppingListItemService } from "@/shopping-lists/services/shopping-list-item.service";

@Component({
  selector: 'app-shopping-list-detail',
  styleUrls: ['./shopping-list-detail.component.scss'],
  templateUrl: './shopping-list-detail.component.html',
})
export class ShoppingListDetailComponent {
  private _list !: ShoppingList;
  public items$ !: Observable<ShoppingListItemEntity[]>;

  @Input()
  public set list(val) {
    this._list = val;
    this.loadItems();
  }

  public get list() {
    return this._list;
  }

  constructor(private shoppingListItemService : ShoppingListItemService) {
  }

  private loadItems() {
     this.items$ = this.shoppingListItemService.getItems(this.list) as Observable<ShoppingListItemEntity[]>;
  }
}
