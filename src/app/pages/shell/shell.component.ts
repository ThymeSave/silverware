import { Component } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {

  constructor(
    public authService: AuthService,
    public storageService: StorageService,
  ) { }

}
