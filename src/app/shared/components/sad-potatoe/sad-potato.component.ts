import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sad-potato',
  styleUrls: ['./sad-potato.component.scss'],
  templateUrl: './sad-potato.component.html',
})
export class SadPotatoComponent {
  @Input() public width ?: number;
  @Input() public height ?: number;
}
