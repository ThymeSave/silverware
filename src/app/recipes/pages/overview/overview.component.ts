import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Recipe } from "@thymesave/core";

import { Search } from "@/recipes/overview/search-bar/search-bar.component";
import { RecipeEntity, RecipeService } from "@/recipes/services/recipe.service";
import { Pagination, PaginationWithResult } from "@/shared/storage/storage.service";

const originalWindow = window;

@Component({
  selector: 'app-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  public recipes ?: RecipeEntity[];

  private pagination !: Pagination<Recipe>;
  public nextToken ?: string;
  public prevToken ?: string;

  private search: Search | null = null;

  constructor(public recipeService: RecipeService,
              private readonly viewport: ViewportScroller) {
  }

  public searchSubmitted(search: Search) {
    this.search = search;
    this.hydrateRecipes();
  }

  public get selector(): PouchDB.Find.Selector {
    if (this.search != null) {
      return {
        title: {
          $regex: new RegExp(`.*${this.search.fullText}.*`, "i"),
        },
      };
    }

    return {};
  }

  public next() {
    this.recipeService
      .getPaginated(this.selector, {
        ...this.pagination,
        startToken: this.nextToken,
      })
      .subscribe(pagination => {
        this.onPaginated(pagination);
        this.scrollToTop();
      });
  }

  public prev() {
    this.recipeService
      .getPaginated(this.selector, {
        ...this.pagination,
        reverse: true,
        startToken: this.prevToken,
      })
      .subscribe(pagination => {
        this.onPaginated(pagination);
        this.scrollToTop();
      });
  }

  private onPaginated(pagination: PaginationWithResult<Recipe>) {
    this.pagination = pagination;
    this.recipes = pagination.results;
    this.prevToken = pagination.prevStartToken;
    this.nextToken = pagination.nextStartToken;

  }

  private hydrateRecipes() {
    this.recipeService
      .getPaginated(this.selector, {
        pageSize: 24,
        paginateField: "_id",
        reverse: false,
      })
      .subscribe(this.onPaginated.bind(this));
  }

  public ngOnInit(): void {
    this.hydrateRecipes();
  }

  public scrollToTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }
}
