/**
 * Shopping list that can have multiple items
 */
export interface ShoppingList {
  /**
   * Name of the shopping list which the user associates with this list, may not be unique
   */
  name: string
  /**
   * UUID of the shopping list globally making it unique
   */
  uuid: string
  /**
   * Date the shopping list was created
   */
  created: Date
}

/**
 * Item on a single shopping list
 */
export interface ShoppingListItem {
  /**
   * UUID of the shopping list item, globally making it unique
   */
  uuid: string
  /**
   * UUID of the shopping list globally making it unique
   */
  shoppingList: string
  /**
   * Unit of the amount to add to the shopping list, can be omitted in case no information exists or the
   * ingredient added to the list simply has none
   */
  unit?: string
  /**
   * Amount of the ingredient to buy
   */
  amount?: number
  /**
   * Technical key for the ingredient to buy
   */
  ingredientKey: string
  /**
   * Information about the source of the item
   */
  source: ShoppingListItemSource
  /**
   * The item is done, this means the item has already been bought and therefore dismissed from the list
   */
  done: boolean
}

/**
 * Differentiate between source type to allow source parsing
 */
export type ShoppingListItemSourceType = "Recipe" | "Manual";

/**
 * Source for shopping list item
 */
export interface ShoppingListItemSource {
  /**
   * Type to allow source parsing
   */
  type: ShoppingListItemSourceType
  /**
   * Source depends on the type:
   * - Manual -> has no source
   * - Recipe -> contains the uuid and title of the recipe in format <uuid>|<title>
   */
  source?: string;
}
