import { Component, Input, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from "@angular/forms";

import { IngredientService } from "@/recipes/services/ingredient.service";
import { LanguageService } from "@/shared/i18n/language.service";

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.html'],
})
export class IngredientSelectorComponent implements ControlValueAccessor {
  @Input() public selected: string | null = null;

  public onChange = (val: string) => {
  };
  private onTouched = () => {
  };

  public search : string = "";

  constructor(public ingredientService: IngredientService,
              @Optional() public ngControl ?: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    console.log(ingredientService.groupedByCategory);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.selected = obj;
  }
}
