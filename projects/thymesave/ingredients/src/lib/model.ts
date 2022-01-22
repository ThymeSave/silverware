export interface Ingredient {
  category : string
}

export interface RecipeIngredient {
  unit : string | null
  minAmount ?: string|number
  maxAmount ?: string|number
  isNumeric : boolean
  isRange : boolean
  ingredient ?: string
}
