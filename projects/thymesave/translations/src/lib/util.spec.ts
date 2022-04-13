import { pluralize } from "./util";

describe("pluralize", () => {
  it("should return singular for pluralizable", () => {
    const pluralized = pluralize(["singular", "plural"], 1)
    expect(pluralized).toBe("singular")
  })

  it("should return plural for pluralizable", () => {
    const pluralized = pluralize(["singular", "plural"], 2)
    expect(pluralized).toBe("plural")
  })

  it("should return always singular for non-pluralizable", () => {
    const pluralized = pluralize(["singular"], 2)
    expect(pluralized).toBe("singular")
  })
})
