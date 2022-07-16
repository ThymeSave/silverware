import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { Router } from '@angular/router';
import { Importer, ImporterType, Recipe, RecipeImporterList } from "@thymesave/core";
import { URLImporterPayload } from "@thymesave/core";
import { FilterImporterByType, PluginRegistry } from "@thymesave/plugin";
import { BehaviorSubject, filter } from "rxjs";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  public form = new FormGroup({
    title: new FormControl(""),
  });
  public importer: Importer<Recipe> | null = null;
  @ViewChild("stepper") private stepper !: MatStepper;

  public urlImporter !: RecipeImporterList;
  public isURLImporter : boolean = false;

  public manualImporter !: RecipeImporterList;
  private isManualImporter : boolean = false;

  private readonly importerSubject = new BehaviorSubject<Importer<Recipe> | null>(null);
  public readonly importer$ = this.importerSubject
    .pipe(filter(i => !!i));

  constructor(private router: Router) {
  }

  public async save() {
    await this.router.navigate(["/recipes"]);
  }

  public ngOnInit() {
    this.urlImporter = PluginRegistry
      .getImporter(FilterImporterByType(ImporterType.URL));
    this.manualImporter = PluginRegistry
      .getImporter(FilterImporterByType(ImporterType.MANUAL));

    this.importer$.subscribe(importer => {
      this.importer = importer;
      this.isManualImporter = importer?.type == ImporterType.MANUAL;
      this.isURLImporter = importer?.type == ImporterType.URL;
    });
  }

  public urlImporterSaved(urlImporterPayload : URLImporterPayload) {
    console.debug("Received url importer payload", urlImporterPayload);
    this.completeCurrentStep();
    // TODO Propagate to next step
  }

  private completeCurrentStep() {
    this.stepper.selected!!.completed = true;
    this.stepper.next();
  }

  selectImporter(importer: Importer<Recipe>) {
    this.importer = importer;
    this.importerSubject.next(importer);
    this.completeCurrentStep();
  }
}
