import { ParsedRecipeIngredient } from "@thymesave/core";

// <amount> <unit> <thing>
const REGEXP_AMOUNT_UNIT_WITHOUT_RANGE = /^(\d+|\w+\s)\s*(\w+)\s+(.+)$/;
// <amount>-<amount> <unit> <thing>
const REGEXP_AMOUNT_UNIT_WITH_RANGE = /^(\w+)\s*-\s*(\w+)\s?(\w+)\s+(.+)$/;
// <amount> <thing>
const REGEXP_AMOUNT_WITHOUT_UNIT = /^(\d+)\b\s(\w+)$/;
// <amount as fraction> <thing>
const REGEXP_AMOUNT_FRACTION_WITHOUT_UNIT = /^(\d+)\/(\d+)\s*\b\s(.+)$/;
// <amount as fraction> <unit> <thing>
const REGEXP_AMOUNT_FRACTION_WITH_UNIT = /^(\d+)\/(\d+)\s*\b\s(\w+)\b\s(.+)$/;
// <whole amount> <additional amount as fraction> <thing>
const REGEXP_AMOUNT_WHOLE_AND_FRACTION_WITHOUT_UNIT = /^(\d+)\s*(\d+)\/(\d+)\b\s(.+)$/;
// <whole amount> <additional amount as fraction> <unit> <thing>
const REGEXP_AMOUNT_WHOLE_AND_FRACTION_WITH_UNIT = /^(\d+)\s*(\d+)\/(\d+)\b\s*(\w+)\b\s*(.+)$/;
// <textual amount> <ingredient>
const REGEXP_TEXTUAL_AMOUNT = /^(\w+)\b\s*(\w*)$/;

const isText = (val: string) => isNaN(val as any);
const convertToAmount = (val: string) => isText(val) ? val.trim() : parseFloat(val);

/**
 * Error in case an ingredient text can not be parsed
 */
export class IngredientParseError extends Error {
  public readonly raw: string;

  constructor(raw: string) {
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
    const amount = convertToAmount(matches[1]);
    return {
      ingredient: matches[2],
      unit: null,
      isNumeric: true,
      isRange: false,
      minAmount: amount,
      maxAmount: amount,
    };
  }

  matches = raw.match(REGEXP_AMOUNT_FRACTION_WITH_UNIT);
  if (matches != null) {
    const amount = parseFloat(matches[1]) / parseFloat(matches[2]);
    return {
      ingredient: matches[4],
      minAmount: amount,
      maxAmount: amount,
      unit: matches[3],
      isNumeric: true,
      isRange: false,
    };
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
      isNumeric: isText(matches[1]),
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
      isRange: true,
    };
  }

  matches = raw.match(REGEXP_AMOUNT_WHOLE_AND_FRACTION_WITH_UNIT);
  if (matches != null) {
    const wholeAmount = parseFloat(matches[0]);
    const fractionAmount = parseFloat(matches[2]) / parseFloat(matches[3]);
    const amount = wholeAmount + fractionAmount;
    return {
      ingredient: matches[5],
      minAmount: amount,
      maxAmount: amount,
      unit: matches[4],
      isNumeric: true,
      isRange: false,
    };
  }

  matches = raw.match(REGEXP_AMOUNT_FRACTION_WITHOUT_UNIT);
  if (matches != null) {
    const amount = parseFloat(matches[1]) / parseFloat(matches[2]);
    return {
      ingredient: matches[3],
      minAmount: amount,
      maxAmount: amount,
      unit: null,
      isNumeric: true,
      isRange: false,
    };
  }

  matches = raw.match(REGEXP_AMOUNT_WHOLE_AND_FRACTION_WITHOUT_UNIT);
  if(matches != null) {
    const wholeAmount = parseFloat(matches[0]);
    const fractionAmount = parseFloat(matches[2]) / parseFloat(matches[3]);
    const amount = wholeAmount + fractionAmount;
    return {
      ingredient: matches[4],
      minAmount: amount,
      maxAmount: amount,
      unit: null,
      isNumeric: true,
      isRange: false,
    };
  }

  matches = raw.match(REGEXP_TEXTUAL_AMOUNT);
  if(matches != null) {
    return {
      ingredient: matches[2],
      minAmount: 0,
      maxAmount: 0,
      unit: matches[1],
      isNumeric: true,
      isRange: false,
    };
  }

  throw new IngredientParseError(raw);
};

/**
 * Use this helper to let the user handle the parse error, filling the entire text in the ingredient
 * @param err Catched error
 */
export const propagateParseError = (err : IngredientParseError) : ParsedRecipeIngredient => {
  return {
    ingredient: err.raw,
    unit: null,
    minAmount: 0,
    maxAmount: 0,
    isNumeric: false,
    isRange: false,
  };
};
