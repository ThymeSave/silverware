import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";

import { RecipeEntity, RecipeService } from "@/recipes/services/recipe.service";
import { LanguageService } from "@/shared/i18n/language.service";
import { NotificationService } from "@/shared/notifications/notification.service";

@Component({
  selector: 'app-get-recipe',
  styleUrls: ['./get-recipe.component.scss'],
  templateUrl: './get-recipe.component.html',
})
export class GetRecipeComponent {
  public id$ !: Observable<string>;
  public recipe ?: RecipeEntity;
  public notFound: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService,
              public languageService: LanguageService,
              private notificationService: NotificationService) {
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

  public recalculateServings(e: Event) {
    if (!this.recipe) {
      return;
    }

    const textField = e.currentTarget as HTMLInputElement;
    const newServings = parseInt(textField.value);
    this.recipeService.recalculateServings(this.recipe, newServings);
  }

  public tryLoadingRecipe(id: string) {
    this.recipeService.getLatest(id)
      .pipe(catchError(e => of(null)))
      .subscribe(r => {
        this.recipe = r ?? undefined;
        this.notFound = this.recipe == undefined;
      });
  }

  public deleteRecipe() {
    this.recipeService.delete(this.recipe!!)
      .pipe(
        tap(() => console.log("boo")),
        switchMap(() => of(true)),
        catchError(() => of(false)),
      )
      .subscribe(deleted => {
        if (deleted) {
          this.notificationService.sendNotification({
            message: "notifications.success.recipe_deleted",
            type: "Success",
          });
          this.router.navigate([
            "/recipes",
          ]);
        } else {
          this.notificationService.sendNotification({
            message: "notifications.error.delete_recipe_failed",
            type: "Error",
          });
        }
      });
  }
}
