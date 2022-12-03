import { Component } from '@angular/core';

import { ShoppingListFilterService } from "@/shopping-lists/services/shopping-list-filter.service";

@Component({
  selector: 'app-settings-section-shopping-list',
  styleUrls: ['./settings-section-shopping-list.component.scss'],
  templateUrl: './settings-section-shopping-list.component.html',
})
export class SettingsSectionShoppingListComponent {
  public filter$ = this.shoppingListFilterService.getFilter();
  public ingredientToIgnore !: string | null;

  public constructor(public shoppingListFilterService: ShoppingListFilterService) {
  }

  public addIngredient() {
    this.shoppingListFilterService.addIgnore(this.ingredientToIgnore!!)
      .subscribe(() => {
        this.filter$ = this.shoppingListFilterService.getFilter();
        this.ingredientToIgnore = "";
      });
  }
}
