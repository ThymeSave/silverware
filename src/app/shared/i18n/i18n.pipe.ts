import { Pipe, PipeTransform } from '@angular/core';
import { loadIngredientByKey, loadUITextByKey } from "@thymesave/translations";

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

  public transform(value: string, section ?: string): string {
    const lang = this.languageService.currentLanguage;
    switch (section) {
      case "ingredient":
        return loadIngredientByKey(lang, value, 1);
      case "ui":
      default:
        return loadUITextByKey(lang, value);
    }
  }
}
