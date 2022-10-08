import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";

import { RecipeEntity, RecipeService } from "@/recipes/services/recipe.service";
import { LanguageService } from "@/shared/i18n/language.service";
import { NotificationService } from "@/shared/notifications/notification.service";
import { ShoppingListItemService } from "@/shopping-lists/services/shopping-list-item.service";

type RecipeMode = "Present" | "Cook"

@Component({
  selector: 'app-get-recipe',
  styleUrls: ['./get-recipe.component.scss'],
  templateUrl: './get-recipe.component.html',
})
export class GetRecipeComponent {
  public id$ !: Observable<string>;
  public recipe ?: RecipeEntity;
  public notFound: boolean = false;

  public mode : RecipeMode = "Present";

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService,
              private shoppingListItemService : ShoppingListItemService,
              public languageService: LanguageService,
              private notificationService: NotificationService) {
    this.id$ = this.route.params
      .pipe(map(params => (params as any).id as string));
    this.id$.subscribe(this.tryLoadingRecipe.bind(this));
  }

  public get isCookMode() {
    return this.mode == "Cook";
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
    const newServings = parseFloat(textField.value);
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

  public addToShoppingList() {
    const recipe = this.recipe!!;
    // TODO Set actual shopping list selected by user
    this.shoppingListItemService.addRecipeToShoppingList({
      uuid: "6c3092f2-5625-442d-a756-f6352f132127",
    },recipe).subscribe(() => {
      this.notificationService.sendNotification({
        message: 'notifications.success.added_to_shopping_list',
        type: 'Success',
      });
    });
  }
}
