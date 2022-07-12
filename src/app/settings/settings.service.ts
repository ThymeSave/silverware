import { Injectable } from '@angular/core';
import { StorageService } from "../shared/storage/storage.service";
import { Settings } from "./settings";
import { BehaviorSubject, filter, map, Observable } from "rxjs";
import { AuthService } from "@auth0/auth0-angular";

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settingsSubject = new BehaviorSubject<Settings | null>(null);
  settings$ = this.settingsSubject
    .asObservable()
    .pipe(filter(s => !!s))

  constructor(private storageService: StorageService,
              private authService: AuthService) {
    this.storageService.db$.pipe(
      map(() =>
        this.storageService.getLatest("settings", "default")
          .pipe(map(s => this.settingsSubject.next(s as Settings)))
          .subscribe(),
      )).subscribe()
  }

  public setLanguage(lang: string) {
    this.storageService.upsert("settings", "default", doc => {

      (doc as any).language = lang
      return doc
    }).subscribe()
  }
}
