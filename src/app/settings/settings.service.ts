import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map } from "rxjs";

import { Settings } from "./settings";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";

@Injectable({
  providedIn: 'root',
})
export class SettingsService extends EntityService<Settings> {
  private readonly settingsSubject = new BehaviorSubject<Settings | null>(null);
  public readonly settings$ = this.settingsSubject
    .asObservable()
    .pipe(filter(s => !!s));

  get entityType(): string {
    return "settings";
  }

  constructor(storageService: StorageService) {
    super(storageService);
    this.onDatabaseAvailable(() =>
      this.getLatest("default")
        .pipe(map(s => this.settingsSubject.next(s as Settings)))
        .subscribe(),
    );
  }

  public setLanguage(lang: string): Observable<any> {
    return this.upsert("default", doc => {
      doc.language = lang;
      return doc;
    });
  }
}
