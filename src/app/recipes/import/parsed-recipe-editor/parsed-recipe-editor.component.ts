import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { createLogger } from "@helper/log";
import { ParsedRecipe } from "@thymesave/core";

@Component({
  selector: 'app-parsed-recipe-editor',
  templateUrl: './parsed-recipe-editor.component.html',
  styleUrls: ['./parsed-recipe-editor.component.scss'],
})
export class ParsedRecipeEditorComponent {
  public logger = createLogger("ParsedRecipeEditorComponent");

  private _recipe !: ParsedRecipe;

  @Input() set recipe(value: ParsedRecipe) {
    this._recipe = value;
    if (!this._recipe) {
      return;
    }
    this.form.patchValue({
      title: this._recipe.title,
      description: this._recipe.description,
    });
    this._recipe.ingredients
      .map(ingredient => this.fb.group({
        "translationKey": this.fb.control(ingredient.ingredient),
        "minAmount": this.fb.control(ingredient.minAmount),
        "maxAmount": this.fb.control(ingredient.maxAmount),
        "unit": this.fb.control(ingredient.unit),
        "isRange": this.fb.control(ingredient.isRange),
      }))
      .forEach(item => this.ingredients.push(item));
    this._recipe.instructions
      .map(instruction => this.fb.group({
        'text': this.fb.control(instruction.text),
      }))
      .forEach(item => this.instructions.push(item));
  }

  get recipe(): ParsedRecipe {
    return this._recipe;
  }

  constructor(private fb: FormBuilder,
              public router: Router) {
  }

  public form = this.fb.group({
    title: this.fb.control(""),
    description: this.fb.control(""),
    ingredients: this.fb.array([]),
    instructions: this.fb.array([]),
  });

  get ingredients() {
    return this.form.controls["ingredients"] as any as FormArray<FormGroup>;
  }

  get instructions() {
    return this.form.controls["instructions"] as any as FormArray<FormGroup>;
  }

  public addIngredient() {
    this.ingredients.push(
      this.fb.group({
        "translationKey": this.fb.control(""),
        "minAmount": this.fb.control(0),
        "maxAmount": this.fb.control(0),
        "unit": this.fb.control(""),
      }),
    );
  }

  public addInstruction() {
    this.instructions.push(this.fb.group({
      text: this.fb.control(""),
    }));
  }

  private swap(formArray: FormArray<FormGroup>, previousIndex: number, newIndex: number) {
    let tempVal = formArray.at(previousIndex);
    formArray.removeAt(previousIndex);
    formArray.insert(newIndex,tempVal);
  }

  public droppedIngredient(event: CdkDragDrop<any[]>) {
    this.swap(this.ingredients, event.previousIndex, event.currentIndex);
  }

  public droppedInstruction(event: CdkDragDrop<any[]>) {
    this.swap(this.instructions, event.previousIndex, event.currentIndex);
  }

  public async save() {
    this.logger.info(this.form.getRawValue());
    await this.router.navigate(["/recipes"]);
  }
}
