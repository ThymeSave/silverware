import ingredients from "./ingredients";
import { Ingredient } from "./model";

export const loadIngredientByKey = (key: string) : Ingredient => {
  const ingredient = ingredients[key]

  if (!ingredient) {
    throw Error(`Ingredient with key ${key} not found`)
  }

  return ingredient
}
