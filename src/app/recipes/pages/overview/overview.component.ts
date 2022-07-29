import { Component, OnInit } from '@angular/core';
import { Recipe } from "@thymesave/core";

import { RecipeService } from "@/recipes/services/recipe.service";

@Component({
  selector: 'app-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  constructor(public recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.getAll()
      .subscribe(recipes => this.recipes = recipes);
  }

  public recipes ?: Recipe[];
}
