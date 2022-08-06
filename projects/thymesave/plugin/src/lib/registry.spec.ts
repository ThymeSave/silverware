import { ComponentContext, ImporterType, RecipeURLImporter, RawRecipe } from "@thymesave/core";

import { Plugin, PluginDescriptor } from "./decorator";
import { FilterImporterByType, PluginAlreadyRegisteredError, PluginRegistry } from "./registry";

class TestImporter extends RecipeURLImporter {
  public override parseFromHTML(context: ComponentContext, rawHTML : string, _ : URL): Promise<RawRecipe[]> {
    return Promise.resolve([{
      description: "",
      image: "",
      ingredients: [],
      instructions: [],
      servings: 2,
      title: "",
      uuid: "",
    }]);
  }

  getName(): string {
    return "";
  }

  get identifier(): string {
    return "test";
  }

}

@PluginDescriptor({
  autoRegister: false,
  description: "test description",
  identifier: "test",
  name: "test",
  version: "builtin",
})
class TestPlugin extends Plugin {
  override get importer() {
    return [
      new TestImporter(),
    ];
  }
}

describe("PluginRegistry", () => {
  beforeEach(() => {
    PluginRegistry['plugins'] = [];
  });

  it("should register plugins if they are not already present", () => {
    PluginRegistry.register(new TestPlugin());
    expect(PluginRegistry['plugins'].length).toBe(1);
  });

  it("should not raise an exception if a plugin tries to register twice", () => {
    PluginRegistry.register(new TestPlugin());
    expect(() => PluginRegistry.register(new TestPlugin())).toThrow(new PluginAlreadyRegisteredError("test"));
    expect(PluginRegistry['plugins'].length).toBe(1);
    const registeredPlugin = PluginRegistry.getRegistered()[0];
    expect(registeredPlugin.name).toBe("test");
    expect(registeredPlugin.description).toBe("test description");
  });

  it("should return all importers without filter", () => {
    PluginRegistry.register(new TestPlugin());
    const importer = PluginRegistry.getImporter();
    expect(importer.length).toBe(1);
    expect(importer[0].importer).toBeInstanceOf(TestImporter);
  });

  it("should return importers when filter match", () => {
    PluginRegistry.register(new TestPlugin());
    const importer = PluginRegistry.getImporter(FilterImporterByType(ImporterType.URL));
    expect(importer.length).toBe(1);
    expect(importer[0].importer).toBeInstanceOf(TestImporter);
  });

  it("should return no importers when filter does not match", () => {
    PluginRegistry.register(new TestPlugin());
    const importer = PluginRegistry.getImporter(FilterImporterByType(ImporterType.MANUAL));
    expect(importer.length).toBe(0);
  });
});
