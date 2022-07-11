import ingredients from "./ingredients";
import { Ingredient } from "@thymesave/core";

export class IngredientNotFoundError extends Error {
  public readonly key : string;

  public constructor(key : string) {
    super(`Ingredient with key ${key} not found`);
    this.key = key;
  }
}

/**
 * Load ingredient by technical key
 * @param key Technical key to load
 */
export const loadIngredientByKey = (key: string): Ingredient => {
  const ingredient = ingredients[key];

  if (!ingredient) {
    // TODO Refactor into custom error type
    throw Error(`Ingredient with key ${key} not found`)
  }

  return ingredient;
}
