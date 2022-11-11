import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, switchMap, catchError, throwError } from "rxjs";

import { Settings } from "./settings";
import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";

export interface SettingsEntity extends BaseDocument, Settings {

}

@Injectable({
  providedIn: 'root',
})
export class SettingsService extends EntityService<SettingsEntity> {
  private readonly settingsSubject = new BehaviorSubject<Settings | null>(null);
  public readonly settings$ = this.settingsSubject
    .asObservable()
    .pipe(filter(s => !!s));

  public get entityType(): string {
    return "settings";
  }

  public constructor(storageService: StorageService) {
    super(storageService);
    this.onDatabaseAvailable(() =>
      this.getSettings()
        .pipe(map(s => this.settingsSubject.next(s as Settings)))
        .subscribe(),
    );
  }

  private createDefaultSettings() {
    return this
      .insert({
        language: 'en_US',
      }, "default")
      .pipe(
        switchMap(() => this.getLatest("default")),
      );
  }

  private getSettings() {
    return this
      .getLatest("default")
      .pipe(
        catchError(e => {
          if ('name' in e) {
            return this.createDefaultSettings();
          } else {
            return throwError(e);
          }
        }),
      );
  }

  public setLanguage(lang: string): Observable<any> {
    return this.upsert("default", doc => {
      doc.language = lang;
      return doc;
    });
  }
}
