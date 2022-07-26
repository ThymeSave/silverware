import stringSimilarity from "string-similarity";

import { Language, PluralizableTranslation } from "./model";

const SIMILARITY_EXACT = 1;

const sortMatches = (a: Match, b: Match) => b.similarity - a.similarity;

/**
 * Represents a match from search
 */
export interface Match {
  /**
   * Technical key of translation
   */
  key: string
  /**
   * Textual translation variant
   */
  variant: string
  /**
   * Similarity between 0 and 1, where 1 is an exact match
   */
  similarity: number
}

/**
 * Options for matcher functions
 */
export interface MatchOptions {
  /**
   * Min similarity any occurrence must have, defaults to .5
   */
  minSimilarity?: Number

  /**
   * Maximal amount of matches to return, defaults to 10
   */
  maxMatches?: number
}

export type MatchSourceVariants = { [key: string]: string[] }

export const getSimilarity = (text1 : string, text2 : string) => Number(stringSimilarity.compareTwoStrings(text1, text2).toFixed(4));

/**
 * Find matches for all given variants and text.
 * This method contains base functionality for matching, sorting and filtering.
 * Matches are sorted by descending similarity.
 *
 * @param variants Variants to search in format technicalKey -> translation
 * @param text Text to match for
 * @param options Options to use for matching
 */
export const findMatches = (variants: MatchSourceVariants | PluralizableTranslation, text: string, options: MatchOptions): Match[] => {
  const minSimilarity = (options.minSimilarity ?? .3);
  const maxMatches = (options.maxMatches ?? 10);

  const keys = Object.keys(variants);
  const keyLength = keys.length;
  let matches: Match[] = [];

  for (let i = 0; i < keyLength; i++) {
    const key = keys[i];
    const variantsContents = variants[key];

    for (let j = 0; j < variantsContents.length; j++) {
      const variant = variantsContents[j];
      const similarity = getSimilarity(text, variant);

      if (similarity == SIMILARITY_EXACT) {
        return [
          {
            key,
            variant,
            similarity,
          },
        ];
      } else if (similarity >= minSimilarity) {
        matches.push({
          key,
          variant,
          similarity,
        });
      }
    }
  }

  return matches
    .sort(sortMatches)
    .slice(0, maxMatches);
};

/**
 * Match ingredient by textual representation
 *
 * @param language Language to use for lookup
 * @param text Text to match
 * @param options Options to use for matching
 */
export const matchIngredientByText = (language: Language, text: string, options: MatchOptions = {}) => findMatches(language.ingredients, text, options);

/**
 * Match unit by textual representation, this can be the symbol, short or long text.
 *
 * @param language Language to use for lookup
 * @param text Text to match
 * @param options Options to use for matching
 */
export const matchUnitByText = (language: Language, text: string, options: MatchOptions = {}) => {
  const keys = Object.keys(language.units);
  const keyLength = keys.length;
  const variants: MatchSourceVariants = {};

  for (let i = 0; i < keyLength; i++) {
    const key = keys[i];
    const unit = language.units[key];

    variants[key] = [
      unit.short,
      ...unit.long,
    ];
  }

  return findMatches(variants, text, options);
};
