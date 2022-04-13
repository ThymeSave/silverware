import { en_US } from "./languages";
import { Language, ResolvedUnitTranslation, UnitTranslationDetail } from "./model";
import { pluralize } from "./util";

const DEFAULT_LANGUAGE = en_US

const loadTranslationByKey = (language: Language, languageProperty: keyof Language, translationKey: string): string | string[] | UnitTranslationDetail => {
  const languagePropertyValue = language[languageProperty];
  if (translationKey in languagePropertyValue) {
    return languagePropertyValue[translationKey];
  }

  return DEFAULT_LANGUAGE[languageProperty][translationKey] ?? translationKey;
}

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

  return pluralize(translations, amount)
}

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
 * @param amount Amount of mass to get the translation for
 * @returns Unit text for translation key
 */
export const loadUnitByKey = (language: Language, translationKey: string, amount: number = 1): ResolvedUnitTranslation => {
  const translation = loadTranslationByKey(language, "units", translationKey);

  // not found -> translation key
  if (typeof translation == "string") {
    return {
      short: translationKey,
      long: translationKey
    };
  }

  const unitDetails = translation as UnitTranslationDetail;
  return {
    short: unitDetails.short,
    long: pluralize(unitDetails.long, amount)
  };
}
