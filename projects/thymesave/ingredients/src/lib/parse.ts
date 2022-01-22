import { RecipeIngredient } from "./model";

const REGEXP_AMOUNT_UNIT_WITHOUT_RANGE = new RegExp('^(\\d+|\\w+\\s)\\s{0,}(\\w+)\\s{1,}(.+)$');
const REGEXP_AMOUNT_UNIT_WITH_RANGE = new RegExp('^(\\w+)\\s{0,}-\\s{0,}(\\w+)\\s?(\\w+)\\s+(.+)$');
const REGEXP_AMOUNT_WITHOUT_UNIT = new RegExp('^(\\d+)\\b\\s(\\w+)$');

const isText = (val : string) => isNaN(val as any);
const convertToAmount = (val : string) => isText(val) ? val.trim() : parseFloat(val)

/**
 * Parse ingredient information from textual representation.
 * This <b>does not include</b> translations parsing!
 * @param raw Raw text
 */
export const parseIngredientInformation = (raw: string): RecipeIngredient => {
  raw = raw.trim();

  let matches = raw.match(REGEXP_AMOUNT_WITHOUT_UNIT);
  if (matches != null && matches.length == 3) {
    const amount = isText(matches[1]) ? matches[1] : parseFloat(matches[1])
    return {
      ingredient: matches[2],
      unit: null,
      isNumeric: true,
      isRange: false,
      minAmount: amount,
      maxAmount: amount
    }
  }

  matches = raw.match(REGEXP_AMOUNT_UNIT_WITHOUT_RANGE);
  if (matches != null && matches.length == 4) {
    const amount = convertToAmount(matches[1]);
    return {
      ingredient: matches[3],
      unit: matches[2],
      minAmount: amount,
      maxAmount: amount,
      isRange: false,
      isNumeric: isText(matches[1])
    };
  }

  matches = raw.match(REGEXP_AMOUNT_UNIT_WITH_RANGE);
  if (matches != null && matches.length == 5) {
    return {
      ingredient: matches[4],
      minAmount: convertToAmount(matches[1]),
      maxAmount: convertToAmount(matches[2]),
      unit: matches[3],
      isNumeric: !isText(matches[1]) || !isText(matches[2]),
      isRange: true
    };
  }

  // TODO Refactor into custom error type
  throw Error(`Failed to parse ingredient: ${raw}`)
}
