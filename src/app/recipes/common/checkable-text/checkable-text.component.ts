import { Component, Input } from '@angular/core';

export type CheckableTextComponentMode = "Checkbox" | "ReadOnly"

@Component({
  selector: 'app-checkable-text',
  styleUrls: ['./checkable-text.component.scss'],
  templateUrl: './checkable-text.component.html',
})
export class CheckableTextComponent {

  @Input() public mode : CheckableTextComponentMode = "ReadOnly";
  @Input() public checked : boolean = false;

}
