import { Injectable } from "@angular/core";
import { ShoppingListItem, ShoppingListFilter } from "@thymesave/core";
import { catchError, map, switchMap, throwError } from "rxjs";

import { BaseDocument } from "@/models/BaseDocument";
import { EntityService } from "@/shared/storage/base";
import { StorageService } from "@/shared/storage/storage.service";

export interface ShoppingListFilterEntity extends BaseDocument, ShoppingListFilter {

}

@Injectable({
  providedIn: 'root',
})
export class ShoppingListFilterService extends EntityService<ShoppingListFilterEntity> {
  public constructor(storageService: StorageService) {
    super(storageService);
  }

  private filterItem(filter: ShoppingListFilter, item: ShoppingListItem): boolean {
    return filter.alwaysIgnore.indexOf(item.ingredientKey) === -1;
  }

  private createDefaultFilter() {
    return this
      .insert({
        alwaysIgnore: [],
      }, "default")
      .pipe(
        switchMap(() => this.getLatest("default")),
      );
  }

  public getFilter() {
    return this
      .getLatest("default")
      .pipe(
        catchError(e => {
          if ('name' in e) {
            return this.createDefaultFilter();
          } else {
            return throwError(e);
          }
        }),
      );
  }

  public filterItems(items: ShoppingListItem[]) {
    return this.getFilter()
      .pipe(
        map(filter => items.filter(item => this.filterItem(filter, item))),
      );
  }

  public get entityType(): string {
    return "shopping-list-filter";
  }

  public addIgnore(ingredientKey: string) {
    return this.upsert("default", doc => {
      if (doc.alwaysIgnore.indexOf(ingredientKey) == -1) {
        doc.alwaysIgnore.push(ingredientKey);
      }
      return doc;
    });
  }

  public removeIgnore(ingredientKey: string) {
    return this.upsert("default", doc => {
      let index = -1;
      do {
        index = doc.alwaysIgnore.indexOf(ingredientKey);
        if (index !== -1) {
          doc.alwaysIgnore.splice(index, 1);
        }
      } while (index != -1);
      return doc;
    });
  }
}
