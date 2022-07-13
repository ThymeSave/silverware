import { Injectable } from '@angular/core';
import { Language, Languages } from "@thymesave/translations";
import { BehaviorSubject, filter, map } from "rxjs";

import { SettingsService } from "@/settings/settings.service";

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public currentLanguageIdentifier = "";
  public currentLanguage = this.getLanguageByIdentifier(this.defaultLanguage);

  private readonly languageSubject = new BehaviorSubject<Language | null>(null);
  public readonly language$ = this.languageSubject
    .pipe(filter(v => !!v));

  constructor(private settingsService: SettingsService) {
    this.settingsService.settings$
      .pipe(map(s => {
        this.currentLanguageIdentifier = s?.language!!;
        this.currentLanguage = this.getLanguageByIdentifier(this.currentLanguageIdentifier)
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
    return (Languages as { [key: string]: Language })[identifier] as Language;
  }

  /**
   * Return all identifiers of available languages
   */
  public get availableLanguages() {
    return Object.keys(Languages);
  }
}
