import { Importer, Recipe } from "@thymesave/core";

import { Plugin } from "./decorator";

export class PluginAlreadyRegisteredError extends Error {
  constructor(name: string) {
    super(`${name} is already registered`);
    this.name = name;
  }
}

export type ImporterFilter = (importer: Importer<Recipe>) => boolean

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

  public static getRegistered() {
    return this.plugins;
  }

  public static getImporter(filter ?: ImporterFilter) {
    let importerFilter = !filter ? (_: any) => true : filter;

    return this.getRegistered()
      .flatMap(p => p.importer)
      .flat()
      .filter(importer => importerFilter(importer));
  }
}
