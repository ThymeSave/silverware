import { InventoryChangeEntity, InventoryChangeService } from "@/inventory/services/inventory-change.service";
import { BaseDocument } from "@/models/BaseDocument";
import { ShoppingListItemEntity } from "@/shopping-lists/services/shopping-list-item.service";

/**
 * Emit function built in by CouchDB
 * Check for more details here: https://docs.couchdb.org/en/3.2.2-docs/query-server/javascript.html#emit
 * @param key The view key
 * @param value The value keys associated value
 */
function emit(key: unknown, value: unknown): [typeof key, typeof value] {
  // method stub for couchdb functionality
  return [key, value];
}

/**
 * Sum function built in by CouchDB
 * Check for more details here: https://docs.couchdb.org/en/3.2.2-docs/query-server/javascript.html#sum
 * @param values
 */
function sum(values: unknown[]): number {
  // method stub for couchdb functionality
  return -1;
}

/**
 * Map creates new view value for given document
 */
export type MapFunction = (() => void) | ((document: BaseDocument) => void)

/**
 * Reduce further aggregates data as created by map
 */
export type ReduceFunction = (keys: string[], values: unknown[], reReduce: boolean) => unknown

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
  {
    map(doc: InventoryChangeEntity | ShoppingListItemEntity) {
      // @ts-ignore we can be sure which type the item is based on $entityType
      if ((doc.$entityType != "shopping-list-item" && doc.done) && doc.$entityType != "inventory-change") {
        return;
      }

      // @ts-ignore check if has valid amount and ingredientKey to avoid crash due to malformed data
      if (isNaN(doc.amount) || !doc.ingredientKey) {
        return;
      }

      // @ts-ignore Emit with the correct fields, we can be sure all are set based on pre-checks
      emit([doc.ingredientKey, doc.unit], parseFloat(doc.amount));
    },
    name: "inventory",
    reduce(keys: string[], values: number[], reReduce: boolean) {
      return sum(values);
    },
  },
] as ViewSpecification[];
