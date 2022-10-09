import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  @Input() public title !: string;
  @Input() public hideOkButton : boolean = false;
  @Input() public submitEnabled : boolean = true;
  @Input() public okText : string = "ok";
  @Input() public cancelText : string = "cancel";

  @Output() public clickSubmit = new EventEmitter();

  constructor() {
  }

}
