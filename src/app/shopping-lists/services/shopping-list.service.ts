import { Injectable } from '@angular/core';
import { ShoppingList } from "@thymesave/core";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";

export interface ShoppingListEntity extends ShoppingList, BaseDocument {

}

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService extends EntityService<ShoppingListEntity> {
  get entityType(): string {
    return "shopping-list";
  }

}
