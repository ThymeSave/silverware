import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-parsed-recipe-editor-ingredient',
  templateUrl: './parsed-recipe-editor-ingredient.component.html',
  styleUrls: ['./parsed-recipe-editor-ingredient.component.scss'],
})
export class ParsedRecipeEditorIngredientComponent  {

  @Input() public formGroup ! : FormGroup;
  @Output() public deleted = new EventEmitter<void>();

  constructor() { }

  public emitDelete() {
    this.deleted.emit();
  }

  get unitControl() {
    return this.formGroup.controls['unit'] as FormControl;
  }
}
