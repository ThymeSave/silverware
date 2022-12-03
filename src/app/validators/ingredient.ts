import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ingredients } from "@thymesave/ingredients";

import { IngredientService } from "@/recipes/services/ingredient.service";

export function validateIngredient(control: AbstractControl): ValidationErrors | null {
  const key = control.value;

  const isValid = key in ingredients;
  return isValid ? null : {'required': true};
}

export function validateTranslationKey(ingredientService: IngredientService) {
  return function (control: AbstractControl): ValidationErrors | null {
    const value = control.getRawValue();
    return ingredientService.allKeys.indexOf(value) == -1 ? {translationKey: false} : null;
  };
}
