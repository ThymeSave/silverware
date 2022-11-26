import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from "@angular/forms";

import { ShoppingListFilterService } from "@/shopping-lists/services/shopping-list-filter.service";
import { ThymeSaveValidators } from "@/validators";

@Component({
  selector: 'app-shopping-list-ignore-item-settings',
  styleUrls: ['./shopping-list-ignore-item-settings.component.scss'],
  templateUrl: './shopping-list-ignore-item-settings.component.html',
})
export class ShoppingListIgnoreItemSettingsComponent {
  public addingItem: boolean = false;
  public filter$ = this.shoppingListFilterService.getFilter();
  public ignoreFormGroup = this.createFormGroup();

  public constructor(public shoppingListFilterService: ShoppingListFilterService,
                     private fb: FormBuilder) {
  }

  private createFormGroup() {
    return this.fb.group({
      ingredientKey: this.fb.control("", [Validators.required, ThymeSaveValidators.ingredientKey]),
    });

  }

  public trackByFn(index: any, item: string) {
    return item;
  }

  public removeIngredient(ingredientKey: string) {
    this.shoppingListFilterService.removeIgnore(ingredientKey)
      .subscribe(() => this.filter$ = this.shoppingListFilterService.getFilter());
  }

  public addIngredient() {
    this.addingItem = true;
    const ingredientToIgnore = this.ignoreFormGroup.getRawValue()['ingredientKey']!!;
    this.shoppingListFilterService.addIgnore(ingredientToIgnore)
      .subscribe(() => {
        this.filter$ = this.shoppingListFilterService.getFilter();
        this.ignoreFormGroup.reset();
        this.addingItem = false;
      });
  }
}
