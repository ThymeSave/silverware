import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";

import { PreFilterFunction } from "@/recipes/common/ingredient-selector/ingredient-selector.component";

@Component({
  selector: 'app-parsed-recipe-editor-ingredient',
  styleUrls: ['./parsed-recipe-editor-ingredient.component.scss'],
  templateUrl: './parsed-recipe-editor-ingredient.component.html',
})
export class ParsedRecipeEditorIngredientComponent implements OnInit {

  @Input() public formGroup !: FormGroup;
  @Output() public deleted = new EventEmitter<void>();

  public filterByTranslationMatches = true;
  public preFilter !: PreFilterFunction;

  constructor() {
  }

  public ngOnInit() {
    this.createPreFilter();
  }

  public emitDelete() {
    this.deleted.emit();
  }

  public get translationMatches() {
    return this.formGroup.controls['translationMatches'] as FormArray;
  }

  public get min() {
    return this.formGroup.controls["minAmount"] as FormControl;
  }

  public get max() {
    return this.formGroup.controls["maxAmount"] as FormControl;
  }

  public get hasTranslationMatches() {
    return this.translationMatches.length > 0;
  }

  private createPreFilter() {
    if (this.filterByTranslationMatches && this.hasTranslationMatches) {
      this.preFilter = (i) => this.translationMatches.value.indexOf(i.name) !== -1;
    } else {
      this.preFilter = _ => true;
    }
  }

  public toggleTranslationMatchButton() {
    if(!this.hasTranslationMatches) {
      return;
    }

    this.filterByTranslationMatches = !this.filterByTranslationMatches;
    this.createPreFilter();
  }
}
