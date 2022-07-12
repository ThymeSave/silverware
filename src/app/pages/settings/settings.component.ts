import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LanguageService } from "../../shared/i18n/language.service";
import { SettingsService } from "../../settings/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  settingsForm = new FormGroup({
    language: new FormControl(""),
  })

  constructor(private languageService: LanguageService,
              public settingsService: SettingsService) {
  }

  public get availableLanguages() {
    return this.languageService.availableLanguages;
  }

  public get languageIcons() {
    return this.languageService.languageIcons;
  }

  ngOnInit() {
    this.settingsService.settings$?.subscribe(settings => {
      this.settingsForm.patchValue({
        language: settings!!.language,
      })
    })
  }

  getDirtyValues() {
    const form: any = this.settingsForm;
    let dirtyValues: any = {};

    Object.keys(form.controls)
      .forEach(key => {
        let currentControl = form.controls[key];

        if (currentControl.dirty) {
          if (currentControl.controls)
            // @ts-ignore
            dirtyValues[key] = this.getDirtyValues(currentControl);
          else
            dirtyValues[key] = currentControl.value;
        }
      });

    return dirtyValues;
  }

  save() {
    const dirty = this.getDirtyValues()

    if (dirty.language) {
      this.settingsService.setLanguage(this.settingsForm.getRawValue().language!!)
      location.reload()
    }
  }
}
