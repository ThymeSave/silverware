import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-plugin',
  template: `
    <p>
      plugin works!
    </p>
  `,
  styles: [
  ]
})
export class PluginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
