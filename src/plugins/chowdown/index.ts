import { Plugin, PluginDescriptor } from "@thymesave/plugin";

import { ChowdownAllRecipeImporter, ChowdownSingleRecipeImporter } from "./importer";

@PluginDescriptor({
  name: "chowdown",
  description: "Builtin plugin to provide chowdown functionality",
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
