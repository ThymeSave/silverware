import { loadIngredientByKey } from "../public-api";

describe("loadIngredientByKey", () => {
  it("should load exiting ingredients by key", () => {
    const ingredient = loadIngredientByKey("ginger");
    expect(ingredient).not.toBeNull();
    expect(ingredient.category).toBe("vegetable");
  });

  it("should throw an error in case of non existing ingredients", () => {
    expect(() => loadIngredientByKey("foobar")).toThrow(new Error("Ingredient with key foobar not found"));
  });
});
