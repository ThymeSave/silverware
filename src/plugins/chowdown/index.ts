import { Plugin, PluginDescriptor } from "@thymesave/plugin";

import { ChowdownAllRecipeImporter, ChowdownSingleRecipeImporter } from "./importer";

@PluginDescriptor({
  description: "Builtin plugin to provide chowdown functionality",
  identifier: "com.github.thymesave.ChowdownPlugin",
  name: "chowdown",
  version: "builtin",
})
export class ChowdownPlugin extends Plugin {
  override get importer() {
    return [
      new ChowdownSingleRecipeImporter(),
      new ChowdownAllRecipeImporter(),
    ];
  }
}
