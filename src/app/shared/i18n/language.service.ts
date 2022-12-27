import { Injectable } from '@angular/core';
import { UnitIdentifier } from "@thymesave/core";
import {
  Language,
  Languages,
  loadIngredientByKey,
  loadIngredientCategoryByKey, loadUITextByKey,
  loadUnitByKey,
} from "@thymesave/translations";
import { BehaviorSubject, filter, map } from "rxjs";

import { SettingsService } from "@/settings/settings.service";

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languageSubject = new BehaviorSubject<Language | null>(null);

  public currentLanguageIdentifier = "";
  public currentLanguage = this.getLanguageByIdentifier(this.defaultLanguage);
  public readonly language$ = this.languageSubject
    .pipe(filter(v => !!v));

  public constructor(private settingsService: SettingsService) {
    this.settingsService.settings$
      .pipe(map(s => {
        this.currentLanguageIdentifier = s?.language!!;
        this.currentLanguage = this.getLanguageByIdentifier(this.currentLanguageIdentifier);
        this.languageSubject.next(this.currentLanguage);
        return this.currentLanguage;
      }))
      .subscribe();
  }

  /**
   * Get country icons for each supported language
   */
  public get languageIcons(): Record<string, string> {
    return {
      'de_DE': "🇩🇪",
      'en_US': "🇺🇸",
    };
  }

  public get angularLocale() {
    switch (this.currentLanguageIdentifier) {
      case "de_DE":
        return "de";

      case "en_US":
      default:
        return "en-US";
    }
  }

  /**
   * Get language as configured by user, in case the notation is with a region the language part is returned
   * @private
   */
  private static get browserLanguage(): string {
    return (navigator.language || (navigator as any).userLanguage).split("-")[0];
  }

  /**
   * Get default language as configured by browser of fallback to english in case the language is not supported yet
   */
  public get defaultLanguage(): string {
    const browserLanguage = LanguageService.browserLanguage;
    return this.availableLanguages.find(lang => lang.includes(browserLanguage)) ?? "en_EN";
  }

  /**
   * Get language and all translations by idenifier
   * @param identifier Language identifier
   */
  public getLanguageByIdentifier(identifier: string): Language {
    return (Languages as any)[identifier] as Language;
  }

  /**
   * Return all identifiers of available languages
   */
  public get availableLanguages() {
    return Object.keys(Languages);
  }

  public localize(value: string, section ?: keyof Language, amount ?: number | string) {
    const lang = this.currentLanguage;
    const amountToUse = isNaN(amount as any) ? 1 : parseFloat(amount as any);
    switch (section) {
      case "ingredients":
        return loadIngredientByKey(lang, value, amountToUse);

      case "ingredientCategory":
        return loadIngredientCategoryByKey(lang, value as UnitIdentifier);

      case "units":
        return loadUnitByKey(lang, value as UnitIdentifier, amountToUse).short;

      case "ui":
      default:
        return loadUITextByKey(lang, value);
    }
  }
}
