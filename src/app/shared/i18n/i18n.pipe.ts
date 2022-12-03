import { Pipe, PipeTransform } from '@angular/core';
import {
  Language,
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
  public constructor(private languageService: LanguageService) {
  }

  public transform(value: string, section ?: keyof Language, amount ?: number | string): string {
    return this.languageService.localize(value, section, amount);
  }
}
