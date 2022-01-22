/**
 * Ingredient meta information
 */
export interface Ingredient {
  /**
   * Category technical key for the ingredient, e.g. vegetable
   */
  category: string
  /**
   * Is the ingredient directly scalable with the servings
   */
  scalable: boolean
}

/**
 * Low level representation of an parsed ingredient.
 *
 * It does <b>not</b> include translated texts
 */
export interface RecipeIngredient {
  /**
   * Parsed unit, can be null if the ingredient has no unit specified
   */
  unit: string | null
  /**
   * Minimum amount of ingredient to use
   */
  minAmount: string | number
  /**
   * Maximum amount of ingredient to use, if it is not a range contains the same amount as the minimum
   */
  maxAmount: string | number
  /**
   * Specifies if at least one of the amounts is a number
   */
  isNumeric: boolean
  /**
   * Specifies if the recipe ingredient is used as a range
   */
  isRange: boolean
  /**
   * Parsed ingredient text representation
   */
  ingredient: string
}

export interface RecipeIngredient {
  unit : string | null
  minAmount ?: string|number
  maxAmount ?: string|number
  isNumeric : boolean
  isRange : boolean
  ingredient ?: string
}

export interface RecipeIngredient {
  unit : string | null
  minAmount ?: string|number
  maxAmount ?: string|number
  isNumeric : boolean
  isRange : boolean
  ingredient ?: string
}
