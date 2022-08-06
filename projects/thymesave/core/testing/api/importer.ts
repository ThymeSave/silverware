import { Importer, ComponentContext, ImporterPayload, ParsedRecipe, RawRecipe } from "@thymesave/core";
import { firstValueFrom, Observable } from "rxjs";

export const runImporter = async(importer : Importer<any>, context : ComponentContext, payload : ImporterPayload) : Promise<RawRecipe[]> => {
  return await firstValueFrom(importer.import(context, payload));
};
