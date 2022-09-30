import { Plugin, PluginDescriptor, ResourceBundle } from "@thymesave/plugin";

import { ChowdownAllRecipeImporter, ChowdownSingleRecipeImporter } from "./importer";

export const resourceBundle = ResourceBundle.builder()
  .withTranslations({
    "de_DE": [
      {
        key: "AllRecipeImporter.name",
        translation: "Chowdown - Alle",
      },
      {
        key: "SingleRecipeImporter.name",
        translation: "Chowdown - Einzelnes",
      },
    ],
    "en_US": [
      {
        key: "AllRecipeImporter.name",
        translation: "Chowdown - All Recipes",
      },
      {
        key: "SingleRecipeImporter.name",
        translation: "Chowdown - Single Recipe",
      },
    ],
  })
  .build();

@PluginDescriptor({
  description: "Builtin plugin to provide chowdown functionality",
  identifier: "com.github.thymesave.ChowdownPlugin",
  name: "chowdown",
  version: "builtin",
})
export class ChowdownPlugin extends Plugin {
  public override get importer() {
    return [
      new ChowdownSingleRecipeImporter(),
      new ChowdownAllRecipeImporter(),
    ];
  }
}
