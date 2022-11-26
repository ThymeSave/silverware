import { Injectable } from '@angular/core';
import { Ingredient } from "@thymesave/core";
import { ingredients } from "@thymesave/ingredients";
import { loadIngredientByKey } from "@thymesave/translations";
import { flatMap, chain } from "lodash";
import { startWith, Subject } from "rxjs";

import { LanguageService } from "@/shared/i18n/language.service";
import { Notification } from "@/shared/notifications/notification.service";

export type FlattenedIngredient = { category: string, scalable: boolean, name: string, localized: string }
export type IngredientsGroupedByCategory = { name: string, ingredients: FlattenedIngredient[] }[]
export type FrozenIngredientsGroupedByCategory = readonly { name: string, ingredients: FlattenedIngredient[] }[]

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private _grouped !: IngredientsGroupedByCategory;
  private groupedSubject = new Subject<FrozenIngredientsGroupedByCategory>();
  public grouped$ = this.groupedSubject.asObservable();

  public constructor(private languageService: LanguageService) {
    languageService.language$
      .pipe(startWith(languageService.currentLanguage))
      .subscribe((lang) => {
        this._grouped = chain(flatMap(this.allKeys, (entry) => ({
          localized: this.localize(entry, 1),
          name: entry,
          ...this.all[entry],
        })))
          .groupBy("category")
          .map((items, key) => Object.freeze({
            ingredients: items,
            name: key,
          }))
          .value();
        this.groupedSubject.next(this._grouped);
      });

  }

  public get all(): { [key: string]: Ingredient } {
    return ingredients;
  }

  public localize(translationKey: string, amount: number = 1) {
    return loadIngredientByKey(this.languageService.currentLanguage, translationKey, amount);
  }

  public get allKeys() {
    return Object.freeze(Object.keys(ingredients));
  }

  public get groupedByCategory(): FrozenIngredientsGroupedByCategory {
    return Object.freeze(this._grouped);
  }
}
