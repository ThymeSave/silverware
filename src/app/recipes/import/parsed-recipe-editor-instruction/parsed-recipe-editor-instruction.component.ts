import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-parsed-recipe-editor-instruction',
  templateUrl: './parsed-recipe-editor-instruction.component.html',
  styleUrls: ['./parsed-recipe-editor-instruction.component.scss'],
})
export class ParsedRecipeEditorInstructionComponent {

  @Input() public formGroup !: FormGroup;
  @Output() public deleted = new EventEmitter<void>();

  constructor() { }

  public emitDelete() {
    this.deleted.emit();
  }
}
