import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-image',
  styleUrls: ['./recipe-image.component.scss'],
  templateUrl: './recipe-image.component.html',
})
export class RecipeImageComponent {
  @Input() public imageSrc ?: string;
  @Input() public imageAlt ?: string;

  @Input() public width : number | string = "100%";
  @Input() public height : number | string = "100%";
  @Input() public objectFit : string = "cover";
}
