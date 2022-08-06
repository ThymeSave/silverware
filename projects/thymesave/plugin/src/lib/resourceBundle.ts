export interface ResourceBundleTranslation extends LanguageResourceBundleTranslation {
  languageCode: string;
}

export interface LanguageResourceBundleTranslation {
  key: string;
  translation: string;
}

/**
 * Resource bundle to make storing key value pairs in your plugins easier
 */
export class ResourceBundle {
  private _contents = new Map<string, string>();

  /**
   * Fallback language code to use if no translation was found, it is expected this is always present.
   * @protected
   */
  protected readonly fallbackLanguage = "en_US";

  /**
   * Generate translation key for lookup
   * @param languageCode Code of the language
   * @param key Translation key
   * @private Key to access the translation from the resource bundle
   */
  private buildTranslationKey(languageCode: string, key: string) {
    return `translation.${languageCode}.${key}`;
  }

  /**
   * Add single translation to resource bundle
   * @param translation Translation to add
   */
  public addTranslation(translation: ResourceBundleTranslation) {
    this._contents.set(
      this.buildTranslationKey(translation.languageCode, translation.key),
      translation.translation,
    );
  }

  /**
   * Add multiple translations for a single language
   * @param languageCode Code of the language
   * @param translations Translations to add
   */
  public addTranslations(languageCode: string, translations: LanguageResourceBundleTranslation[]) {
    for (let translation of translations) {
      this.addTranslation({
        ...translation,
        languageCode,
      });
    }
  }

  /**
   * Get a translation for a given language and key.
   * If none can be found the fallbackLanguage is tried to lookup the key, which is expected to always return a result
   * @param languageCode Code of the language
   * @param key Translation key to load
   */
  public getTranslation(languageCode: string, key: string): string {
    return this._contents.get(this.buildTranslationKey(languageCode, key)) ??
      this._contents.get(this.buildTranslationKey(this.fallbackLanguage, key))!!;
  }

  /**
   * Create new fluent builder for resource bundle
   */
  public static builder() {
    return new ResourceBundleBuilder();
  }
}

/**
 * Fluent builder for resource bundles
 */
export class ResourceBundleBuilder {
  private resourceBundle = new ResourceBundle();

  /**
   * Add translations for given languages
   * @param translations Translations indexed by language code
   */
  public withTranslations(translations: { [languageCode: string]: LanguageResourceBundleTranslation[] }) {
    for (let languageCode in translations) {
      this.resourceBundle.addTranslations(languageCode, translations[languageCode]);
    }

    return this;
  }

  public build() {
    return this.resourceBundle;
  }
}
