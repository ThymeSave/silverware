import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  styleUrls: ['./floating-button.component.scss'],
  templateUrl: './floating-button.component.html',
})
export class FloatingButtonComponent implements OnInit {

  @Input() public icon: string = "add";
  @Input() public i18nLabel !: string;
  @Input() public color: string = "primary";
  @Input() public routerLink ?: any[] | string | null;

  ngOnInit(): void {
    if (!this.i18nLabel) {
      throw new TypeError("i18nLabel is required");
    }
  }

}
