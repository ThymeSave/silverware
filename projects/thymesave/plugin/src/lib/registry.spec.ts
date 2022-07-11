import { PluginAlreadyRegisteredError, PluginRegistry } from "./registry";
import { Plugin, PluginDescriptor } from "./decorator";

@PluginDescriptor({
  name: "test",
  description: "test",
  version: "builtin",
  autoRegister: false
})
class TestPlugin extends Plugin {
}

describe("PluginRegistry", () => {
  beforeEach(() => {
    PluginRegistry['plugins'] = [];
  });

  it("should register plugins if they are not already present", () => {
    PluginRegistry.register(new TestPlugin());
    expect(PluginRegistry['plugins'].length).toBe(1);
  });

  it("should raise an exception if a plugin tries to register twice", () => {
    PluginRegistry.register(new TestPlugin());
    expect(() => PluginRegistry.register(new TestPlugin())).toThrow(new PluginAlreadyRegisteredError("test"));
    expect(PluginRegistry['plugins'].length).toBe(1);
  });
});
