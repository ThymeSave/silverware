import { ResourceBundle } from "./resourceBundle";

describe("ResourceBundle", () => {
  it("should add single translations", () => {
    const bundle = new ResourceBundle();
    bundle.addTranslation({
      key: "test",
      languageCode: "en_US",
      translation: "bar",
    });
    const contents = bundle['_contents'];
    expect(contents.size).toBe(1);
    expect(contents.get("translation.en_US.test")).toBe("bar");
  });

  it("should add mulitple translations for one language", () => {
    const bundle = new ResourceBundle();
    bundle.addTranslations("en_US", [
      {
        key: "bar",
        translation: "foo",
      },
      {
        key: "foo",
        translation: "bar",
      },
    ]);

    const contents = bundle['_contents'];
    expect(contents.size).toBe(2);
    expect(contents.get("translation.en_US.foo")).toBe("bar");
    expect(contents.get("translation.en_US.bar")).toBe("foo");
  });

  it("should return fallback values", () => {
    const bundle = new ResourceBundle();
    bundle.addTranslation({
      key: "foo",
      languageCode: "en_US",
      translation: "bar",
    });
    expect(bundle.getTranslation("nonExistent","foo")).toBe("bar");
  });
});
