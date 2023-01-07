import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { createLogger } from "@helper/log";
import { CACHE_DB_NAME, saveValue } from "@helper/simpleStorage";
import { chain } from "lodash";
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
  throwError,
  mergeMap,
} from 'rxjs';

import { BaseDocument } from '@/models/BaseDocument';
import indices from "@/shared/storage/indices";
import views, { stringifyView, ViewSpecification } from "@/shared/storage/views";

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
  firstToken?: any
  reverse?: boolean
}

export interface PaginationWithResult<T> extends Pagination<T> {
  results: T[]
  nextStartToken?: any
  prevStartToken?: any
}

export type SyncStatus = "Success" | "Failure";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private pouchRemote: PouchDB.Database | null = null;
  private pouchLocal: PouchDB.Database | null = null;

  private logger = createLogger("StorageService");

  private dbSubject = new BehaviorSubject<PouchDB.Database | null>(null);
  private changeSubject = new BehaviorSubject<BaseDocument | null>(null);

  public readonly db$ = this.dbSubject.asObservable()
    .pipe(filter(db => !!db));
  public readonly changes$ = this.changeSubject.asObservable()
    .pipe(filter(change => !!change));

  public constructor(
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
        return dbValue;
      }),
      switchMap(db => from(Promise.all([this.createIndices(db!!), this.createViews(db!!)]))),
    ).subscribe();
  }

  private async createIndices(db: PouchDB.Database) {
    if (!db) {
      return;
    }

    try {
      this.logger.debug("Indices created", await Promise.all(indices.map(i => db.createIndex(i))));
    } catch (e) {
      this.logger.warn("Index creation failed", e);
    }
  }

  private async createViews(db: PouchDB.Database) {
    if (!db) {
      return;
    }

    try {
      this.logger.debug("Views created", await Promise.all(views.map(view => this.createView(db, view))));
    } catch (e) {
      this.logger.warn("View creation failed", e);
    }
  }

  private buildViewDocumentName(viewName: string): string {
    return `view_${viewName}`;
  }

  private async createView(db: PouchDB.Database, view: ViewSpecification) {
    const finalViewDoc: { [key: string]: string } = {
      map: stringifyView(view.map),
    };

    if (view.reduce) {
      finalViewDoc['reduce'] = stringifyView(view.reduce);
    }

    const finalDesignDoc = {
      views: {
        [this.buildViewDocumentName(view.name)]: finalViewDoc,
      },
    };

    return await db.upsert(`_design/${this.buildViewDocumentName(view.name)}`, (designDoc: { [key: string]: any }) => {
      const viewDoc = (designDoc['views'] || {})[this.buildViewDocumentName(view.name)];

      // if no view exists, nothing to update, always create new one
      if (!viewDoc) {
        return finalDesignDoc;
      }

      // in case there is a reduce, for the view, update if has changed
      if ('reduce' in finalViewDoc && finalViewDoc['reduce'] != viewDoc['reduce']) {
        return finalDesignDoc;
      }

      // map is always there for a view, update if has changed
      if (finalViewDoc['map'] != viewDoc['map']) {
        return finalDesignDoc;
      }

      // no changes, no update
      return false;
    });
  }

  private async find<T>(db: PouchDB.Database, filter: PouchDB.Find.FindRequest<any>): Promise<T[]> {
    const results = await db.find(filter);
    return results.docs as unknown as T[];
  }

  private getSortOperator(reverseResults: boolean) {
    return reverseResults ? "$lt" : "$gt";
  }

  private getSortOrder(reverseResults: boolean) {
    return reverseResults ? "desc" : "asc";
  }

  private getPaginateField(result: BaseDocument, paginateField: string) {
    return (result as Record<string, string>)[paginateField];
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
        return fallbackDbName
          ? of(fallbackDbName)
          : throwError(() => new Error("No fallback database found"));
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
        this.initSync();
      }));
  }

  private onSyncError(e: Error) {
    this.logger.warn("Error while syncing", e);
  }

  private setUpContinuousSync() {
    this.pouchLocal!!
      .sync(this.pouchRemote!!, {
        live: true,
        retry: true,
      })
      .on("change", e => this.onChange(e))
      .on('error', e => this.onSyncError(e as Error));
  }

  // TODO: Create helper method for querying views

  /**
   * Build document id by entity type and id
   * @param entityType Entity type to use
   * @param id Unique identifier for the document
   */
  public build_id(entityType: string, id: string): string {
    // do not prefix already prefixed ids
    if (id.startsWith(entityType)) {
      return id;
    }

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
      .pipe(
        switchMap(db => from(db!.get(this.build_id(entityType, id), {latest: true}))
          .pipe(catchError(e => throwError(e))),
        ),
      ) as Observable<T>;
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
      this.logger.warn(`Get all documents of entityType ${entityType}. Please do not use this for production if you are not sure what you are doing, as it may slow down the app!`);
    }
    return this.db$
      .pipe(
        mergeMap(db => from(this.find<T>(db!!, {
            limit,
            selector: {
              $entityType: entityType,
              ...selector,
            },
            sort,
          },
        ) as any)),
      ) as Observable<T[]>;
  }

  public query<T>(viewName: string): Observable<T[]> {
    return this.db$
      .pipe(
        mergeMap(db => from(db!!.query(this.buildViewDocumentName(viewName), {
          group: true,
        }) as any)),
      ) as Observable<T[]>;
  }

  public paginate<T extends BaseDocument>(entityType: string, selector: PouchDB.Find.Selector, sort: PouchDBFindSort, pagination: Pagination<T>): Observable<PaginationWithResult<T>> {
    const {startToken, paginateField, pageSize, reverse, firstToken} = pagination;
    let pageSizeToFetch = pageSize + 1;
    if (startToken) {
      selector = {
        ...selector,
        [paginateField]: {
          [this.getSortOperator(Boolean(reverse))]: startToken,
        },
      };
    }

    sort!!.push({
      [paginateField]: this.getSortOrder(Boolean(reverse)),
    });

    return this.getForEntityType(entityType, selector, sort, pageSizeToFetch)
      .pipe(switchMap(results => {
        const resultCount = results.length;
        const hasResults = results.length > 0;
        const canPaginate = resultCount > pageSize;

        // first result always without sorting
        const firstResultPaginateField = hasResults ? this.getPaginateField(results[0], paginateField) : undefined;

        // prepare results
        results = chain(results)
          // remove preflight result
          .slice(0, pageSize)
          // sort by paginate field also if we go reverse
          .sortBy(result => this.getPaginateField(result, paginateField))
          .value();

        // we need to get the last result after sorting
        const lastResultPaginateField = hasResults ? this.getPaginateField(results[results.length - 1], paginateField) : undefined;

        // store if we are on the first page possible
        const isFirstPage = firstToken == firstResultPaginateField;

        // if reverse or can paginate -> enable forward
        const canGoForward = reverse || canPaginate;

        // if reverse and can paginate or can go forward we can go back
        const canGoBack = (reverse && canPaginate) || !reverse;

        return of({
          // pass initial firstToken or seed with first db result if this is the first paginate call
          firstToken: firstToken ?? firstResultPaginateField,
          // for next page if we have any result left to paginate
          nextStartToken: canGoForward ? lastResultPaginateField : undefined,
          pageSize,
          paginateField,
          // for previous page, if there are any, or we are in reverse mode and are not already at the start
          prevStartToken: startToken && canGoBack && !isFirstPage ? firstResultPaginateField : undefined,
          results,
          startToken,
        } as PaginationWithResult<T>);
      }));
  }

  public getAll<T extends BaseDocument>(entityType: string, selector ?: PouchDB.Find.Selector, sort ?: PouchDBFindSort): Observable<T[]> {
    return this.getForEntityType(entityType, selector || {}, sort);
  }

  public onChange(e: PouchDB.Replication.SyncResult<any>) {
    const change = e.change;
    if (!change.ok || change.errors.length > 0) {
      return;
    }

    this.logger.debug("Change occurred", change);

    change.docs
      .filter(d => !!d.$entityType)
      .forEach(d => this.changeSubject.next(d));

    change.docs
      .filter(d => d._deleted)
      .map(d => ({...d, $entityType: d._id.split(":")[0]}))
      .forEach(d => this.changeSubject.next(d));
  }

  public initSync(): Observable<SyncStatus> {
    return new Observable<SyncStatus>(subscriber => {
      this.pouchLocal!!.sync(this.pouchRemote!!)
        .on("complete", () => {
          this.setUpContinuousSync();
          subscriber.next("Success");
          subscriber.complete();
        })
        .on("error", e => {
          subscriber.error(e as Error);
          subscriber.complete();
        });
    });
  }

  public delete<T>(document: T): Observable<boolean> {
    return this.db$
      .pipe(
        switchMap(db => from(db!!.remove(document as any as PouchDB.Core.RemoveDocument))),
        switchMap(res => res.ok ? of(true) : throwError(() => new Error(`Unable to delete document with id ${res.id} at revision ${res.rev}`))),
      );
  }

}
