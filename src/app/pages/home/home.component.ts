import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(public authService: AuthService,
              private dialog : MatDialog) {
  }

}

