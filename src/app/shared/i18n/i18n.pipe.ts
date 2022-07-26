import { Pipe, PipeTransform } from '@angular/core';
import {
  loadIngredientByKey,
  loadUITextByKey,
  loadIngredientCategoryByKey,
  Language,
  loadUnitByKey,
} from "@thymesave/translations";

import { LanguageService } from "./language.service";

/**
 * Replace translation key with actual translation of the currently used language
 */
@Pipe({
  name: 'i18n',
  pure: false,
})
export class I18nPipe implements PipeTransform {
  constructor(private languageService: LanguageService) {
  }

  public transform(value: string, section ?: keyof Language, amount ?: number): string {
    const lang = this.languageService.currentLanguage;
    switch (section) {
      case "ingredients":
        return loadIngredientByKey(lang, value, amount ?? 1);

      case "ingredientCategory":
        return loadIngredientCategoryByKey(lang, value);

      case "units":
        return loadUnitByKey(lang, value, amount ?? 1).short;

      case "ui":
      default:
        return loadUITextByKey(lang, value);
    }
  }
}
