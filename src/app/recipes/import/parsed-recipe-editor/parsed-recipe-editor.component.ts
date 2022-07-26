import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup, ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { createLogger } from "@helper/log";
import { Instruction, ParsedRecipe, ParsedRecipeIngredient, RawRecipe, imageToBase64 } from "@thymesave/core";

import { IngredientService } from "@/recipes/services/ingredient.service";

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
              public router: Router,
              private ingredientService : IngredientService) {
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

  private translationKeyValidator : ValidatorFn = (control : AbstractControl) : ValidationErrors | null => {
    const value = control.getRawValue();
    return this.ingredientService.allKeys.indexOf(value) == -1 ? { value: false } : null;
  };

  private initForm(recipe: Partial<ParsedRecipe>) {
    const ingredients = recipe.ingredients ? recipe.ingredients.map(this.mapIngredientToFormGroup.bind(this)) : [];
    const instructions = recipe.instructions ? recipe.instructions.map(this.mapInstructionToFormGroup.bind(this)) : [];

    this.form = this.fb.group({
      title: this.fb.control(recipe.title, [Validators.required]),
      description: this.fb.control(recipe.description, [Validators.required]),
      ingredients: this.fb.array(ingredients, [Validators.required]),
      instructions: this.fb.array(instructions, [Validators.required]),
    });
  }

  private mapInstructionToFormGroup(instruction: Partial<Instruction>) {
    return this.fb.group({
      'text': this.fb.control(instruction.text ?? "", [Validators.required]),
    });
  }

  private mapIngredientToFormGroup(ingredient: Partial<ParsedRecipeIngredient>) {
    const hasTranslationMatches = (ingredient.translationMatches as any ?? []).length > 0;
    const translationKey = (hasTranslationMatches && ingredient.translationMatches) ?
      ingredient.translationMatches[0].key : null;
    const translationMatches = (hasTranslationMatches && ingredient.translationMatches) ?
      ingredient.translationMatches.map(tm => this.fb.control(tm.key)) : [];
    return this.fb.group({
      "translationKey": this.fb.control(translationKey, [Validators.required, this.translationKeyValidator]),
      "translationMatches": this.fb.array(translationMatches),
      "minAmount": this.fb.control(ingredient.minAmount ?? 0, [Validators.required]),
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

  private createImageFileInput() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    return input;
  }

  public async uploadPhoto() {
    try {
      await new Promise<void>((resolve, reject) => {
        const input = this.createImageFileInput();
        input.click();
        input.addEventListener("change", () => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(input!!.files!![0]);
          fileReader.onerror = reject;
          fileReader.onload = async () => {
            try {
              const blob = await fetch(fileReader.result as string)
                .then(r => r.blob());
              this._recipe.image = await imageToBase64(blob as Blob);
              resolve();
            } catch (e) {
              reject(e);
            }
          };
        });
      });
    } catch (e) {
      this.logger.warn("Failed updating image, ignoring.", e);
    }
  }

  public async save() {
    this.logger.info("Saved", this.form.getRawValue());
    // TODO Persist
    await this.router.navigate(["/recipes"]);
  }
}
