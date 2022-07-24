import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { createLogger } from "@helper/log";
import { Ingredient, Instruction, ParsedRecipe, ParsedRecipeIngredient, RawRecipe } from "@thymesave/core";

@Component({
  selector: 'app-parsed-recipe-editor',
  templateUrl: './parsed-recipe-editor.component.html',
  styleUrls: ['./parsed-recipe-editor.component.scss'],
})
export class ParsedRecipeEditorComponent implements OnInit {
  public logger = createLogger("ParsedRecipeEditorComponent");

  private _recipe !: ParsedRecipe;

  @Input()
  set recipe(value: ParsedRecipe) {
    this._recipe = value;
    if (!this._recipe) {
      return;
    }
    this.initForm(this.recipe);
  }

  get recipe(): ParsedRecipe {
    return this._recipe;
  }

  constructor(private fb: FormBuilder,
              public router: Router) {
  }

  public form !: FormGroup;

  get ingredients() {
    return this.form.controls["ingredients"] as any as FormArray<FormGroup>;
  }

  get instructions() {
    return this.form.controls["instructions"] as any as FormArray<FormGroup>;
  }

  public ngOnInit() {
    this.initForm({});
  }

  private initForm(recipe: Partial<ParsedRecipe>) {
    const ingredients = recipe.ingredients ? recipe.ingredients.map(this.mapIngredientToFormGroup.bind(this)) : [];
    const instructions = recipe.instructions ? recipe.instructions.map(this.mapInstructionToFormGroup.bind(this)) : [];

    this.form = this.fb.group({
      title: this.fb.control(recipe.title),
      description: this.fb.control(recipe.description),
      ingredients: this.fb.array(ingredients),
      instructions: this.fb.array(instructions),
    });
  }

  private mapInstructionToFormGroup(instruction: Partial<Instruction>) {
    return this.fb.group({
      'text': this.fb.control(instruction.text ?? ""),
    });
  }

  private mapIngredientToFormGroup(ingredient: Partial<ParsedRecipeIngredient>) {
    return this.fb.group({
      "translationKey": this.fb.control(ingredient.ingredient ?? ""),
      "minAmount": this.fb.control(ingredient.minAmount ?? 0),
      "maxAmount": this.fb.control(ingredient.maxAmount ?? 0),
      "unit": this.fb.control(ingredient.unit ?? null),
      "isRange": this.fb.control(ingredient.isRange ?? false),
    });
  }

  public addIngredient() {
    this.ingredients.push(this.mapIngredientToFormGroup({}));
  }

  public addInstruction() {
    this.instructions.push(this.mapInstructionToFormGroup({}));
  }

  private swapFormArrayEntry(formArray: FormArray<FormGroup>, previousIndex: number, newIndex: number) {
    let tempVal = formArray.at(previousIndex);
    formArray.removeAt(previousIndex);
    formArray.insert(newIndex, tempVal);
  }

  public droppedIngredient(event: CdkDragDrop<any[]>) {
    this.swapFormArrayEntry(this.ingredients, event.previousIndex, event.currentIndex);
  }

  public droppedInstruction(event: CdkDragDrop<any[]>) {
    this.swapFormArrayEntry(this.instructions, event.previousIndex, event.currentIndex);
  }

  public async save() {
    this.logger.info("Saved",this.form.getRawValue());
    await this.router.navigate(["/recipes"]);
  }
}
