import { Injectable } from "@angular/core";
import { Recipe } from "@thymesave/core";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";

export interface RecipeEntity extends Recipe, BaseDocument {

}

@Injectable({
  providedIn: 'root',
})
export class RecipeService extends EntityService<RecipeEntity> {
  get entityType(): string {
    return "recipes";
  }

  constructor(storageService: StorageService) {
    super(storageService);
  }
}
