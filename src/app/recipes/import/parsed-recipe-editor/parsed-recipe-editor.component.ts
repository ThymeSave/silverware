import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ParsedRecipe } from "@thymesave/core";

@Component({
  selector: 'app-parsed-recipe-editor',
  templateUrl: './parsed-recipe-editor.component.html',
  styleUrls: ['./parsed-recipe-editor.component.scss'],
})
export class ParsedRecipeEditorComponent {
  private _recipe !: ParsedRecipe;

  @Input() set recipe(value: ParsedRecipe) {
    this._recipe = value;
    if (!this._recipe) {
      return;
    }
    this.form.patchValue({
      title: this._recipe.title,
    });
    this._recipe.ingredients
      .map(ingredient => this.fb.group({
        // @ts-ignore TODO Fix to actually display chooser
        "translationKey": this.fb.control(ingredient.ingredient),
        "minAmount": this.fb.control(ingredient.minAmount),
        "maxAmount": this.fb.control(ingredient.maxAmount),
        "unit": this.fb.control(ingredient.unit),
      }))
      .forEach(item => this.ingredients.push(item as any as FormGroup));
    this._recipe.instructions.map(instruction => this.fb.control(instruction.text))
      .forEach(item => this.instructions.push(item as any as FormControl));
  }

  get recipe(): ParsedRecipe {
    return this._recipe;
  }

  public form = this.fb.group({
    title: this.fb.control(""),
    ingredients: this.fb.array([]),
    instructions: this.fb.array([]),
  });

  get ingredients() {
    return this.form.controls["ingredients"] as any as FormArray<FormGroup>;
  }

  get instructions() {
    return this.form.controls["instructions"] as any as FormArray<FormControl>;
  }

  public addIngredient() {
    this.ingredients.push(
      this.fb.group({
        "translationKey": new FormControl(""),
        "minAmount": new FormControl(0),
        "maxAmount": new FormControl(0),
        "unit": new FormControl(""),
      }),
    );
  }

  constructor(private fb: FormBuilder) {
  }

}
