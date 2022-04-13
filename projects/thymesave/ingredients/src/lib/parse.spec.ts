import { parseIngredientInformation } from "../public-api";
import { IngredientParseError } from "./parse";

describe("parseIngredientInformation", () => {
  it("should parse information with unit and numeric amount", () => {
    const parsed = parseIngredientInformation("10g ginger");
    expect(parsed.ingredient).toBe("ginger");
    expect(parsed.unit).toBe("g");
    expect(parsed.minAmount).toBe(10);
    expect(parsed.maxAmount).toBe(10);
    expect(parsed.isRange).toBeFalse();
  });

  it("should parse information with unit and numeric amount with multi word ingredient", () => {
    const parsed = parseIngredientInformation("10g black chocolate");
    expect(parsed.ingredient).toBe("black chocolate");
    expect(parsed.unit).toBe("g");
    expect(parsed.minAmount).toBe(10);
    expect(parsed.maxAmount).toBe(10);
    expect(parsed.isRange).toBeFalse();
  });

  it("should parse information with spaced unit and numeric amount", () => {
    const parsed = parseIngredientInformation("10 g ginger");
    expect(parsed.ingredient).toBe("ginger");
    expect(parsed.unit).toBe("g");
    expect(parsed.minAmount).toBe(10);
    expect(parsed.maxAmount).toBe(10);
    expect(parsed.isRange).toBeFalse();
  });

  it("should parse information with unit and textual amount", () => {
    const parsed = parseIngredientInformation("one piece ginger");
    expect(parsed.ingredient).toBe("ginger");
    expect(parsed.unit).toBe("piece");
    expect(parsed.minAmount).toBe('one');
    expect(parsed.maxAmount).toBe('one');
    expect(parsed.isRange).toBeFalse();
  });

  it("should parse information with unit and textual range amount", () => {
    const parsed = parseIngredientInformation("one-three pieces ginger");
    expect(parsed.ingredient).toBe("ginger");
    expect(parsed.unit).toBe("pieces");
    expect(parsed.minAmount).toBe('one');
    expect(parsed.maxAmount).toBe('three');
    expect(parsed.isRange).toBeTrue();
  });

  it("should parse information with unit and textual range amount with spaces", () => {
    const parsed = parseIngredientInformation("one - three pieces ginger");
    expect(parsed.ingredient).toBe("ginger");
    expect(parsed.unit).toBe("pieces");
    expect(parsed.minAmount).toBe('one');
    expect(parsed.maxAmount).toBe('three');
    expect(parsed.isRange).toBeTrue();
  });

  it("should parse information with unit and multi word ingredient", () => {
    const parsed = parseIngredientInformation("1 piece red onion");
    expect(parsed.ingredient).toBe("red onion");
    expect(parsed.unit).toBe("piece");
    expect(parsed.isRange).toBeFalse();
  });

  it("should parse information without unit", () => {
    const parsed = parseIngredientInformation("100 carrot");
    expect(parsed.ingredient).toBe("carrot");
    expect(parsed.unit).toBeNull();
    expect(parsed.minAmount).toBe(100)
    expect(parsed.isRange).toBeFalse();
  });

  it("should parse information without unit and single character amount", () => {
    const parsed = parseIngredientInformation("1 carrot");
    expect(parsed.ingredient).toBe("carrot");
    expect(parsed.unit).toBeNull();
    expect(parsed.minAmount).toBe(1)
    expect(parsed.isRange).toBeFalse();
  });

  it("should throw an error for invalid ingredient text",() => {
    expect(() => parseIngredientInformation("foo.bar")).toThrow(new IngredientParseError("foo.bar"));
  })
});
