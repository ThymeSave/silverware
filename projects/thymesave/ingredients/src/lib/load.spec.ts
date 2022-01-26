import { loadIngredientByKey } from "../public-api";
import { IngredientNotFoundError } from "./load";

describe("loadIngredientByKey", () => {
  it("should load exiting ingredients by key", () => {
    const ingredient = loadIngredientByKey("ginger");
    expect(ingredient).not.toBeNull();
    expect(ingredient.category).toBe("vegetable");
  });

  it("should throw an error in case of non existing ingredients", () => {
    expect(() => loadIngredientByKey("foobar")).toThrow(new IngredientNotFoundError("foobar"));
  });
});
