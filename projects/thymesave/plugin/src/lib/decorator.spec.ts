import { Plugin, PluginDescriptor } from "./decorator";
import { PluginRegistry } from "./registry";

describe("Plugin decorator", () => {
  beforeEach(() => {
    PluginRegistry['plugins'] = [];
  });

  it("should allow new object creation", () => {
    @PluginDescriptor({
      name: "test",
      description: "foo goes to bar",
      version: "builtin",
    })
    class SamplePlugin {

    }

    expect(new SamplePlugin()).toBeDefined();
  });

  it("should propagate the descriptor properties", () => {
    @PluginDescriptor({
      name: "test",
      description: "Plugin to test functionality",
      version: "builtin",
    })
    class SamplePlugin extends Plugin {

    }
    const instance = new SamplePlugin();
    expect(instance.name).toBe("test");
    expect(instance.description).toBe("Plugin to test functionality");
  });

  it("should allow versions", () => {
    @PluginDescriptor({
      name: "version-type-test",
      description: "Dummy to test typing",
      version: "1.1.11",
      autoRegister: false,
    })
    class VersionPluginTest1 extends Plugin {

    }

    @PluginDescriptor({
      name: "version-type-test",
      description: "Dummy to test typing",
      version: "builtin",
      autoRegister: false,
    })
    class VersionPluginTest2 extends Plugin {

    }

    @PluginDescriptor({
      name: "version-type-test",
      description: "Dummy to test typing",
      version: "builtin",
      autoRegister: false,
    })
    class VersionPluginTest3 extends Plugin {

    }

    expect(true).toBeTrue();
  });
});
