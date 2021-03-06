import { Instruction } from "./instruction"
import { Ingredient } from "./ingredient";

export type RecipeBase64Image = string

/**
 * Representation of a recipe
 */
export interface Recipe {
  /**
   * Globally unique identifier
   */
  uuid: string;
  /**
   * Human-readable title
   */
  title: string;
  /**
   * Optional description
   */
  description?: string
  /**
   * Ordered list of instructions
   */
  instructions: Instruction[]
  /**
   * Ingredients the recipe consists of
   */
  ingredients : Ingredient[]
  /**
   * Image encoded as base64, may be omitted if no image is present
   */
  image ?: RecipeBase64Image
}
