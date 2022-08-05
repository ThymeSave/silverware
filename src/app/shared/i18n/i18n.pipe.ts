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

  public transform(value: string, section ?: keyof Language, amount ?: number | string): string {
    const lang = this.languageService.currentLanguage;
    const amountToUse = isNaN(amount as any) ? 1 : parseFloat(amount as any);
    switch (section) {
      case "ingredients":
        return loadIngredientByKey(lang, value, amountToUse);

      case "ingredientCategory":
        return loadIngredientCategoryByKey(lang, value);

      case "units":
        return loadUnitByKey(lang, value, amountToUse).short;

      case "ui":
      default:
        return loadUITextByKey(lang, value);
    }
  }
}
