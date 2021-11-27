import { en_US } from "./languages";

/**
 * Key value map for translations
 */
export type Translations = { [key: string]: string };

/**
 * Translations for a language
 */
export interface Language {
    ui: Translations,
    ingredients: Translations,
    units: Translations,
}

const DEFAULT_LANGUAGE = en_US

const loadTranslation = (language: Language, languageProperty: keyof Language, translationKey: string): string => {
    const languagePropertyValue = language[languageProperty];
    if (translationKey in languagePropertyValue) {
        return languagePropertyValue[translationKey];
    }

    return DEFAULT_LANGUAGE[languageProperty][translationKey] ?? translationKey;
}

/**
 *
 * @param {Language} language Language for the translation
 * @param {string} translationKey Key of the translation
 * @returns Ingredient text for translation key
 */
export const loadIngredient = (language: Language, translationKey: string): string => loadTranslation(language, "ingredients", translationKey);

/**
 *
 * @param {Language} language Language for the translation
 * @param {string} translationKey Key of the translation
 * @returns UI text for translation key
 */
export const loadUI = (language: Language, translationKey: string): string => loadTranslation(language, "ingredients", translationKey);

/**
 *
 * @param {Language} language Language for the translation
 * @param {string} translationKey Key of the translation
 * @returns Unit text for translation key
 */
export const loadUnit = (language: Language, translationKey: string): string => loadTranslation(language, "units", translationKey);
