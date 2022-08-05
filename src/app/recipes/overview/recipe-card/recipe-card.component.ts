import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from "@thymesave/core";

@Component({
  selector: 'app-recipe-card',
  styleUrls: ['./recipe-card.component.scss'],
  templateUrl: './recipe-card.component.html',
})
export class RecipeCardComponent {
  @Input() public recipe!: Recipe;

  constructor() {
  }

}
