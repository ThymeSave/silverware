import { UnitIdentifier } from "./unit";

/**
 * Represent a change to the inventory. There are two changes that can occure:
 * - adding an ingredient to the inventory (amount is positive)
 * - removing an ingredient from the inventory (amount is negative)
 *
 * The final amount depends on the inventory change aggregated
 */
export interface InventoryChange {
  /**
   * Technical key for the ingredient to change the stock for
   */
  ingredientKey: string
  /**
   * Amount that was added/removed
   */
  amount: number
  /**
   * Unit related to the change
   */
  unit : UnitIdentifier
}
