import { calculateUtilization, convertAmount, unitConversionFactor, UnitIdentifier } from "./unit";

describe("convertUnit", () => {
  it("should convert successfully when source and target are there", () => {
    expect(convertAmount(1, "kilogram", "gram")).toBe(1_000);
    expect(convertAmount(1, "cup", "gram")).toBe(125);
  });
  it("should return null if no mapping is found", () => {
    expect(convertAmount(10, "pack", "gram")).toBe(null);
  });
  it("should work with conversion between units", () => {
    expect(convertAmount(1, "tbsp", "gram")).toBe(10);
  });
});

describe("calculateUtilization", () => {
  it("should work with same weight unit", () => {
    expect(calculateUtilization(1, "kilogram", 100, "gram")).toBe(0.1);
    expect(calculateUtilization(1, "kilogram", 0, "gram")).toBe(0);
    expect(calculateUtilization(1, "kilogram",1000,  "gram")).toBe(1);
  });

  it("should work with different weight unit", () => {
    expect(calculateUtilization(1, "tbsp", 100, "gram")).toBe(1);
    expect(calculateUtilization(1, "tbsp", 3, "gram")).toBe(0.3);
    expect(calculateUtilization(1, "kilogram", 1000, "gram")).toBe(1);
  });
});
