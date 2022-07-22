import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from "@angular/material/stepper";
import { Router } from '@angular/router';
import { createLogger } from "@helper/log";
import {
  Importer,
  ImporterType,
  RecipeImporterList,
  ImporterPayload,
  RawRecipe,
  ParsedRecipe,
} from "@thymesave/core";
import { URLImporterPayload } from "@thymesave/core";
import { FilterImporterByType, PluginRegistry } from "@thymesave/plugin";
import { BehaviorSubject, catchError, filter, finalize, of } from "rxjs";

import { RecipeImporterService } from "@/recipes/services/recipe-importer.service";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent implements OnInit {
  private logger = createLogger("NewComponent");

  public importer: Importer<RawRecipe> | null = null;
  @ViewChild("stepper") private stepper !: MatStepper;

  public urlImporter !: RecipeImporterList;
  public isURLImporter: boolean = false;

  public manualImporter !: RecipeImporterList;
  private isManualImporter: boolean = false;

  private readonly importerSubject = new BehaviorSubject<Importer<RawRecipe> | null>(null);
  public readonly importer$ = this.importerSubject;

  public importLoading = false;
  public importFailed = false;
  public importFailedErr !: Error;

  public parsedRecipe !: ParsedRecipe;

  constructor(private router: Router,
              private importerService: RecipeImporterService) {
  }

  public async save() {
    await this.router.navigate(["/recipes"]);
  }

  public ngOnInit() {
    this.urlImporter = PluginRegistry
      .getImporter(FilterImporterByType(ImporterType.URL));
    this.manualImporter = PluginRegistry
      .getImporter(FilterImporterByType(ImporterType.MANUAL));

    this.importer$
      .pipe(filter(i => i != null))
      .subscribe(this.setImporter.bind(this));
  }

  private setImporter(importer: Importer<RawRecipe> | null) {
    this.logger.debug("Selected importer", importer);
    this.importer = importer;
    this.isManualImporter = importer?.type == ImporterType.MANUAL;
    this.isURLImporter = importer?.type == ImporterType.URL;
  }

  public urlImporterSaved(urlImporterPayload: URLImporterPayload) {
    this.runImportStep(urlImporterPayload);
  }

  private runImportStep(payload: ImporterPayload) {
    this.importLoading = true;
    this.completeCurrentStep();

    this.importerService.runRecipeImporter(this.importer as any as Importer<RawRecipe>, payload)
      .pipe(
        finalize(() => this.importLoading = false),
        catchError(err => this.failImport(err)),
        filter(r => r != null),
      )
      .subscribe((recipe: ParsedRecipe | null) => this.succeedImport(recipe!!));
  }

  private succeedImport(recipe: ParsedRecipe) {
    this.logger.debug("Imported", recipe);
    this.parsedRecipe = recipe;
    this.completeCurrentStep();
  }

  private failImport(err: Error) {
    this.importFailed = true;
    this.importFailedErr = err;
    this.logger.error(`Import failed`, err);
    return of(null);
  }

  public cancel() {
    this.stepper.reset();

    this.importLoading = false;
    this.importFailed = false;

    this.importerSubject.next(null);
  }

  private completeCurrentStep() {
    this.stepper.selected!!.completed = true;
    this.stepper.next();
  }

  public selectImporter(importer: Importer<RawRecipe>) {
    this.importerSubject.next(importer);
    this.completeCurrentStep();
  }
}
