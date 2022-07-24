import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from "@angular/forms";

import { PreFilterFunction } from "@/recipes/common/ingredient-selector/ingredient-selector.component";

@Component({
  selector: 'app-parsed-recipe-editor-ingredient',
  templateUrl: './parsed-recipe-editor-ingredient.component.html',
  styleUrls: ['./parsed-recipe-editor-ingredient.component.scss'],
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

  public get hasTranslationMatches() {
    return this.translationMatches.length > 1;
  }

  private createPreFilter() {
    if (this.filterByTranslationMatches) {
      this.preFilter = (i) => this.translationMatches.value
        .filter((tm: string) => tm == i.localized)
        .length > 0;
    } else {
      this.preFilter = _ => true;
    }
  }

  public toggleTranslationMatchButton() {
    this.filterByTranslationMatches = !this.filterByTranslationMatches;
    this.createPreFilter();
  }
}
