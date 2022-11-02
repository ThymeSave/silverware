import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { LanguageService } from "@/shared/i18n/language.service";
import { createMobileBreakpointObserver } from "@/shared/util/breakpoint";

export interface ShoppingListAddDialogDataItem {
  text: string
  unit ?: string
  ingredientKey: string
  amount: number
}

export interface ShoppingListAddDialogData {
  items: ShoppingListAddDialogDataItem[]
}

@Component({
  selector: 'app-shopping-list-item-add',
  styleUrls: ['./shopping-list-item-add.component.scss'],
  templateUrl: './shopping-list-item-add.component.html',
})
export class ShoppingListItemAddComponent {
  public form = this.fb.array([
    this.createItem(),
  ]);

  public isMobile$ = createMobileBreakpointObserver(this.breakPointObserver);

  private createItem() {
    return this.fb.group({
      amount: this.fb.control(null, [Validators.required]),
      ingredientKey: this.fb.control(null, Validators.required),
      text: this.fb.control(this.languageService.localize("shopping_lists.source.manual.default_value", "ui"), [Validators.required]),
      unit: this.fb.control(null),
    });
  }

  constructor(private fb: FormBuilder,
              private breakPointObserver: BreakpointObserver,
              private languageService : LanguageService,
              @Inject(MAT_DIALOG_DATA) public data: ShoppingListAddDialogData) {
    this.form.valueChanges
      .subscribe(() => {
        this.data.items = this.form.getRawValue() as unknown as ShoppingListAddDialogDataItem[];
      });
  }

  public addItem() {
    this.form.push(this.createItem());
  }

  public removeItem(index : number) {
    this.form.removeAt(index);
  }
}
