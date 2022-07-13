import { Injector, Pipe, PipeTransform } from '@angular/core';
import { loadUITextByKey } from "@thymesave/translations";

import { LanguageService } from "./language.service";

/**
 * Replace translation key with actual translation of the currently used language
 */
@Pipe({
  name: 'i18n',
  pure: false,
})
export class I18nPipe implements PipeTransform {
  constructor(private languageService: LanguageService,
              private injector: Injector) {
  }

  public transform(value: string): string  {
    return loadUITextByKey(this.languageService.currentLanguage, value);
  }
}
