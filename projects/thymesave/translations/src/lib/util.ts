export const pluralize = (translations: string[], amount: number): string => {
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
