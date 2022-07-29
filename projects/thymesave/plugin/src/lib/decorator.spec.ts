import { Plugin, PluginDescriptor } from "./decorator";
import { PluginRegistry } from "./registry";

describe("Plugin decorator", () => {
  beforeEach(() => {
    PluginRegistry['plugins'] = [];
  });

  it("should allow new object creation", () => {
    @PluginDescriptor({
      description: "foo goes to bar",
      identifier: "",
      name: "test",
      version: "builtin",
    })
    class SamplePlugin {

    }

    expect(new SamplePlugin()).toBeDefined();
  });

  it("should propagate the descriptor properties", () => {
    @PluginDescriptor({
      description: "Plugin to test functionality",
      identifier: "",
      name: "test",
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
      autoRegister: false,
      description: "Dummy to test typing",
      identifier: "",
      name: "version-type-test",
      version: "1.1.11",
    })
    class VersionPluginTest1 extends Plugin {

    }

    @PluginDescriptor({
      autoRegister: false,
      description: "Dummy to test typing",
      identifier: "",
      name: "version-type-test",
      version: "builtin",
    })
    class VersionPluginTest2 extends Plugin {

    }

    @PluginDescriptor({
      autoRegister: false,
      description: "Dummy to test typing",
      identifier: "",
      name: "version-type-test",
      version: "builtin",
    })
    class VersionPluginTest3 extends Plugin {

    }

    expect(true).toBeTrue();
  });
});
