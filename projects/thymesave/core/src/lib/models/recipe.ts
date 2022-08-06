import { ParsedRecipeIngredient, RecipeIngredient } from "./ingredient";
import { Instruction } from "./instruction";

export type RecipeBase64Image = string

/**
 * Default values for recipes for fields that can not be omitted
 * or should not, providing consistent defaults across plugins
 * and the application itself
 */
export class RecipeDefaults {
  /**
   * Amount of servings a recipe is for
   */
  static readonly SERVINGS = 4;
}

/**
 * Properties every recipe shares
 */
export interface BaseRecipe {
  /**
   * Human-readable title
   */
  title: string;
  /**
   * Optional description
   */
  description?: string
  /**
   * Amount of servings for this recipe
   */
  servings: number
  /**
   * Image encoded as base64, may be omitted if no image is present
   */
  image ?: RecipeBase64Image
}

/**
 * Recipe information as processed by importer
 */
export interface RawRecipe extends BaseRecipe {
  /**
   * Ordered list of instructions
   */
  instructions: string[]
  /**
   * Ingredients the recipe consists of
   */
  ingredients : string[]
}

/**
 * Enhanced recipe information to be reviewed by the user
 */
export interface ParsedRecipe extends BaseRecipe {
  /**
   * Ordered list of instructions
   */
  instructions : Instruction[]
  /**
   * Raw instructions as parsed from the raw recipe, can be used to make checking the matched inputs easier
   */
  rawInstructions : string[]
  /**
   * Ingredients the recipe consists of
   */
  ingredients : ParsedRecipeIngredient[]
  /**
   * Raw ingredients as parsed from the raw recipe, can be used to make checking the matched inputs easier
   */
  rawIngredients : string[]
}

/**
 * Representation of a recipe
 */
export interface Recipe extends BaseRecipe {
  /**
   * Ordered list of instructions
   */
  instructions: Instruction[]
  /**
   * Ingredients the recipe consists of
   */
  ingredients : RecipeIngredient[]
}
