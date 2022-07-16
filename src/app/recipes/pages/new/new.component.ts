import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { Router } from '@angular/router';
import { Importer, ImporterType, Recipe, RecipeImporterList } from "@thymesave/core";
import { FilterImporterByType, PluginRegistry } from "@thymesave/plugin";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(""),
  });
  importer: Importer<Recipe> | null = null;

  @ViewChild("stepper") private stepper !: MatStepper;

  public urlImporter !: RecipeImporterList;
  public manualImporter !: RecipeImporterList;

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
  }

  private completeCurrentStep() {
    this.stepper.selected!!.completed = true;
    this.stepper.next();
  }

  selectImporter(importer: Importer<Recipe>) {
    this.importer = importer;
    this.completeCurrentStep();
  }
}
