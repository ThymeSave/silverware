import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { createLogger } from "@helper/log";
import { Recipe } from "@thymesave/core";
import { filter, first, map } from "rxjs";

import { Search } from "@/recipes/overview/search-bar/search-bar.component";
import { RecipeEntity, RecipeService } from "@/recipes/services/recipe.service";
import { Pagination, PaginationWithResult } from "@/shared/storage/storage.service";

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

  private readonly logger = createLogger("OverviewComponent");

  public search: Search | null = null;

  constructor(public recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private readonly viewport: ViewportScroller) {
    route.queryParamMap
      .pipe(
        first(),
        map(params => params.get("search")),
        filter(param => !!param),
        map(rawSearch => this.parseSearch(rawSearch!!)),
      )
      .subscribe();

    recipeService.changes$
      .subscribe(() => this.hydrateRecipes());
  }

  private parseSearch(raw: string) {
    try {
      this.searchSubmitted(JSON.parse(atob(raw)) as Search);
    } catch (e) {
      this.logger.warn("Failed to parse search from query", raw);
    }
  }

  public searchSubmitted(search: Search | null) {
    this.search = search;
    this.router.navigate([], {
      queryParams: {
        search: btoa(JSON.stringify(search)),
      },
    });
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

    return {
      title: {
        $gt: "",
      },
    };
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
    this.logger.debug("Paginated", pagination);
    this.pagination = pagination;
    this.recipes = pagination.results;

    if (pagination.results.length == 0) {
      return;
    }

    this.prevToken = pagination.prevStartToken;
    this.nextToken = pagination.nextStartToken;
  }

  private hydrateRecipes() {
    this.recipeService
      .getPaginated(this.selector, {
        pageSize: 24,
        paginateField: "title",
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

  public openRecipe(recipe: RecipeEntity) {
    this.router.navigate([
      `/recipes/${recipe._id!!.replace("recipes:", "")}`,
    ]);
  }
}
