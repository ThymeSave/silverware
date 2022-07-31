import { Component, OnInit } from '@angular/core';
import { Recipe } from "@thymesave/core";

import { Search } from "@/recipes/overview/search-bar/search-bar.component";
import { RecipeService } from "@/recipes/services/recipe.service";
import { Pagination, PaginationWithResult } from "@/shared/storage/storage.service";

@Component({
  selector: 'app-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  public recipes ?: Recipe[];

  private pagination !: Pagination<Recipe>;

  constructor(public recipeService: RecipeService) {
  }

  public search(search: Search) {

  }

  public paginate() {
    if (this.pagination.startToken) {
      this.recipeService.getPaginated({}, this.pagination)
        .subscribe(pagination => this.onPaginated(pagination));
    }
  }

  private onPaginated(pagination: PaginationWithResult<Recipe>) {
    console.log("Pagination", pagination);
    this.pagination = pagination;
    this.pagination.startToken = pagination.nextStartToken;
    this.recipes = pagination.results;
  }

  ngOnInit(): void {
    this.recipeService.getPaginated({}, {
      pageSize: 10,
      paginateField: "_id",
    })
      .subscribe(pagination => this.onPaginated(pagination));
    //   this.recipeService.getAll()
    //     .subscribe(recipes => this.recipes = recipes);
  }

}
