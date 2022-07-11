import { Importer, Service } from "@thymesave/core"

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
   * Short informational description about what it provides and it is useful for
   */
  description: string

  /**
   * Version of the plugin
   */
  version: Version
}

/**
 * Plugin descriptor enhancing plugin with more information in a declarative way
 * @param descriptor Descriptor containing information to assign
 * @constructor
 */
export function PluginDescriptor(descriptor: PluginDescriptorInformation) {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor implements PluginDescriptorInformation {
      name = descriptor.name;
      description = descriptor.description
      version = descriptor.version
    }
  }
}

/**
 * Plugin base type
 */
export abstract class Plugin implements PluginDescriptorInformation {
  /**
   * Name of the plugin
   */
  name: string = "";

  /**
   * Short informational description about what it provides and it is useful for
   */
  description: string = "";

  /**
   * Version of the plugin
   */
  version: Version = "0.0.0";

  /**
   * List with importers provided
   */
  get importer(): Array<Importer<any>> {
    return []
  }

  /**
   * List with services provided
   */
  get services(): Array<Service> {
    return []
  }
}
