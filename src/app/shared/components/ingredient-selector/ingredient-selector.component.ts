import { ChangeDetectorRef, Component, Input, OnInit, Optional, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from "@angular/forms";
import { MatAutocomplete, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { getSimilarity } from "@thymesave/translations";
import { cloneDeep } from "lodash";
import { BehaviorSubject, debounce, merge, Observable, of, startWith, switchMap, timer } from "rxjs";

import {
  IngredientsGroupedByCategory,
  IngredientService,
  FlattenedIngredient,
} from "@/recipes/services/ingredient.service";

export type PreFilterFunction = (ingredient: FlattenedIngredient) => boolean;

@Component({
  selector: 'app-ingredient-selector',
  styleUrls: ['./ingredient-selector.component.scss'],
  templateUrl: './ingredient-selector.component.html',
})
export class IngredientSelectorComponent implements ControlValueAccessor, OnInit {
  private filterChanged = new BehaviorSubject(null);
  private _allCopy = cloneDeep(this.ingredientService.groupedByCategory);

  @ViewChild("matAutocomplete") private autocomplete !: MatAutocomplete;

  @Input() public validateOnInit ?: boolean;
  @Input() public selected: string | null = null;

  @Input()
  @Optional()
  public set preFilter(value: PreFilterFunction | undefined) {
    if (value) {
      this._preFilter = value;
    }
    this.filterChanged.next(null);
  }

  @Input()
  @Optional()
  public set formParent(formParent: FormGroup | FormArray | undefined) {
    if (!formParent) {
      return;
    }
    this.searchControl.setParent(formParent);
  }

  public filterChanged$ = this.filterChanged.asObservable();
  public filteredOptions !: Observable<IngredientsGroupedByCategory>;
  public searchControl = new FormControl("", [Validators.required]);

  public constructor(public ingredientService: IngredientService,
              private ref: ChangeDetectorRef,
              @Optional() public ngControl ?: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private filterIngredientBySearchTerm(ingredient: FlattenedIngredient, search: string) {
    const similarity = getSimilarity(search, ingredient.localized);
    return this._preFilter(ingredient) &&
      (search == "" || similarity >= 0.5);
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

  private onTouched() {
  };

  private _preFilter(_: FlattenedIngredient) {
    return true;
  };

  public onChange(_: string) {
  };

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
    this.searchControl.valueChanges
      .subscribe(_ => this.onChange(this.searchControl.value ?? ""));

    if (this.validateOnInit) {
      this.searchControl.markAllAsTouched();
      this.ref.detectChanges();
    }
  }

  public registerOnChange(changeCallback: any): void {
    this.onChange = changeCallback;
  }

  public registerOnTouched(touchCallback: any): void {
    this.onTouched = touchCallback;
  }

  public writeValue(translationKey: string): void {
    if (this.ingredientService.allKeys.indexOf(translationKey) == -1) {
      this.selected = null;
      this.onChange("null");
      this.onTouched();
    }
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
