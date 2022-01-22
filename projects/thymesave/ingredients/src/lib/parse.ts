import { RecipeIngredient } from "./model";

const REGEXP_AMOUNT_UNIT_WITHOUT_RANGE = new RegExp('^(\\d+|\\w+\\s)\\s{0,}(\\w+)\\s{1,}(.+)$');
const REGEXP_AMOUNT_UNIT_WITH_RANGE = new RegExp('^(\\w+)\\s{0,}-\\s{0,}(\\w+)\\s?(\\w+)\\s+(.+)$');
const REGEXP_AMOUNT_WITHOUT_UNIT = new RegExp('^(\\d+)\\b\\s(\\w+)$');

export const parseIngredientInformation = (raw: string): RecipeIngredient => {
  raw = raw.trim();

  let matches = raw.match(REGEXP_AMOUNT_WITHOUT_UNIT);
  console.log(matches)
  if (matches != null && matches.length == 3) {
    const isText = isNaN(matches[1] as any);
    const amount = isText ? matches[1] : parseFloat(matches[1])
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
    const isText = isNaN(matches[1] as any);
    const amount = isText ? matches[1].trim() : parseFloat(matches[1]);
    return {
      ingredient: matches[3],
      unit: matches[2] || null,
      minAmount: amount,
      maxAmount: amount,
      isRange: false,
      isNumeric: !isText
    };
  }

  matches = raw.match(REGEXP_AMOUNT_UNIT_WITH_RANGE);
  if (matches != null && matches.length == 5) {
    const isMinText = isNaN(matches[1] as any);
    const isMaxText = isNaN(matches[2] as any);
    return {
      ingredient: matches[4],
      minAmount: isMinText ? matches[1] : parseFloat(matches[1]),
      maxAmount: isMaxText ? matches[2] : parseFloat(matches[2]),
      unit: matches[3],
      isNumeric: !isMaxText && !isMinText,
      isRange: true
    };
  }


  throw Error(`Failed to parse ingredient: ${raw}`)
}
