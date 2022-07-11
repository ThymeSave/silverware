import { Service } from "./services";

/**
 * Context object containing handy APIs and information at runtime
 */
export interface ComponentContext {
  getService<T extends Service>(name : string) : T
}
