import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { createLogger } from "@helper/log";
import { CACHE_DB_NAME, saveValue } from "@helper/simpleStorage";
import PouchDB from 'pouchdb';
import findPlugin from "pouchdb-find";
import upsertPlugin from 'pouchdb-upsert';
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  from,
  map,
  of,
  switchMap,
  tap,
  throwError, first, mergeMap,
} from 'rxjs';

import { BaseDocument } from '@/models/BaseDocument';

import { environment } from '@/../environments/environment';

interface DbInitializeResponse {
  dbName: string;
}

export type UpsertDiffFunc<T> = (doc: T) => Partial<T> | boolean

export type PouchDBFindSort = Array<string | { [propName: string]: 'asc' | 'desc' }> | undefined;

export interface Pagination<T> {
  pageSize: number
  paginateField: string
  startToken?: any
}

export interface PaginationWithResult<T> extends Pagination<T> {
  results: T[]
  nextStartToken?: any
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private pouchRemote: PouchDB.Database | null = null;
  private pouchLocal: PouchDB.Database | null = null;

  private logger = createLogger("StorageService");

  private dbSubject = new BehaviorSubject<PouchDB.Database | null>(null);
  public db$ = this.dbSubject.asObservable().pipe(filter(db => !!db));

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    // Register pouch db upsert plugin
    PouchDB.plugin(upsertPlugin);
    PouchDB.plugin(findPlugin);
    // Initialize pouch db instance
    this.authService.isAuthenticated$.pipe(
      switchMap(_ => this.authService.getIdTokenClaims()),
      switchMap(claims => claims ? this.initPouchDB(claims.__raw) : of(null)),
      map(returnValue => {
        const dbValue = returnValue ? this.pouchLocal : null;
        this.dbSubject.next(dbValue);
      }),
    ).subscribe();

    this.db$.pipe(
      filter(db => db != null),
      map(db => {
        db!!.createIndex({
          index: {
            fields: ["$entityType"],
          },
        });
      }));
  }

  /**
   * Build document id by entity type and id
   * @param entityType Entity type to use
   * @param id Unique identifier for the document
   */
  public build_id(entityType: string, id: string): string {
    return `${entityType}:${id}`;
  }

  /**
   * Upserts a base document entity and corrects the entitys entitiyType based on the provided functions parameter.
   * @param {string} entityType The base type for this entity
   * @param {string} id The unique identifier for this document
   * @param {PouchDB.UpsertDiffCallback<BaseDocument>} diffFunc Used to evaluate if a update needs to happen
   * @returns
   */
  public upsert<T extends BaseDocument>(entityType: string, id: string, diffFunc: UpsertDiffFunc<T>): Observable<PouchDB.UpsertResponse | T> {
    this.logger.debug(`Upsert doc of entity type ${entityType} with id ${id}`);
    return this.db$.pipe(switchMap(db =>
      from(db!.upsert<BaseDocument>(this.build_id(entityType, id), doc => {
        const diffFuncResult = diffFunc(doc as T);
        if (!!diffFuncResult) {
          doc.$entityType = entityType;
          return doc;
        } else {
          if (doc.$entityType !== entityType) {
            doc.$entityType = entityType;
            return doc;
          }
          return false;
        }
      })),
    ));
  }

  /**
   * Get latest version of a document by id
   * @param entityType Entity type to query
   * @param id Id of the document
   */
  public getLatest<T extends BaseDocument>(entityType: string, id: string): Observable<T> {
    this.logger.debug(`Get latest doc of entityType ${entityType} with id ${id}`);
    return this.db$
      .pipe(switchMap(db => from(db!.get(this.build_id(entityType, id), {latest: true})))) as Observable<T>;
  }

  private async find<T>(db: PouchDB.Database, filter: PouchDB.Find.FindRequest<any>): Promise<T[]> {
    const results = await db.find(filter);
    return results.docs as any as T[];
  }

  /**
   * Get all documents for entity type.
   *
   * ONLY USE THIS FOR TESTING AND NEVER IN PRODUCTION, loading all documents at once is NOT recommended!
   * @param entityType Entity type to search for
   * @param selector Selector used to filter the documents, limit to entityType is added automatically
   * @param sort Sort to apply on the query
   * @param limit Limit the amount of documents to return
   */
  public getForEntityType<T extends BaseDocument>(entityType: string, selector: PouchDB.Find.Selector, sort: PouchDBFindSort = ["_id"], limit ?: number): Observable<T[]> {
    if (!limit) {
      this.logger.warn(`Get all documents of entityType ${entityType}. Please do not use this for production as it may slow down the app!`);
    }
    return this.db$
      .pipe(
        mergeMap(db => from(this.find<T>(db!!, {
            limit,
            selector: {
              ...selector,
              $entityType: {
                $eq: entityType,
              },
            },
            sort,
          },
        )) as any),
      ) as Observable<T[]>;
  }

  // TODO Add ability to go back with something like previousToken
  public paginate<T extends BaseDocument>(entityType: string, selector: PouchDB.Find.Selector, sort: PouchDBFindSort, pagination: Pagination<T>): Observable<PaginationWithResult<T>> {
    const {startToken, paginateField, pageSize} = pagination;
    if (startToken) {
      selector = {
        ...selector,
        [paginateField]: {
          $gt: startToken,
        },
      };
    }

    return this.getForEntityType(entityType, selector, sort, pageSize)
      .pipe(switchMap(results => of({
        nextStartToken: results.length > 0 ? (results[results.length - 1] as any)[paginateField] : undefined,
        pageSize,
        paginateField,
        results,
        startToken,
      }))) as Observable<PaginationWithResult<T>>;
  }

  public getAll<T extends BaseDocument>(entityType: string, sort ?: PouchDBFindSort): Observable<T[]> {
    return this.getForEntityType(entityType, {}, sort);
  }

  private fetchDBName(token: string): Observable<string> {
    return this.http.put<DbInitializeResponse>(`${environment.funnelBaseUrl}/self-service/db`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).pipe(
      map(response => response.dbName),
      tap(dbName => saveValue(CACHE_DB_NAME, dbName)),
      catchError(_ => {
        const fallbackDbName = localStorage.getItem(CACHE_DB_NAME);
        if (!fallbackDbName) {
          return throwError(() => new Error("No fallback database found"));
        }
        return of(fallbackDbName as string);
      }),
    );
  }

  private initPouchDB(token: string): Observable<string> {
    return this.fetchDBName(token)
      .pipe(tap(dbName => {
        this.pouchRemote = new PouchDB(`${environment.funnelBaseUrl}/service/couchdb/${dbName}`, {
          fetch(url, options) {
            const optionsToPatch = options ?? {};
            optionsToPatch.credentials = 'omit';
            (optionsToPatch.headers as Headers).set('Authorization', `Bearer ${token}`);
            return PouchDB.fetch(url, options);
          },
        });
        this.pouchLocal = new PouchDB('ThymeSave');
        this.pouchLocal.sync(this.pouchRemote, {
          live: true,
          retry: true,
        }).on('error', console.warn);
      }));
  }
}
