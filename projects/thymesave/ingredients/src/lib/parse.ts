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
const REGEXP_TEXTUAL_AMOUNT = /^(\w+)\b\s*(\w*)\b$/;

const isText = (val: string) => isNaN(val as any);
const convertToAmount = (val: string) => isText(val) ? val.trim() : parseFloat(val);

const VULGAR_MAP: Record<string, string> = {
  '¼': "1/4",
  '½': "1/2",
  '¾': "3/4",
  '⅐': "1/7",
  '⅑': "1/9",
  '⅒': "1/10",
  '⅓': "1/3",
  '⅔': "2/3",
  '⅕': "1/5",
  '⅖': "2/5",
  '⅗': "3/5",
  '⅘': "4/5",
  '⅙': "1/6",
  '⅚': "5/6",
  '⅛': "1/8",
  '⅜': "3/8",
  '⅝': "5/6",
  '⅞': "7/8",
};

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
  // Handle vulgar unicodes
  for (let vulgarUnicode in VULGAR_MAP) {
    raw = raw.replace(vulgarUnicode, (VULGAR_MAP as any)[vulgarUnicode]);
  }

  raw = raw.trim()
    // remove double whitespace
    .replace(/ +/g, ' ')
    // remove parentheses
    .replace(/[\])}[{(]/g, '')
    // handle unicode fractions that are not a single vulgar unicode char
    .replace("\u2044", "/");

  let matches = raw.match(REGEXP_AMOUNT_WITHOUT_UNIT);
  if (matches != null && matches.length == 3) {
    const amount = convertToAmount(matches[1]);
    return {
      ingredient: matches[2],
      isNumeric: true,
      isRange: false,
      maxAmount: amount,
      minAmount: amount,
      unit: null,
    };
  }

  matches = raw.match(REGEXP_AMOUNT_FRACTION_WITH_UNIT);
  if (matches != null) {
    const amount = parseFloat(matches[1]) / parseFloat(matches[2]);
    return {
      ingredient: matches[4],
      isNumeric: true,
      isRange: false,
      maxAmount: amount,
      minAmount: amount,
      unit: matches[3],
    };
  }

  matches = raw.match(REGEXP_AMOUNT_UNIT_WITHOUT_RANGE);
  if (matches != null && matches.length == 4) {
    const amount = convertToAmount(matches[1]);
    return {
      ingredient: matches[3],
      isNumeric: isText(matches[1]),
      isRange: false,
      maxAmount: amount,
      minAmount: amount,
      unit: matches[2],
    };
  }

  matches = raw.match(REGEXP_AMOUNT_UNIT_WITH_RANGE);
  if (matches != null && matches.length == 5) {
    return {
      ingredient: matches[4],
      isNumeric: !isText(matches[1]) || !isText(matches[2]),
      isRange: true,
      maxAmount: convertToAmount(matches[2]),
      minAmount: convertToAmount(matches[1]),
      unit: matches[3],
    };
  }

  matches = raw.match(REGEXP_AMOUNT_WHOLE_AND_FRACTION_WITH_UNIT);
  if (matches != null) {
    const wholeAmount = parseFloat(matches[0]);
    const fractionAmount = parseFloat(matches[2]) / parseFloat(matches[3]);
    const amount = wholeAmount + fractionAmount;
    return {
      ingredient: matches[5],
      isNumeric: true,
      isRange: false,
      maxAmount: amount,
      minAmount: amount,
      unit: matches[4],
    };
  }

  matches = raw.match(REGEXP_AMOUNT_FRACTION_WITHOUT_UNIT);
  if (matches != null) {
    const amount = parseFloat(matches[1]) / parseFloat(matches[2]);
    return {
      ingredient: matches[3],
      isNumeric: true,
      isRange: false,
      maxAmount: amount,
      minAmount: amount,
      unit: null,
    };
  }

  matches = raw.match(REGEXP_AMOUNT_WHOLE_AND_FRACTION_WITHOUT_UNIT);
  if (matches != null) {
    const wholeAmount = parseFloat(matches[0]);
    const fractionAmount = parseFloat(matches[2]) / parseFloat(matches[3]);
    const amount = wholeAmount + fractionAmount;
    return {
      ingredient: matches[4],
      isNumeric: true,
      isRange: false,
      maxAmount: amount,
      minAmount: amount,
      unit: null,
    };
  }

  matches = raw.match(REGEXP_TEXTUAL_AMOUNT);
  if (matches != null) {
    return {
      ingredient: matches[2],
      isNumeric: true,
      isRange: false,
      maxAmount: "",
      minAmount: "",
      unit: matches[1],
    };
  }

  throw new IngredientParseError(raw);
};

/**
 * Use this helper to let the user handle the parse error, filling the entire text in the ingredient
 * @param err Catched error
 */
export const propagateParseError = (err: IngredientParseError): ParsedRecipeIngredient => {
  return {
    ingredient: err.raw,
    isNumeric: false,
    isRange: false,
    maxAmount: "",
    minAmount: "",
    unit: null,
  };
};
