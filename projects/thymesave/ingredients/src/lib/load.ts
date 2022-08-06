import { Ingredient } from "@thymesave/core";

import ingredients from "./ingredients";

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
    throw new IngredientNotFoundError(key);
  }

  return ingredient;
};
