import { ResourceBundle, ResourceBundleBuilder } from "./resourceBundle";

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
    expect(bundle.getTranslation("nonExistent", "foo")).toBe("bar");
  });

  it("should allow using the builder", () => {
    const builder = ResourceBundle.builder();
    expect(builder).toBeInstanceOf(ResourceBundleBuilder);
  });
});

describe("ResourceBundleBuilder", () => {
  it("should initialize properly", () => {
    const builder = new ResourceBundleBuilder();
    expect(builder['resourceBundle']).toBeInstanceOf(ResourceBundle);
    expect(builder.build()).toBeInstanceOf(ResourceBundle);
  });

  it("should map translations correctly", () => {
    const bundle = new ResourceBundleBuilder()
      .withTranslations({
        "de_DE": [
          {
            key: "bu",
            translation: "batz",
          },
        ],
        "en_US": [
          {
            key: "foo",
            translation: "bar",
          },
        ],
      }).build();
    expect(bundle.getTranslation("de_DE", "bu")).toBe("batz");
    expect(bundle.getTranslation("en_US", "foo")).toBe("bar");
  });
});
