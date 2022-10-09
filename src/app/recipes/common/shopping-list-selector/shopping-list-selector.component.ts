import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ShoppingListEntity, ShoppingListService } from "@/shopping-lists/services/shopping-list.service";

export interface ShoppingListSelectorData {
  list: ShoppingListEntity | null
}

@Component({
  selector: 'app-shopping-list-selector',
  styleUrls: ['./shopping-list-selector.component.scss'],
  templateUrl: './shopping-list-selector.component.html',
})
export class ShoppingListSelectorComponent {
  public all$ = this.shoppingListService.getAll();

  constructor(private shoppingListService: ShoppingListService,
              @Inject(MAT_DIALOG_DATA) public data: ShoppingListSelectorData) {
  }

  public selectList(list: ShoppingListEntity) {
    this.data.list = list;
  }
}
