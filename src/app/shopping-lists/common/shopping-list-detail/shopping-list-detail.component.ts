import { Component, Input, OnInit } from '@angular/core';
import { ShoppingList } from "@thymesave/core";

@Component({
  selector: 'app-shopping-list-detail',
  styleUrls: ['./shopping-list-detail.component.scss'],
  templateUrl: './shopping-list-detail.component.html',
})
export class ShoppingListDetailComponent {
  @Input() public list !: ShoppingList;

  constructor() {
  }

}
