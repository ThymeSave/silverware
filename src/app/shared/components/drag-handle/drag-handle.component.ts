import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-handle',
  styles: [`
  mat-icon {
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:hover {
      color: var(--primary-color);
    }
  }
  `],
  template: `
    <mat-icon>drag_handle</mat-icon>
  `,
})
export class DragHandleComponent {
}
