import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { loadUITextByKey } from "@thymesave/translations"
import { LanguageService } from "./language.service";
import { AsyncPipe } from "@angular/common";
import { map, switchMap } from "rxjs";

@Pipe({
  name: 'i18n',
  pure: false,
})
export class I18nPipe implements PipeTransform, OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(private languageService: LanguageService,
              private injector: Injector) {
    this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
  }

  transform(value: string): string  {
    return loadUITextByKey(this.languageService.currentLanguage, value)
  }

  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }
}
