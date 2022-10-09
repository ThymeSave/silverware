import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingList } from "@thymesave/core";

import { createMobileBreakpointObserver } from "@/shared/util/breakpoint";
import { ShoppingListService } from "@/shopping-lists/services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-selector',
  styleUrls: ['./shopping-list-selector.component.scss'],
  templateUrl: './shopping-list-selector.component.html',
})
export class ShoppingListSelectorComponent implements OnInit {

  @Input() public align: "row" | "column" = "column";
  @Input() public initialItemUuid !: string;

  @Output() public listChanged = new EventEmitter<ShoppingList>();

  public activeItemUuid !: string;
  public shoppingLists: ShoppingList[] = [];

  public isMobile$ = createMobileBreakpointObserver(this.breakPointObserver);

  constructor(private shoppingListService: ShoppingListService,
              private breakPointObserver : BreakpointObserver) {
    this.listChanged.subscribe(list => this.activeItemUuid = list.uuid);
    this.shoppingListService.changes$
      .subscribe(() => this.fetchLists());
    this.fetchLists();
  }

  public fetchLists() {
    return this.shoppingListService.getAll()
      .subscribe(lists => {
        this.shoppingLists = lists;
        if (lists.length > 0) {
          this.selectItemByUuid(!this.activeItemUuid ? this.shoppingLists[0].uuid : this.activeItemUuid);
        }
      });
  }

  private selectItemByUuid(uuid : string) {
    this.activeItemUuid = uuid;
    const selected = this.shoppingLists.find(l => l.uuid == this.activeItemUuid);
    if (selected) {
      this.listChanged.next(selected);
    }
  }

  public ngOnInit(): void {
    this.selectItemByUuid(this.initialItemUuid);
  }

  public select(shoppingList: ShoppingList) {
    this.listChanged.next(shoppingList);
  }
}
