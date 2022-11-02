import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-handle',
  styles: [`
    @use "../../../../theme";

    mat-icon {
      cursor: pointer;
      transition: all .1s ease-in-out;

      &:hover {
        color: theme.get-color("primary", "main");
      }
    }
  `],
  template: `
    <mat-icon>drag_handle</mat-icon>
  `,
})
export class DragHandleComponent {
}
