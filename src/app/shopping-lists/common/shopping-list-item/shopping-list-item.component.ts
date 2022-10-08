import { Component, Input, OnInit, Output } from '@angular/core';

import { GroupedShoppingListItems, ShoppingListItemEntity } from "@/shopping-lists/services/shopping-list-item.service";

@Component({
  selector: 'app-shopping-list-item',
  styleUrls: ['./shopping-list-item.component.scss'],
  templateUrl: './shopping-list-item.component.html',
})
export class ShoppingListItemComponent {
  @Input() public item !: GroupedShoppingListItems;
  @Input() public enableEdit : boolean = true;

  constructor() {
  }

}
