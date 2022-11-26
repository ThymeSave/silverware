import { validateIngredient, validateTranslationKey } from "@/validators/ingredient";
import { validateURL } from "@/validators/url";

export const ThymeSaveValidators = {
  ingredientKey: validateIngredient,
  translationKey: validateTranslationKey,
  url: validateURL,
};
