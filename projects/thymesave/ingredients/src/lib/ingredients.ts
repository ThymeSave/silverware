import { Ingredient } from "./model";

const CATEGORY_VEGETABLE = "vegetable";

const ingredients: { [key: string]: Ingredient } = {
  "ginger": {
    category: CATEGORY_VEGETABLE,
    scalable: true
  },
  "potato": {
    category: CATEGORY_VEGETABLE,
    scalable: true
  }
};

export default ingredients;
