import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { URLImporterPayload } from "@thymesave/core";

@Component({
  selector: 'app-url-importer-settings',
  styleUrls: ['./urlimporter-settings.component.scss'],
  templateUrl: './urlimporter-settings.component.html',
})
export class URLImporterSettingsComponent {
  public form = new FormGroup({
    url: new FormControl("", [Validators.required, this.urlValidator()]),
  });

  @Output() public saved = new EventEmitter<URLImporterPayload>();
  @Output() public canceled = new EventEmitter();

  private urlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      try {
        new URL(control.value);
        return null;
      } catch (e) {
        return {forbiddenUrl: {value: control.value}};
      }
    };
  }

  public save() {
    this.saved.emit(this.form.getRawValue() as URLImporterPayload);
  }

  public cancel() {
    this.canceled.emit();
  }

}
