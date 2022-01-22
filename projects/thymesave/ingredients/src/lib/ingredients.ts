import { Ingredient } from "./model";

const ingredients = require("../resources/ingredients.json");

export default ingredients as { [key: string]: Ingredient };;
