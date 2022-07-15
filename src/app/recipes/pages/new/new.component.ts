import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent {
  form = new FormGroup({
    title: new FormControl(""),
  });

  constructor(private router : Router) {
  }

  public async save() {
    await this.router.navigate(["/recipes"]);
  }

}
