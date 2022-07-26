import { Component, OnInit } from '@angular/core';
import { Recipe } from "@thymesave/core";

import { RecipeService } from "@/recipes/services/recipe.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
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
