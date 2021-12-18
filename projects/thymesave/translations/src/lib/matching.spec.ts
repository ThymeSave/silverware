import { Languages } from "../public-api";
import { findMatches, matchIngredientByText, matchUnitByText } from "./matching";

const DEFAULT_MATCH_OPTIONS = {maxMatches: 10, minSimilarity: .5}

describe("findMatches", () => {
  it("should return a single value for exact matches", () => {
    const matches = findMatches(
      {
        "key.one": ["Text"],
        "key.two": ["potato"],
        "key.three": ["foobar"]
      }, "Text", DEFAULT_MATCH_OPTIONS);
    expect(matches).toEqual([
      {
        key: "key.one",
        variant: "Text",
        similarity: 1.000
      }
    ]);
  });

  it("should return multiple matches when there is no exact match", () => {
    const matches = findMatches(
      {
        "key.one": ["potat"],
        "key.two": ["potato"],
        "key.three": ["shrimp"],
        "key.four": ["tomato"]
      }, "potatoh", DEFAULT_MATCH_OPTIONS)
    expect(matches).toEqual([
      {
        key: "key.two",
        variant: "potato",
        similarity: 0.9091
      },
      {
        key: "key.one",
        variant: "potat",
        similarity: 0.8000
      }
    ]);
  });

  it("should return no matches, when there is no match over the threshold", () => {
    const matches = findMatches({
      "key.one": ["foo"],
      "key.two": ["bar"],
      "key.three": ["foobar"]
    }, "Test", DEFAULT_MATCH_OPTIONS)
    expect(matches.length).toBe(0);
  });
});

describe("matchIngredientByText", () => {
  it("should return matches for existing ingredients", () => {
    const matches = matchIngredientByText(Languages.en_US, "potato");
    expect(matches.length).toBe(1);
  });

  it("should return no matches for non-existing ingredients", () => {
    const matches = matchIngredientByText(Languages.en_US, "foo.bar");
    expect(matches.length).toBe(0);
  });
});

describe("matchUnitByText", () => {
  it("should match the symbol for single letter symbols", () => {
    const matches = matchUnitByText(Languages.en_US, "g");
    expect(matches.length).toBe(1);
    expect(matches[0].key).toBe("gram");
  });

  it("should match the symbol for two letter symbols", () => {
    const matches = matchUnitByText(Languages.en_US, "dl");
    expect(matches.length).toBe(1);
    expect(matches[0].key).toBe("deciliter");
  });

  it("should match the symbol for pluralized unit texts", () => {
    const matches = matchUnitByText(Languages.en_US, "cups");
    expect(matches.length).toBe(1);
    expect(matches[0].key).toBe("cup");
  });

  it("should match by short", () => {
    const matches = matchUnitByText(Languages.en_US, "gram");
    expect(matches.length).toBe(1);
    expect(matches[0].key).toBe("gram");
  });
});
