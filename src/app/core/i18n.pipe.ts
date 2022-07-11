import { Pipe, PipeTransform } from '@angular/core';
import { loadUITextByKey } from "@thymesave/translations"
import { LanguageService } from "../services/language.service";

@Pipe({
  name: 'i18n',
})
export class I18nPipe implements PipeTransform {

  constructor(private languageService: LanguageService) {
  }

  transform(value: string): string {
    console.log(value)
    return loadUITextByKey(this.languageService.userLanguage, value);
  }

}
