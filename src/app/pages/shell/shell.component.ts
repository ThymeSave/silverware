import { Component } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

import { AppUpdateService } from "@/pwa/app-update.service";
import { OnlineService } from "@/pwa/online.service";
import { StorageService } from '@/shared/storage/storage.service';

@Component({
  selector: 'app-shell',
  styleUrls: ['./shell.component.scss'],
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  readonly menuItems = [
    {
      icon: "restaurant_menu",
      link: "/recipes/",
      title: "nav.all_recipes",
    },
    {
      icon: "add",
      link: "/recipes/new/",
      title: "nav.new_recipe",
    },
    {
      icon: "settings",
      link: '/settings',
      title: 'nav.settings',
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
