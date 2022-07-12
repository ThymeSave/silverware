import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

import { StorageService } from 'src/app/shared/storage/storage.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent{
  readonly menuItems = [
    {
      icon: "restaurant_menu",
      title: "recipes",
      link: "/recipes",
    },
    {
      icon: "settings",
      title: 'settings',
      link: '/settings',
    },
  ];

  constructor(
    public authService: AuthService,
    public storageService: StorageService,
  ) {

  }
}
