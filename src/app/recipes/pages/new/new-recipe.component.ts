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
} from "@thymesave/core";
import { URLImporterPayload } from "@thymesave/core";
import { FilterImporterByType, PluginRegistry } from "@thymesave/plugin";
import { first as _first } from "lodash";
import { BehaviorSubject, catchError, filter, finalize, first, of } from "rxjs";

import { RecipeImporterService } from "@/recipes/services/recipe-importer.service";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent implements OnInit, AfterViewInit {
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
              private route: ActivatedRoute,
              private importerService: RecipeImporterService,
              private ref: ChangeDetectorRef) {
  }

  public loadImporterFromURL() {
    this.route.queryParams
      .pipe(first())
      .subscribe(queryParameters => {
        // Try loading name
        try {
          const importerName = queryParameters['importerName'];
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
          const settings = queryParameters['importerSettings'];
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

  private findImporterByName(name: string): Importer<RawRecipe> | undefined {
    return _first(PluginRegistry
      .getImporter()
      .filter(i => i.name == name),
    );
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

  public ngAfterViewInit() {
    this.loadImporterFromURL();
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
