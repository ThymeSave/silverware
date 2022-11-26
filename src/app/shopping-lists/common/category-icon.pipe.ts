import { Pipe, PipeTransform } from '@angular/core';
import { categoryIcons, ingredients } from "@thymesave/ingredients";

@Pipe({
  name: 'categoryIcon',
})
export class CategoryIconPipe implements PipeTransform {
  private readonly FALLBACK_ICON = "grocery_bag";

  public transform(ingredientKey: string): string {
    if (!(ingredientKey in ingredients)) {
      return this.FALLBACK_ICON;
    }
    const category = ingredients[ingredientKey].category;
    return categoryIcons.get(category) ?? this.FALLBACK_ICON;
  }

}
