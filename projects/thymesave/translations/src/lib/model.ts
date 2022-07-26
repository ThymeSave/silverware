
/**
 * Key value map for translations
 */
export type SingleValueTranslation = { [key: string]: string };

/**
 * Key value map for translations that can have multiple values, where the first is singular and the second is plural.
 * If the translation can not be pluralized only one value is returned
 */
export type PluralizableTranslation = { [key: string]: string[] };

/**
 * Structure for UnitTranslations elements
 */
export interface UnitTranslationDetail {
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
  ingredientCategory : UnitTranslation,
  units: UnitTranslation,
}
