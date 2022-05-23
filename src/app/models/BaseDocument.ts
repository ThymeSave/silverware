/**
 * Base interface for **ALL** ThymeSave pouch DB entities
 */
export interface BaseDocument extends Partial<PouchDB.Core.IdMeta>{
  $entityType?: string;
}
