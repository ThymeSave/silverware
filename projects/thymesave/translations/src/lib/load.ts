import { UnitIdentifier } from "@thymesave/core";

import { en_US } from "./languages";
import { Language, ResolvedUnitTranslation, UnitTranslationDetail } from "./model";
import { pluralize } from "./util";

const DEFAULT_LANGUAGE = en_US;

const loadTranslationByKey = (language: Language, languageProperty: keyof Language, translationKey: UnitIdentifier | string): string | string[] | UnitTranslationDetail => {
  const languagePropertyValue = language[languageProperty];
  if (translationKey in languagePropertyValue) {
    return languagePropertyValue[translationKey as UnitIdentifier];
  }

  return DEFAULT_LANGUAGE[languageProperty][translationKey as UnitIdentifier] ?? translationKey;
};

/**
 *
 * @param language Language for the translation
 * @param translationKey Key of the translation
 * @param amount Amount of ingredients to get the translation for
 * @returns Ingredient text for translation key
 */
export const loadIngredientByKey = (language: Language, translationKey: string, amount: number = 1): string => {
  const translations = loadTranslationByKey(language, "ingredients", translationKey);

  // not found -> no array
  if (!Array.isArray(translations)) {
    return translationKey;
  }

  return pluralize(translations, amount);
};

/**
 *
 * @param language Language for the translation
 * @param translationKey Key of the translation
 * @returns UI text for translation key
 */
export const loadUITextByKey = (language: Language, translationKey: string): string => loadTranslationByKey(language, "ui", translationKey) as string;

/**
 *
 * @param language Language for the translation
 * @param translationKey Key of the translation
 * @returns Ingredient category text for translation key
 */
export const loadIngredientCategoryByKey = (language : Language, translationKey : UnitIdentifier) : string => loadTranslationByKey(language, "ingredientCategory", translationKey) as string;

/**
 *
 * @param language Language for the translation
 * @param translationKey Key of the translation
 * @param amount Amount of mass to get the translation for
 * @returns Unit text for translation key
 */
export const loadUnitByKey = (language: Language, translationKey: UnitIdentifier, amount: number = 1): ResolvedUnitTranslation => {
  const translation = loadTranslationByKey(language, "units", translationKey);

  // not found -> translation key
  if (typeof translation == "string") {
    return {
      long: translationKey,
      short: translationKey,
    };
  }

  const unitDetails = translation as UnitTranslationDetail;
  return {
    long: pluralize(unitDetails.long, amount),
    short: unitDetails.short,
  };
};
