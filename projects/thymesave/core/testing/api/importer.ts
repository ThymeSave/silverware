import { Importer, ComponentContext, ImporterPayload, ParsedRecipe } from "@thymesave/core";
import { firstValueFrom, Observable } from "rxjs";

export const runImporter = async(importer : Importer<any>, context : ComponentContext, payload : ImporterPayload) : Promise<ParsedRecipe> => {
  return await firstValueFrom(importer.import(context, payload)  as any as Observable<ParsedRecipe>);
};
