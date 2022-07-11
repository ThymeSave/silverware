import { Plugin } from "./decorator";

export class PluginAlreadyRegisteredError extends Error {
  constructor(name: string) {
    super(`${name} is already registered`);
    this.name = name;
  }
}

export class PluginRegistry {
  private static plugins: Array<Plugin> = [];

  public static register(plugin: Plugin) {
    for (let plugin of this.plugins) {
      if (plugin.name == plugin.name) {
        throw new PluginAlreadyRegisteredError(plugin.name);
      }
    }

    this.plugins.push(plugin);
  }
}
