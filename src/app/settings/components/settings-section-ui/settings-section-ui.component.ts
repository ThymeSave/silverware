import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import { SettingsService } from "@/settings/settings.service";
import { LanguageService } from "@/shared/i18n/language.service";
import { StorageService } from "@/shared/storage/storage.service";

@Component({
  selector: 'app-settings-section-ui',
  styleUrls: ['./settings-section-ui.component.scss'],
  templateUrl: './settings-section-ui.component.html',
})
export class SettingsSectionUiComponent implements OnInit {
  public settingsForm = new FormGroup({
    language: new FormControl(""),
  });

  public constructor(private languageService: LanguageService,
                     public settingsService: SettingsService,
                     private storageService: StorageService) {
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

  public ngOnInit() {
    this.settingsService.settings$?.subscribe(settings => {
      this.settingsForm.patchValue({
        language: settings!!.language,
      });
    });
  }

  public save() {
    const dirty = this.getDirtyValues();

    if (dirty.language) {
      this.settingsService.setLanguage(this.settingsForm.getRawValue().language!!)
        .subscribe((_ => location.reload()));
    }
  }

  public get availableLanguages() {
    return this.languageService.availableLanguages;
  }

  public get languageIcons() {
    return this.languageService.languageIcons;
  }
}
