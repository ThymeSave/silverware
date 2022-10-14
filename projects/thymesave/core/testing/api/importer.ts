import { Importer, ComponentContext, ImporterPayload, RawRecipe } from "@thymesave/core";
import { firstValueFrom } from "rxjs";

export const runImporter = async(importer : Importer<any>, context : ComponentContext, payload : ImporterPayload) : Promise<RawRecipe[]> => {
  return await firstValueFrom(importer.import(context, payload));
};
