import { Recipe } from "@thymesave/core";
import PouchDB from "pouchdb";
import { map, Observable } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

import { BaseDocument } from "@/models/BaseDocument";
import { RecipeEntity } from "@/recipes/services/recipe.service";
import {
  Pagination,
  PaginationWithResult,
  PouchDBFindSort,
  StorageService,
  UpsertDiffFunc,
} from "@/shared/storage/storage.service";

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

  public build_id(id: string) {
    return this.storageService.build_id(this.entityType, id);
  }

  public getAll(): Observable<T[]> {
    return this.storageService.getAll(this.entityType);
  }

  public delete(document: T) {
    return this.storageService.delete(document);
  }

  public getPaginated(selector: PouchDB.Find.Selector, pagination: Pagination<T>, sort: PouchDBFindSort = []): Observable<PaginationWithResult<T>> {
    return this.storageService.paginate(this.entityType, selector, sort, pagination);
  }

  protected onDatabaseAvailable(callback: Function) {
    this.storageService.db$.pipe(
      map(() => callback()))
      .subscribe();
  }

  public getLatest(id: string): Observable<T> {
    return this.storageService.getLatest<T>(this.entityType, id);
  }

  public generateUUID(): string {
    return uuidv4();
  }
}
