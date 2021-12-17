import { loadUITextByKey, loadIngredientByKey, Languages, loadUnitByKey } from "../public-api";

describe("loadUIByKey", () => {
  it("should load existing translations", () => {
    const translation = loadUITextByKey(Languages.en_US, "ok");
    expect(translation).toBe("Ok");
  });

  it("should return the key for missing translations", () => {
    const translation = loadUITextByKey(Languages.en_US, "foo.bar");
    expect(translation).toBe("foo.bar");
  });
});

describe("loadIngredientsByKey", () => {
  it("should load existing ingredient translation with default amount", () => {
    const ingredient = loadIngredientByKey(Languages.en_US, "potato");
    expect(ingredient).toBe("potato");
  });

  it("should load existing ingredients translation for one item", () => {
    const ingredient = loadIngredientByKey(Languages.en_US, "potato", 1);
    expect(ingredient).toBe("potato")
  });

  it("should load existing ingredient translation for multiple items", () => {
    const ingredient = loadIngredientByKey(Languages.en_US, "potato", 3);
    expect(ingredient).toBe("potatoes");
  });

  it("should load existing ingredient translation for non pluralizable ingredient for single item", () => {
    const ingredient = loadIngredientByKey(Languages.en_US, "ginger", 1);
    expect(ingredient).toBe("ginger");
  });

  it("should load existing ingredient translation for non pluralizable ingredient for multiple items", () => {
    const ingredient = loadIngredientByKey(Languages.en_US, "ginger", 3);
    expect(ingredient).toBe("ginger");
  });

  it("should return translation key for non existing translation for single item", () => {
    const ingredient = loadIngredientByKey(Languages.en_US, "non.existing", 1);
    expect(ingredient).toBe("non.existing");
  });

  it("should return translation key for non existing translation for multiple items", () => {
    const ingredient = loadIngredientByKey(Languages.en_US, "non.existing", 2);
    expect(ingredient).toBe("non.existing");
  });
});

describe("loadUnitByKey", () => {
  it("should return the correct details based on an existing key", () => {
    const unitDetails = loadUnitByKey(Languages.en_US, "gram", 1);
    expect(unitDetails).not.toBeNull();
    expect(unitDetails).toEqual({
      short: "g",
      long: "gram"
    });
  });

  it("should return the translation key in each property of the returned object", () => {
    const unitDetails = loadUnitByKey(Languages.en_US, "foo.bar", 1);
    expect(unitDetails).not.toBeNull();
    expect(unitDetails).toEqual({
      short: "foo.bar",
      long: "foo.bar"
    });
  });
});
