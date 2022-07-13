import { Injectable } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { BehaviorSubject, Observable, filter, map } from "rxjs";

import { Settings } from "./settings";
import { StorageService } from "@/shared/storage/storage.service";

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly settingsSubject = new BehaviorSubject<Settings | null>(null);
  public readonly settings$ = this.settingsSubject
    .asObservable()
    .pipe(filter(s => !!s));

  constructor(private storageService: StorageService,
              private authService: AuthService) {
    this.storageService.db$.pipe(
      map(() =>
        this.storageService.getLatest<Settings>("settings", "default")
          .pipe(map(s => this.settingsSubject.next(s as Settings)))
          .subscribe(),
      )).subscribe();
  }

  public setLanguage(lang: string) : Observable<any> {
    return this.storageService.upsert<Settings>("settings", "default", doc => {
      doc.language = lang;
      return doc;
    });
  }
}
