import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { URLImporterPayload } from "@thymesave/core";

import { ThymeSaveValidators } from "@/validators";

@Component({
  selector: 'app-url-importer-settings',
  styleUrls: ['./urlimporter-settings.component.scss'],
  templateUrl: './urlimporter-settings.component.html',
})
export class URLImporterSettingsComponent {
  public form = new FormGroup({
    url: new FormControl("", [Validators.required, ThymeSaveValidators.url]),
  });

  @Output() public saved = new EventEmitter<URLImporterPayload>();
  @Output() public canceled = new EventEmitter();

  public save() {
    this.saved.emit(this.form.getRawValue() as URLImporterPayload);
  }

  public cancel() {
    this.canceled.emit();
  }

}
