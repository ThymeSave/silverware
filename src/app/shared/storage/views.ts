import { BaseDocument } from "@/models/BaseDocument";

/**
 * Emit function built in by CouchDB
 * Check for more details here: https://docs.couchdb.org/en/3.2.2-docs/query-server/javascript.html#emit
 * @param key The view key
 * @param value The value keys associated value
 */
function emit(key: unknown, value: unknown) {
  // method stub for couchdb functionality
}

/**
 * Map creates new view value for given document
 */
export type MapFunction = (() => void) | ((document: BaseDocument) => void)

/**
 * Reduce further aggregates data as created by map
 */
export type ReduceFunction = (keys: string[], values: BaseDocument[], rereduce: boolean) => unknown

/**
 * Specification for views to be created in CouchDB, this will be transformed to the underlying the design document structure
 */
export interface ViewSpecification {
  /**
   * Name for the view, will also be used for the design document and must be unique application wide
   */
  name: string
  /**
   * Map Function to group data
   */
  map: MapFunction
  /**
   * Reduce function to aggregate grouped data
   */
  reduce?: ReduceFunction
}

/**
 * Create string representation for couchdb view function
 *
 * It will remove the function name and append function in front of the stringified method making it usable for CouchDB
 * @param func CouchDB function
 */
export function stringifyView(func: MapFunction | ReduceFunction) {
  return `function ${func.toString().replace(func.name, "")}`;
}

export default [
  // TODO Replace with actual view for inventory
  {
    map(doc) {
      emit(doc._id, "test1");
    },
    name: "testView",
  },
] as ViewSpecification[];
