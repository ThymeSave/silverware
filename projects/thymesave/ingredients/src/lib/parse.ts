import { ParsedRecipeIngredient } from "@thymesave/core";

const REGEXP_AMOUNT_UNIT_WITHOUT_RANGE = /^(\d+|\w+\s)\s*(\w+)\s+(.+)$/
const REGEXP_AMOUNT_UNIT_WITH_RANGE = /^(\w+)\s*-\s*(\w+)\s?(\w+)\s+(.+)$/
const REGEXP_AMOUNT_WITHOUT_UNIT = /^(\d+)\b\s(\w+)$/

const isText = (val: string) => isNaN(val as any);
const convertToAmount = (val: string) => isText(val) ? val.trim() : parseFloat(val)

/**
 * Error in case an ingredient text can not be parsed
 */
export class IngredientParseError extends Error {
  public readonly raw: String

  constructor(raw: String) {
    super(`Failed to parse ingredient from '${raw}'`);
    this.raw = raw;
  }
}

/**
 * Parse ingredient information from textual representation.
 * This <b>does not include</b> translations parsing!
 * @param raw Raw text
 */
export const parseIngredientInformation = (raw: string): ParsedRecipeIngredient => {
  raw = raw.trim();

  let matches = raw.match(REGEXP_AMOUNT_WITHOUT_UNIT);
  if (matches != null && matches.length == 3) {
    const amount = convertToAmount(matches[1])
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

  throw new IngredientParseError(raw)
}
