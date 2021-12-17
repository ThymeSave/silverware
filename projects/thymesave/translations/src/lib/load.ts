import { en_US } from "./languages";

/**
 * Key value map for translations
 */
export type SingleValueTranslation = { [key: string]: string };

/**
 * Key value map for translations that can have multiple values, where the first is singular and the second is plural.
 * If the translation can not be pluralized only one value is returned
 */
export type PluralizableTranslation = { [key: string]: string[1] | string[2] };

/**
 * Structure for UnitTranslations elements
 */
interface UnitTranslationDetail {
  short: string
  long: string[]
}

/**
 * Key value map for unit translations
 */
export type UnitTranslation = { [key: string]: UnitTranslationDetail }

/**
 * Represents a localized and resolved translation
 */
export interface ResolvedUnitTranslation {
  /**
   * Short unit; in most cases this is the symbol
   */
  short : string
  /**
   * Long text, specific to the specified amount at resolution time
   */
  long : string
}

/**
 * Translations for a language
 */
export interface Language {
  ui: SingleValueTranslation,
  ingredients: PluralizableTranslation,
  units: UnitTranslation,
}

const DEFAULT_LANGUAGE = en_US

const loadTranslationByKey = (language: Language, languageProperty: keyof Language, translationKey: string): string | string[] | UnitTranslationDetail => {
  const languagePropertyValue = language[languageProperty];
  if (translationKey in languagePropertyValue) {
    return languagePropertyValue[translationKey];
  }

  return DEFAULT_LANGUAGE[languageProperty][translationKey] ?? translationKey;
}

const pluralize = (translations: string[], amount: number): string => {
  // only one value -> not pluralizable
  if (translations.length == 1) {
    return translations[0]
  }

  // Get singular or plural
  if (amount <= 1) {
    return translations[0]
  } else {
    return translations[1]
  }
}

/**
 *
 * @param {Language} language Language for the translation
 * @param {string} translationKey Key of the translation
 * @param {number} amount Amount of ingredients to get the translation for
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
 * @param {Language} language Language for the translation
 * @param {string} translationKey Key of the translation
 * @returns UI text for translation key
 */
export const loadUIByKey = (language: Language, translationKey: string): string => loadTranslationByKey(language, "ui", translationKey) as string;

/**
 *
 * @param {Language} language Language for the translation
 * @param {string} translationKey Key of the translation
 * @param {number} amount Amount of mass to get the translation for
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
