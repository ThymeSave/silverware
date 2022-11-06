import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingList } from "@thymesave/core";
import { BehaviorSubject, filter, map, Observable } from "rxjs";

import { createMobileBreakpointObserver } from "@/shared/util/breakpoint";
import {
  GroupedShoppingListItems,
  ShoppingListItemService,
} from "@/shopping-lists/services/shopping-list-item.service";
import { ShoppingListService } from "@/shopping-lists/services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-detail',
  styleUrls: ['./shopping-list-detail.component.scss'],
  templateUrl: './shopping-list-detail.component.html',
})
export class ShoppingListDetailComponent {
  private _list !: ShoppingList;
  private items = new BehaviorSubject<GroupedShoppingListItems[]>([]);
  private items$ = this.items.asObservable();

  public openItems$ = this.withDoneTransformer(this.items$, false);
  public doneItems$ = this.withDoneTransformer(this.items$, true);
  public isMobile$ = createMobileBreakpointObserver(this.breakPointObserver);

  @Input()
  public set list(val) {
    this._list = val;
    this.loadItems();
  }

  @Output() public deleted = new EventEmitter<void>();

  public get list() {
    return this._list;
  }

  public constructor(private shoppingListItemService: ShoppingListItemService,
              private shoppingListService: ShoppingListService,
              private breakPointObserver: BreakpointObserver) {
    shoppingListItemService.changes$
      .pipe(filter(item => (item as any)._deleted || item.shoppingList == this._list.uuid))
      .subscribe(_ => this.loadItems());
  }

  private withDoneTransformer(observable: Observable<GroupedShoppingListItems[]>, doneState: boolean): Observable<GroupedShoppingListItems[]> {
    return observable.pipe(
      map(group => group
        .map(group => ({
          ...group,
          items: group.items.filter(i => i.done == doneState),
        }))
        .filter(g => g.items.length > 0),
      ),
    );
  }

  private loadItems() {
    this.shoppingListItemService.getItems(this.list)
      .pipe(map(items => this.shoppingListItemService.groupByIngredientAndUnit(items)))
      .subscribe(items => this.items.next(items));
  }

  public trackByFn(index: any, item: GroupedShoppingListItems) {
    return item.ingredientKey + "." + item.unit;
  }

  public deleteList() {
    this.shoppingListService.delete(this.list)
      .subscribe(() => this.deleted.next());
  }
}
