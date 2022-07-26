import { ParsedRecipeIngredient, RecipeIngredient } from "./ingredient";
import { Instruction } from "./instruction";

export type RecipeBase64Image = string

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
   * Ingredients the recipe consists of
   */
  ingredients : ParsedRecipeIngredient[]
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
