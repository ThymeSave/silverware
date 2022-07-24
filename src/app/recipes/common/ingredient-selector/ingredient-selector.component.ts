import { Component, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";
import { MatAutocomplete, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { cloneDeep } from "lodash";
import { BehaviorSubject, debounce, merge, Observable, of, startWith, switchMap, tap, timer } from "rxjs";

import {
  IngredientsGroupedByCategory,
  IngredientService,
  FlattenedIngredient,
} from "@/recipes/services/ingredient.service";

export type PreFilterFunction = (ingredient: FlattenedIngredient) => boolean;

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.html'],
})
export class IngredientSelectorComponent implements ControlValueAccessor, OnInit {
  @Input() public selected: string | null = null;

  @ViewChild("matAutocomplete") private autocomplete !: MatAutocomplete;

  /**
   * Prefilter all ingredients by this function
   */
  @Input()
  @Optional()
  public set preFilter(value: PreFilterFunction | undefined) {
    if (value) {
      this._preFilter = value;
    }
    this.filterChanged.next(null);
  }

  private filterChanged = new BehaviorSubject(null);
  public filterChanged$ = this.filterChanged.asObservable();

  public searchControl = new FormControl("");

  public filteredOptions !: Observable<IngredientsGroupedByCategory>;

  public onChange = (_: string) => {
  };
  private onTouched = () => {
  };
  private _preFilter = (_: FlattenedIngredient) => true;

  private _allCopy = cloneDeep(this.ingredientService.groupedByCategory);

  constructor(public ingredientService: IngredientService,
              @Optional() public ngControl ?: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private filterIngredientBySearchTerm(ingredient: FlattenedIngredient, search: string) {
    return this._preFilter(ingredient) &&
      // TODO Replace with string distance match
      (search == "" || ingredient.name.includes(search));
  }

  private _filter(search: string) {
    return this._allCopy
      .map(category => {
        const ingredients = category.ingredients
          .filter(ingredient => this.filterIngredientBySearchTerm(ingredient, search))
          .slice(0, 20);
        return {...category, ingredients};
      })
      .filter(c => c.ingredients.length > 0);
  }

  public ngOnInit() {
    this.filteredOptions = merge(
      this.searchControl.valueChanges
        .pipe(
          debounce(() => timer(50)),
          startWith(""),
        ),
      this.filterChanged$)
      .pipe(
        switchMap(_ => of(this._filter(this.searchControl.value || ""))),
      );
  }

  public registerOnChange(changeCallback: any): void {
    this.onChange = changeCallback;
  }

  public registerOnTouched(touchCallback: any): void {
    this.onTouched = touchCallback;
  }

  public writeValue(translationKey: string): void {
    this.selected = translationKey;
    this.searchControl.setValue(this.ingredientService.localize(this.selected));
  }

  public localize(key: string) {
    return this.ingredientService.localize(key);
  }

  public createIngredientRenderer() {
    return (key: string) => this.localize(key);
  }

  public optionSelected(event: MatAutocompleteSelectedEvent) {
    this.onChange(event.option.value);
    this.onTouched();
  }
}
