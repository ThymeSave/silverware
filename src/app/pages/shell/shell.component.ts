import { Component } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

import { AppUpdateService } from "@/pwa/app-update.service";
import { OnlineService } from "@/pwa/online.service";
import { StorageService } from '@/shared/storage/storage.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
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

  public online = true;

  constructor(
    public authService: AuthService,
    public storageService: StorageService,
    public appUpdateService: AppUpdateService,
    private onlineService: OnlineService,
  ) {
    onlineService.networkStatus$.subscribe(status => this.online = status);
  }
}
