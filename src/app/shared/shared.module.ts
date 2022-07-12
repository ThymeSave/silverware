import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nPipe } from "./i18n/i18n.pipe";
import { LanguageService } from "./i18n/language.service";

@NgModule({
  declarations: [
    I18nPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    I18nPipe,
  ],
  providers: [
    LanguageService,
  ],
})
export class SharedModule {
}
