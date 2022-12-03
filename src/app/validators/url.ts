import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validateURL(control: AbstractControl): ValidationErrors | null {
  try {
    new URL(control.value);
    return null;
  } catch (e) {
    return {forbiddenUrl: {value: control.value}};
  }
};
