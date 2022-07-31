import { Component, OnInit } from '@angular/core';
import { Recipe } from "@thymesave/core";

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
  private nextToken !: string;
  private prevToken !: string;

  public all !: RecipeEntity[];

  constructor(public recipeService: RecipeService) {
  }

  public search(search: Search) {

  }

  public next() {
    this.recipeService.getPaginated({}, {
      ...this.pagination,
      startToken: this.nextToken,
    }, [
      {"_id": "asc"},
    ]).subscribe(pagination => this.onPaginated(pagination));
  }

  public prev() {
    this.recipeService.getPaginated({}, {
      ...this.pagination,
      reverse: true,
      startToken: this.prevToken,
    }, [
      {"_id": "desc"},
    ]).subscribe(pagination => this.onPaginated(pagination));
  }

  private onPaginated(pagination: PaginationWithResult<Recipe>) {
    // @ts-ignore
    console.log("Pagination", pagination.results.map(r => {
      const found = this.all.find(rAll => rAll._id == (r as any)._id);
      // @ts-ignore
      return this.all.indexOf(found);
    }));
    this.pagination = pagination;
    this.recipes = pagination.results;
    this.nextToken = pagination.nextStartToken;
    this.prevToken = pagination.prevStartToken;
  }

  ngOnInit(): void {
    this.recipeService.getAll()
      .subscribe(r =>{
        this.all = r;
      });

    this.recipeService.getPaginated({}, {
      pageSize: 2,
      paginateField: "_id",
      reverse: false,
    }, [{"_id": "asc"}])
      .subscribe(pagination => this.onPaginated(pagination));
  }

}
