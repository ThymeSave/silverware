import PouchDB from 'pouchdb';
import plugin from 'pouchdb-upsert'

import {
  BehaviorSubject,
  filter,
  firstValueFrom,
  from,
  lastValueFrom,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { BaseDocument } from '../../models/BaseDocument';

interface DbInitializeResponse {
  dbName: string;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  private pouchRemote: PouchDB.Database | null = null;
  private pouchLocal: PouchDB.Database | null = null;

  private dbSubject = new BehaviorSubject<PouchDB.Database | null>(null);
  db$ = this.dbSubject.asObservable().pipe(filter(db => !!db));

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    // Register pouch db upsert plugin
    PouchDB.plugin(plugin);
    // Initialize pouch db instance
    this.authService.isAuthenticated$.pipe(
      switchMap(_ => this.authService.getIdTokenClaims()),
      switchMap(claims => claims ? this.init(claims.__raw) : of(null)),
      map(returnValue => {
        const dbValue = returnValue ? this.pouchLocal : null;
        this.dbSubject.next(dbValue);
      }),
    ).subscribe();
  }

  /**
   * Upserts a base document entity and corrects the entitys entitiyType based on the provided functions parameter.
   *
   * @param {string} entityType The base type for this entity
   * @param {string} id The unique identifier for this document
   * @param {PouchDB.UpsertDiffCallback<BaseDocument>} diffFunc Used to evaluate if a update needs to happen
   * @returns
   */
  upsert(entityType: string, id: string, diffFunc: PouchDB.UpsertDiffCallback<BaseDocument>): Observable<PouchDB.UpsertResponse> {
    console.debug("Upsert doc of entity type",entityType, "with id", id)
    return this.db$.pipe(switchMap(db =>
      from(db!.upsert<BaseDocument>(`${entityType}:${id}`, doc => {
        const diffFuncResult = diffFunc(doc);
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

  getLatest<T extends BaseDocument>(entityType: string, id: string) : Observable<T> {
    // @ts-ignore
    return this.db$
      .pipe(switchMap(db => from(db!.get(`${entityType}:${id}`, {latest: true}))))
  }

  private init(token: string): Observable<DbInitializeResponse> {
    return this.http.put<DbInitializeResponse>(`${environment.funnelBaseUrl}/self-service/db`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).pipe(tap((dbResponse) => {
      this.pouchRemote = new PouchDB(`${environment.funnelBaseUrl}/service/couchdb/${dbResponse.dbName}`, {
        fetch(url, options) {
          options!.credentials = 'omit';
          (options?.headers! as any).set('Authorization', `Bearer ${token}`);
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
