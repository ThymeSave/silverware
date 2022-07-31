import { PluginDescriptor, Plugin, ResourceBundle } from "@thymesave/plugin";

import { GenericHomepageImporter } from "./importer";

export const resourceBundle = ResourceBundle.builder()
  .withTranslations({
    "de_DE": [
      {
        key: "GenericHomepageImporter.name",
        translation: "Generische Rezept-Website",
      },
    ],
    "en_US": [
      {
        key: "GenericHomepageImporter.name",
        translation: "Generic recipe website",
      },
    ],
  })
  .build();

@PluginDescriptor({
  description: "Generic homepage functionality",
  identifier: "com.github.thymesave.GenericHomepagePlugin",
  name: "generic-homepage",
  version: "builtin",
})
export class GenericHomepagePlugin extends Plugin {
  override get importer() {
    return [
      new GenericHomepageImporter(),
    ];
  }
}