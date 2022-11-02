import { Component } from '@angular/core';
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { UnitTranslationDetail } from "@thymesave/translations";

import { LanguageService } from "@/shared/i18n/language.service";

@Component({
  selector: 'app-unit-selector',
  styleUrls: ['./unit-selector.component.scss'],
  templateUrl: './unit-selector.component.html',
})
export class UnitSelectorComponent implements ControlValueAccessor {
  public selected: UnitTranslationDetail | null = null;

  public onChange = (_: UnitTranslationDetail) => {
  };
  private onTouched = () => {
  };

  constructor(private languageService: LanguageService,
              public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public options = this.languageService.currentLanguage.units;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.selected = obj;
  }
}