import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-image',
  styleUrls: ['./recipe-image.component.scss'],
  templateUrl: './recipe-image.component.html',
})
export class RecipeImageComponent {
  @Input() public imageSrc ?: string;
  @Input() public imageAlt ?: string;

  @Input() public width : Number | string = "100%";
  @Input() public height : Number | string = "100%";
  @Input() public objectFit : string = "cover";

  constructor() {
  }
}
