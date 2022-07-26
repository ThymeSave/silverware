import { map, Observable } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

import { BaseDocument } from "@/models/BaseDocument";
import { StorageService, UpsertDiffFunc } from "@/shared/storage/storage.service";

export abstract class EntityService<T extends BaseDocument> {
  protected constructor(public storageService: StorageService) {
  }

  public abstract get entityType(): string

  public upsert(id: string, diffFunc: UpsertDiffFunc<T>) {
    return this.storageService.upsert(this.entityType, id, diffFunc);
  }

  public insert(entity: T) {
    return this.upsert(this.generateUUID(), doc => {
      Object.assign(doc, entity);
      return doc;
    });
  }

  public getAll() : Observable<T[]> {
    return this.storageService.getAll(this.entityType);
  }

  protected onDatabaseAvailable(callback: Function) {
    this.storageService.db$.pipe(
      map(() => callback()))
      .subscribe();
  }

  public getLatest(id: string) {
    return this.storageService.getLatest(this.entityType, id);
  }

  public generateUUID(): string {
    return uuidv4();
  }
}
