import { Injectable } from '@angular/core';
import { InventoryChange } from "@thymesave/core";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";

export interface InventoryChangeEntity extends InventoryChange, BaseDocument {

}

@Injectable({
  providedIn: 'root',
})
export class InventoryChangeService extends EntityService<InventoryChangeEntity> {
  public get entityType(): string {
    return "inventory-change";
  }

  public constructor(storageService: StorageService) {
    super(storageService);
  }

  public queryInventory() {
    return this.storageService.query("inventory");
  }
}
