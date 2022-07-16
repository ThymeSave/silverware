import { ComponentContext, ImporterType, Recipe, URLImporter, URLImporterPayload } from "@thymesave/core";
import { Observable, of } from "rxjs";

import { Plugin, PluginDescriptor } from "./decorator";
import { FilterImporterByType, PluginAlreadyRegisteredError, PluginRegistry } from "./registry";

class TestImporter extends URLImporter<Recipe> {
  import(context: ComponentContext, payload: URLImporterPayload): Observable<Recipe> {
    return of({
      uuid: "",
      description: "",
      ingredients: [],
      image: "",
      title: "",
      instructions: [],
    });
  }

  get name(): string {
    return "";
  }

}

@PluginDescriptor({
  name: "test",
  description: "test description",
  version: "builtin",
  autoRegister: false,
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
    expect(importer[0]).toBeInstanceOf(TestImporter);
  });

  it("should return importers when filter match", () => {
    PluginRegistry.register(new TestPlugin());
    const importer = PluginRegistry.getImporter(FilterImporterByType(ImporterType.URL));
    expect(importer.length).toBe(1);
    expect(importer[0]).toBeInstanceOf(TestImporter);
  });

  it("should return no importers when filter does not match", () => {
    PluginRegistry.register(new TestPlugin());
    const importer = PluginRegistry.getImporter(FilterImporterByType(ImporterType.MANUAL));
    expect(importer.length).toBe(0);
  });
});
