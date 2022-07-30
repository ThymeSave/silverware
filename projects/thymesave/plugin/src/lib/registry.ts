import { Importer, ImporterType, RawRecipe } from "@thymesave/core";

import { Plugin } from "./decorator";

/**
 * Error that is thrown when a plugin tries to register more than once
 */
export class PluginAlreadyRegisteredError extends Error {
  constructor(name: string) {
    super(`${name} is already registered`);
    this.name = name;
  }
}

/**
 * Callback used to filter importers
 */
export type ImporterFilter = (importer: Importer<RawRecipe>) => boolean

/**
 * Filter importers by given type
 * @param type Type of the importer
 */
export const FilterImporterByType = (type: ImporterType) => ((importer: Importer<any>) => importer.type == type);

/**
 * Importer with unique identifier consisting of plugin identifier and importer identifier
 */
export type IdentifiableImporter = {importer: Importer<RawRecipe>, identifier: string}

/**
 * Singleton for plugin registration and management
 */
export class PluginRegistry {
  private static plugins: Array<Plugin> = [];

  /**
   * Register new plugin.
   * Fails if the plugin you are trying to register is already present
   * @param pluginToRegister Plugin to register
   */
  public static register(pluginToRegister: Plugin) {
    for (let plugin of this.plugins) {
      if (pluginToRegister.identifier == plugin.identifier) {
        throw new PluginAlreadyRegisteredError(plugin.name);
      }
    }

    this.plugins.push(pluginToRegister);
  }

  /**
   * Get all currently registered plugins
   */
  public static getRegistered() {
    return this.plugins;
  }

  /**
   * Get all importers available from plugins
   * @param filter Filter for the results
   */
  public static getImporter(filter ?: ImporterFilter) : IdentifiableImporter[] {
    let importerFilter = !filter ? (_: any) => true : filter;

    return this.getRegistered()
      .flatMap(plugin => plugin.importer.map(importer => ({
        importer,
        plugin,
      })))
      .flat()
      .map(info => ({
        identifier: info.plugin.identifier + "." + info.importer.identifier,
        importer: info.importer,
      }))
      .filter(importerInfo => importerFilter(importerInfo.importer));
  }
}
