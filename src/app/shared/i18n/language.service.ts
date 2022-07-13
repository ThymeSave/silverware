import { Injectable } from '@angular/core';
import { Language, Languages } from "@thymesave/translations";
import { BehaviorSubject, filter, map} from "rxjs";

import { SettingsService } from "@/settings/settings.service";

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public currentLanguageIdentifier = "";
  public currentLanguage = Languages.en_US;

  private readonly languageSubject = new BehaviorSubject<Language | null>(null);
  public readonly language$ = this.languageSubject
    .pipe(filter(v => !!v));

  constructor(private settingsService : SettingsService) {
    this.settingsService.settings$
      .pipe(map(s => {
        this.currentLanguageIdentifier = s?.language!!;
        this.currentLanguage = ((Languages) as any)[this.currentLanguageIdentifier];
        return this.currentLanguage;
      }))
      .subscribe();
  }

  get languageIcons() : Record<string, string> {
    return {
      'de_DE': "🇩🇪",
      'en_US': "🇺🇸",
    };
  }

  get availableLanguages() {
    return Object.keys(Languages);
  }
}
