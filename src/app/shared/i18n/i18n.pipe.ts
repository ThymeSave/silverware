import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { loadUITextByKey } from "@thymesave/translations"
import { LanguageService } from "./language.service";
import { map, switchMap } from "rxjs";

@Pipe({
  name: 'i18n',
  pure: false,
})
export class I18nPipe implements PipeTransform {
  constructor(private languageService: LanguageService,
              private injector: Injector) {
  }

  transform(value: string): string  {
    return loadUITextByKey(this.languageService.currentLanguage, value)
  }
}
