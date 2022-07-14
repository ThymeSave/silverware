import { map } from "rxjs";

import { BaseDocument } from "@/models/BaseDocument";
import { StorageService, UpsertDiffFunc } from "@/shared/storage/storage.service";

export abstract class EntityService<T extends BaseDocument> {
  protected constructor(public storageService: StorageService) {
  }

  public abstract get entityType(): string

  protected upsert(id: string, diffFunc: UpsertDiffFunc<T>) {
    return this.storageService.upsert(this.entityType, id, diffFunc);
  }

  protected onDatabaseAvailable(callback : Function) {
    this.storageService.db$.pipe(
      map(() => callback()))
      .subscribe();
  }

  protected getLatest(id: string) {
    return this.storageService.getLatest(this.entityType, id);
  }
}
