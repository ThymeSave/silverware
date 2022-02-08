import { Ingredient } from "./model";

enum VegetableCategory {
  Vegetable = "vegetable",
};

enum MeatCategory {
  Meat = 'meat',
  Beef = 'beef',
  Chicken = 'chicken',
  Pork = 'pork',
}

export const IngredientCategory = {
  ...VegetableCategory,
  ...MeatCategory,
};

const ingredients: { [key: string]: Ingredient } = {
  "ginger": {
    category: IngredientCategory.Vegetable,
    scalable: true
  },
  "potato": {
    category: IngredientCategory.Vegetable,
    scalable: true
  }
};

export default ingredients;
