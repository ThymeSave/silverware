import PouchDB from "pouchdb";

/**
 * Base interface for **ALL** ThymeSave pouch DB entities
 */
export interface BaseDocument extends Partial<PouchDB.Core.IdMeta>, Partial<PouchDB.Core.GetMeta> {
  $entityType?: string;
  _id? : string
}
