import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from "@angular/material/stepper";
import { ActivatedRoute, Router } from '@angular/router';
import { createLogger } from "@helper/log";
import {
  Importer,
  ImporterType,
  RecipeImporterList,
  ImporterPayload,
  RawRecipe,
  ParsedRecipe,
  URLImporterPayload,
  Recipe,
} from "@thymesave/core";
import { FilterImporterByType, PluginRegistry } from "@thymesave/plugin";
import { first as _first } from "lodash";
import { BehaviorSubject, catchError, filter, finalize, first, from, of, switchMap } from "rxjs";

import { RecipeImporterService } from "@/recipes/services/recipe-importer.service";
import { RecipeService } from "@/recipes/services/recipe.service";
import { LanguageService } from "@/shared/i18n/language.service";

@Component({
  selector: 'app-new-recipe',
  styleUrls: ['./new-recipe.component.scss'],
  templateUrl: './new-recipe.component.html',
})
export class NewRecipeComponent implements OnInit, AfterViewInit {
  private logger = createLogger("NewComponent");
  private isManualImporter = false;

  private readonly importerSubject = new BehaviorSubject<Importer<RawRecipe> | null>(null);
  private readonly parsedRecipesSubject = new BehaviorSubject<ParsedRecipe[]>([]);

  @ViewChild("stepper") private stepper !: MatStepper;

  public readonly importer$ = this.importerSubject.asObservable();
  public readonly parsedRecipes$ = this.parsedRecipesSubject.asObservable();

  public importer: Importer<RawRecipe> | null = null;
  public isURLImporter = false;
  public urlImporter !: RecipeImporterList;
  public manualImporter !: RecipeImporterList;
  public importLoading = false;
  public importFailed = false;
  public importFailedErr !: Error;
  public parsedRecipes: ParsedRecipe[] = [];
  public parsedRecipe: ParsedRecipe | null = null;
  public recipeIndex = 1;
  public totalRecipes = 1;
  public forceUsageOnMobile = false;

  public constructor(private router: Router,
              private route: ActivatedRoute,
              private importerService: RecipeImporterService,
              private recipeService: RecipeService,
              public languageService: LanguageService,
              private ref: ChangeDetectorRef) {
  }

  private findImporterByName(identifier: string): Importer<RawRecipe> | undefined {
    return _first(PluginRegistry
      .getImporter()
      .filter(i => i.identifier == identifier),
    )?.importer;
  }

  private setImporter(importer: Importer<RawRecipe> | null) {
    this.logger.debug("Selected importer", importer);

    this.importLoading = false;
    this.importFailed = false;

    this.importer = importer;

    this.isManualImporter = importer?.type == ImporterType.MANUAL;
    this.isURLImporter = importer?.type == ImporterType.URL;
  }

  private setParsedRecipes(parsedRecipes: ParsedRecipe[]) {
    this.parsedRecipes = parsedRecipes;
    if (this.parsedRecipes.length > 0) {
      this.parsedRecipe = parsedRecipes[0];
    }

    this.recipeIndex = 1;
    this.totalRecipes = parsedRecipes.length;
  }

  private runImportStep(payload: ImporterPayload) {
    this.importLoading = true;
    this.completeCurrentStep();

    this.importerService.runRecipeImporter(this.importer as unknown as Importer<RawRecipe>, payload)
      .pipe(
        finalize(() => this.importLoading = false),
        catchError(err => this.failImport(err)),
        filter(r => r != null),
      )
      .subscribe((recipes: ParsedRecipe[] | null) => this.succeedImport(recipes!!));
  }

  private succeedImport(recipes: ParsedRecipe[]) {
    this.logger.debug("Imported", recipes);

    if (recipes.length == 0) {
      this.failImport(new Error("no_recipe_found"));
      return;
    }

    this.parsedRecipesSubject.next(recipes);

    this.completeCurrentStep();
  }

  private completeCurrentStep() {
    this.stepper.selected!!.completed = true;
    this.stepper.next();
  }

  private failImport(err: Error) {
    this.importFailed = true;
    this.importFailedErr = err;
    this.logger.error(`Import failed`, err);
    return of(null);
  }

  public get hasMultipleRecipes() {
    return this.parsedRecipes.length > 1;
  }

  public loadImporterFromURL() {
    this.route.queryParams
      .pipe(first())
      .subscribe(queryParameters => {
        // Try loading name
        try {
          const importerName = queryParameters['importerIdentifier'];
          const importer = this.findImporterByName(importerName);
          if (importer) {
            this.importerSubject.next(importer);
            this.completeCurrentStep();
          }
        } catch (e) {
          this.logger.warn("Failed to parse importer name from URL, if you haven't specified it, just ignore this.");
        }

        // Try loading parameters
        try {
          const settings = queryParameters['importerPayload'];
          const parsedSettings = JSON.parse(decodeURIComponent(atob(settings)));
          this.logger.debug("Parsed settings from URL", parsedSettings);
          this.runImportStep(parsedSettings);
        } catch (e) {
          this.logger.warn("Failed to parse importer settings from URL, if you haven't specified any, just ignore this.");
        }

        // prevent NG0100
        this.ref.detectChanges();
      });
  }

  public async save() {
    await this.router.navigate(["/recipes"]);
  }

  public ngOnInit() {
    this.urlImporter = PluginRegistry
      .getImporter(FilterImporterByType(ImporterType.URL))
      .map(i => i.importer);
    this.manualImporter = PluginRegistry
      .getImporter(FilterImporterByType(ImporterType.MANUAL))
      .map(i => i.importer);

    this.importer$
      .pipe(filter(i => i != null))
      .subscribe(this.setImporter.bind(this));

    this.parsedRecipes$
      .subscribe(this.setParsedRecipes.bind(this));
  }

  public ngAfterViewInit() {
    this.loadImporterFromURL();
  }

  public urlImporterSaved(urlImporterPayload: URLImporterPayload) {
    this.runImportStep(urlImporterPayload);
  }

  public cancel() {
    this.stepper.reset();

    this.parsedRecipesSubject.next([]);
    this.importerSubject.next(null);
  }

  public loadNewRecipeOrCancel() {
    if (this.hasMultipleRecipes) {
      this.parsedRecipe = this.parsedRecipes.pop()!!;
      this.recipeIndex++;
    } else {
      this.cancel();
    }
  }

  public cancelEdit() {
    this.loadNewRecipeOrCancel();
  }

  public saveEdit(finalized: Recipe) {
    this.logger.info("Saved", finalized);
    this.recipeService.insert(finalized)
      .pipe(switchMap(() => {
        if (this.hasMultipleRecipes) {
          this.loadNewRecipeOrCancel();
          return of(null);
        } else {
          return from(this.router.navigate(["/recipes"]));
        }
      }))
      .subscribe();
  }

  public selectImporter(importer: Importer<RawRecipe>) {
    this.importerSubject.next(importer);
    this.completeCurrentStep();
  }

  public forceUsageOnMobileDevice() {
    this.forceUsageOnMobile = true;
  }
}
