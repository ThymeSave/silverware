import PouchDB from "pouchdb";
import { filter, map, Observable } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

import { BaseDocument } from "@/models/BaseDocument";
import {
  Pagination,
  PaginationWithResult,
  PouchDBFindSort,
  StorageService,
  UpsertDiffFunc,
} from "@/shared/storage/storage.service";

export abstract class EntityService<T extends BaseDocument> {
  public readonly changes$ = this.storageService.changes$
    .pipe(filter(doc => doc!!.$entityType === this.entityType)) as Observable<T>;

  protected constructor(public storageService: StorageService) {
  }

  protected onDatabaseAvailable(callback: Function) {
    this.storageService.db$.pipe(
      map(() => callback()))
      .subscribe();
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

  public getAll(selector ?: PouchDB.Find.Selector, sort ?: PouchDBFindSort): Observable<T[]> {
    return this.storageService.getAll(this.entityType, selector, sort);
  }

  public delete(document: T) {
    return this.storageService.delete(document);
  }

  public getPaginated(selector: PouchDB.Find.Selector, pagination: Pagination<T>, sort: PouchDBFindSort = []): Observable<PaginationWithResult<T>> {
    return this.storageService.paginate(this.entityType, selector, sort, pagination);
  }

  public getLatest(id: string): Observable<T> {
    return this.storageService.getLatest<T>(this.entityType, id);
  }

  public generateUUID(): string {
    return uuidv4();
  }
}
