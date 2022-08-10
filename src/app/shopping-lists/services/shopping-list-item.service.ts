import { Injectable } from '@angular/core';
import { ShoppingListItem } from "@thymesave/core";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";

export interface ShoppingListItemEntity extends ShoppingListItem, BaseDocument {

}

@Injectable({
  providedIn: 'root',
})
export class ShoppingListItemService extends EntityService<ShoppingListItemEntity> {
  get entityType(): string {
    return "shopping-list-item";
  }

}
