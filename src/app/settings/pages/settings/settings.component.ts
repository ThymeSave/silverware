import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from, switchMap } from "rxjs";

import { SettingsService } from "@/settings/settings.service";
import { LanguageService } from "@/shared/i18n/language.service";
import { StorageService } from "@/shared/storage/storage.service";

@Component({
  selector: 'app-settings',
  styleUrls: ['./settings.component.scss'],
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  settingsForm = new FormGroup({
    language: new FormControl(""),
  });

  constructor(private languageService: LanguageService,
              public settingsService: SettingsService,
              private storageService: StorageService) {
  }

  public get availableLanguages() {
    return this.languageService.availableLanguages;
  }

  public get languageIcons() {
    return this.languageService.languageIcons;
  }

  public ngOnInit() {
    this.settingsService.settings$?.subscribe(settings => {
      this.settingsForm.patchValue({
        language: settings!!.language,
      });
    });
  }

  private getDirtyValues() {
    const form: any = this.settingsForm;
    let dirtyValues: any = {};

    Object.keys(form.controls)
      .forEach(key => {
        let currentControl = form.controls[key];

        if (currentControl.dirty) {
          if (currentControl.controls) {
            // @ts-ignore
            dirtyValues[key] = this.getDirtyValues(currentControl);
          } else {
            dirtyValues[key] = currentControl.value;
          }
        }
      });

    return dirtyValues;
  }

  public save() {
    const dirty = this.getDirtyValues();

    if (dirty.language) {
      this.settingsService.setLanguage(this.settingsForm.getRawValue().language!!)
        .subscribe((_ => location.reload()));
    }
  }

  public dropDatabase() {
    this.storageService.db$
      .pipe(
        switchMap(db => from(db!!.allDocs().then(results => results.rows.map(row => Promise.resolve(db!!.remove(row.id, row.value.rev)))))),
        switchMap(promises => from(Promise.all(promises))),
      )
      .subscribe(_ => location.reload());
  }
}
