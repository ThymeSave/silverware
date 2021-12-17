import { findMatches } from "./matching";

describe("findMatches", () => {
  it("should return a single value for exact matches", () => {
    const matches = findMatches(
      {
        "key.one": "Text",
        "key.two": "potato",
        "key.three": "foobar"
      }, "Text");
    expect(matches).toEqual([
      {
        key: "key.one",
        similarity: 1.000
      }
    ]);
  });

  it("should return multiple matches when there is no exact match", () => {
    const matches = findMatches(
      {
        "key.one": "potat",
        "key.two": "potato",
        "key.three": "shrimp",
        "key.four": "tomato"
      }, "potatoh")
    expect(matches).toEqual([
      {
        key: "key.two",
        similarity: 0.9091
      },
      {
        key: "key.one",
        similarity: 0.8000
      }
    ]);
  });

  it("should return no matches, when there is no match over the threshold", () => {
    const matches = findMatches({
      "key.one": "foo",
      "key.two": "bar",
      "key.three": "foobar"
    }, "Test")
    expect(matches.length).toBe(0);
  });
});
