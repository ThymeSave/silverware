import { Service, Importer, RawRecipe } from "@thymesave/core";

import { PluginRegistry } from "./registry";

export type Version = "builtin" | `${number}.${number}.${number}`

/**
 * Metadata for the plugin
 */
export interface PluginDescriptorInformation {
  /**
   * Short and concise name
   */
  name: string

  /**
   * Globally unique identifier for the plugin.
   * Recommendation is to use your in reverse appending your plugin e. g. com.example.MyPlugin
   */
  identifier : string

  /**
   * Short informational description about what it provides and it is useful for
   */
  description: string

  /**
   * Version of the plugin
   */
  version: Version

  /**
   * Register automatically, set to false to disable automatic registration
   */
  autoRegister?: boolean
}

/**
 * Plugin descriptor registers a plugin in the registry
 * @param descriptor Descriptor containing information to assign
 * @constructor
 */
export function PluginDescriptor(descriptor: PluginDescriptorInformation) {
  return function (target: Plugin | any): typeof target {
    const plugin = new target() as Plugin;
    Object.assign(plugin, descriptor);

    if (descriptor.autoRegister ?? true) {
      PluginRegistry.register(plugin);
    }

    return class extends target {
      constructor() {
        super();
        Object.assign(this, descriptor);
      }
    };
  };
}

/**
 * Plugin base type
 */
export class Plugin implements PluginDescriptorInformation {
  /**
   * Name of the plugin
   */
  public name: string = "";

  /**
   * Short informational description about what it provides and it is useful for
   */
  public description: string = "";

  /**
   * Globally unique identifier for the plugin.
   * Recommendation is to use your in reverse appending your plugin e. g. com.example.MyPlugin
   */
  public identifier : string = "";

  /**
   * Version of the plugin
   */
  public version: Version = "0.0.0";

  /**
   * List with importers provided
   */
  get importer(): Importer<RawRecipe>[] {
    return [];
  }

  /**
   * List with services provided
   */
  get services(): Array<Service> {
    return [];
  }
}
