import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup, ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { createLogger } from "@helper/log";
import { Instruction, ParsedRecipe, Recipe, ParsedRecipeIngredient, imageToBase64 } from "@thymesave/core";

import { IngredientService } from "@/recipes/services/ingredient.service";
import { RecipeImporterService } from "@/recipes/services/recipe-importer.service";
import { ThymeSaveValidators } from "@/validators";

@Component({
  selector: 'app-parsed-recipe-editor',
  styleUrls: ['./parsed-recipe-editor.component.scss'],
  templateUrl: './parsed-recipe-editor.component.html',
})
export class ParsedRecipeEditorComponent implements OnInit {
  private _recipe !: ParsedRecipe;

  public logger = createLogger("ParsedRecipeEditorComponent");
  public form !: FormGroup;

  @Input()
  public set recipe(value: ParsedRecipe | null) {
    if (value != null) {
      this._recipe = value;
    }

    this.initForm(this.recipe);
  }

  @Input() public recipeIndex !: number;
  @Input() public totalRecipes !: number;
  @Input() public hasMultipleRecipes !: boolean;

  @Output() public canceled = new EventEmitter<void>();
  @Output() public saved = new EventEmitter<Recipe>();

  public get recipe(): ParsedRecipe {
    return this._recipe;
  }

  public constructor(private fb: FormBuilder,
              public router: Router,
              private ingredientService: IngredientService,
              private ref: ChangeDetectorRef,
              private importerService: RecipeImporterService) {
  }

  private initForm(recipe: Partial<ParsedRecipe>) {
    if (Object.keys(recipe as any).length == 0) {
      return;
    }
    const ingredients = recipe.ingredients ? recipe.ingredients.map(this.mapIngredientToFormGroup.bind(this)) : [];
    const instructions = recipe.instructions ? recipe.instructions.map(this.mapInstructionToFormGroup.bind(this)) : [];

    this.form = this.fb.group({
      description: this.fb.control(recipe.description, [Validators.required]),
      image: this.fb.control(recipe.image),
      ingredients: this.fb.array(ingredients, [Validators.required]),
      instructions: this.fb.array(instructions, [Validators.required]),
      servings: this.fb.control(recipe.servings, [Validators.required, Validators.min(1), Validators.max(99)]),
      title: this.fb.control(recipe.title, [Validators.required]),
    });

    ingredients.map(i => i.controls['translationKey'].markAllAsTouched());
    this.form.markAllAsTouched();
    this.ref.detectChanges();
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
      "isRange": this.fb.control(ingredient.isRange ?? false),
      "maxAmount": this.fb.control(ingredient.maxAmount ?? ""),
      "minAmount": this.fb.control(ingredient.minAmount ?? ""),
      "translationKey": this.fb.control(translationKey, [Validators.required, ThymeSaveValidators.translationKey(this.ingredientService)]),
      "translationMatches": this.fb.array(translationMatches),
      "unit": this.fb.control(ingredient.unit ?? null),
    });
  }

  private swapFormArrayEntry(formArray: FormArray<FormGroup>, previousIndex: number, newIndex: number) {
    let tempVal = formArray.at(previousIndex);
    formArray.removeAt(previousIndex);
    formArray.insert(newIndex, tempVal);
  }

  private createImageFileInput() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    return input;
  }

  public get ingredients() {
    return this.form.controls["ingredients"] as any as FormArray<FormGroup>;
  }

  public get instructions() {
    return this.form.controls["instructions"] as any as FormArray<FormGroup>;
  }

  public ngOnInit() {
    this.initForm({});
  }

  public addIngredient() {
    this.ingredients.push(this.mapIngredientToFormGroup({}));
  }

  public addInstruction() {
    this.instructions.push(this.mapInstructionToFormGroup({}));
  }

  public droppedIngredient(event: CdkDragDrop<any[]>) {
    this.swapFormArrayEntry(this.ingredients, event.previousIndex, event.currentIndex);
  }

  public droppedInstruction(event: CdkDragDrop<any[]>) {
    this.swapFormArrayEntry(this.instructions, event.previousIndex, event.currentIndex);
  }

  public async uploadPhoto() {
    try {
      await new Promise<void>((resolve, reject) => {
        const input = this.createImageFileInput();
        input.click();
        input.addEventListener("change", () => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(input.files!![0]);
          fileReader.onerror = reject;
          fileReader.onload = async () => {
            try {
              const blob = await fetch(fileReader.result as string)
                .then(r => r.blob());
              const image = await imageToBase64(blob);
              this.form.patchValue({
                image,
              });
              this._recipe.image = image;
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
    const finalized = this.importerService.finalize(this.form.getRawValue());
    this.saved.next(finalized);
  }

  public cancel() {
    this.canceled.next();
  }
}
