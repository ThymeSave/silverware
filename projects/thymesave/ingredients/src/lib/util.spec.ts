import { mapMetaData } from "./util";

describe('mapMetaData', () => {
  it("should map properly", () => {
    enum CatA {
      a = "a",
      b = "b",
    }

    enum CatB {
      c = "c",
      d = "d",
    }

    const mapping = mapMetaData( [
      [CatA, "icon-a"],
      [CatB, "icon-b"],
    ]);

    expect(mapping.size).toBe(4);

    expect(mapping.get("a")).toBe("icon-a");
    expect(mapping.get("b")).toBe("icon-a");

    expect(mapping.get("c")).toBe("icon-b");
    expect(mapping.get("d")).toBe("icon-b");

  });
});
