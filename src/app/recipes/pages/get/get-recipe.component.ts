import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "@thymesave/core";
import { catchError, map, Observable, of, switchMap, throwError } from "rxjs";

import { RecipeService } from "@/recipes/services/recipe.service";

@Component({
  selector: 'app-get-recipe',
  styleUrls: ['./get-recipe.component.scss'],
  templateUrl: './get-recipe.component.html',
})
export class GetRecipeComponent {
  public id$ !: Observable<string>;
  public recipe ?: Recipe;
  public notFound: boolean = false;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
    this.id$ = this.route.params
      .pipe(map(params => (params as any).id as string));
    this.id$.subscribe(this.tryLoadingRecipe.bind(this));
  }

  public get backgroundStyle() {
    if (this.recipe?.image) {
      return {
        'background-image': 'url(' + this.recipe.image ?? +')',
      };
    }

    return {
      'background': 'linear-gradient(to bottom, #38ef7d, #11998e)',
    };
  }

  public tryLoadingRecipe(id: string) {
    this.recipeService.getLatest(id)
      .pipe(catchError(e => of(null)))
      .subscribe(r => {
        this.recipe = r ?? undefined;
        this.notFound = this.recipe == undefined;
      });
  }
}
