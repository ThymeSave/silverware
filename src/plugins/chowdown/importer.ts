import { ComponentContext, Recipe, URLImporter } from "@thymesave/core";
import { URLImporterPayload } from "@thymesave/core";
import { Observable, of } from "rxjs";

export class ChowdownSingleRecipeImporter extends URLImporter<Recipe> {
  import(context: ComponentContext, payload: URLImporterPayload): Observable<Recipe> {
    this.fetchContent(context, new URL("https://google.de"))
      .subscribe(c => console.log(c));
    throw new Error("to be implemented");
  }

  get name() {
    return "Chowdown Single Recipe";
  }
}
