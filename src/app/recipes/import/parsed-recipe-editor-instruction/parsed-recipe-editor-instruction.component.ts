import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-parsed-recipe-editor-instruction',
  styleUrls: ['./parsed-recipe-editor-instruction.component.scss'],
  templateUrl: './parsed-recipe-editor-instruction.component.html',
})
export class ParsedRecipeEditorInstructionComponent {
  @Input() public formGroup !: FormGroup;
  @Output() public deleted = new EventEmitter<void>();

  public get text() {
    return this.formGroup.controls['text'] as FormControl;
  }

  public emitDelete() {
    this.deleted.emit();
  }
}
