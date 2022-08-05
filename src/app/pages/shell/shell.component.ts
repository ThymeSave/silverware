import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "@auth0/auth0-angular";
import { filter, first, map, switchMap, tap } from "rxjs";

import { AppUpdateService } from "@/pwa/app-update.service";
import { OnlineService } from "@/pwa/online.service";
import { StorageService } from '@/shared/storage/storage.service';

@Component({
  selector: 'app-shell',
  styleUrls: ['./shell.component.scss'],
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {
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
  public loading = true;

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    public storageService: StorageService,
    public appUpdateService: AppUpdateService,
    private onlineService: OnlineService,
  ) {
    onlineService.networkStatus$.subscribe(status => this.online = status);
  }

  private openSyncDialog() {
    this.dialog.open(ShellSyncDialogComponent, {
      width: '300px',
    });
  }

  private closeSyncDialog() {
    this.dialog.closeAll();
  }

  public login() {
    this.authService.loginWithPopup()
      .pipe(
        tap(() => this.openSyncDialog()),
        switchMap(_ => this.storageService.db$),
        switchMap(_ => this.storageService.initSync()),
      )
      .subscribe(_ => this.closeSyncDialog());
  }

  public ngOnInit() {
    this.authService.isAuthenticated$
      .pipe(
        first(),
        filter(auth => auth),
        switchMap(_ => this.storageService.db$),
        tap(() => this.openSyncDialog()),
        switchMap(() => this.storageService.initSync()),
      )
      .subscribe(_ => this.closeSyncDialog());
  }
}

@Component({
  selector: 'app-home-sync-dialog',
  styleUrls: ['./shell.component.scss'],
  templateUrl: '../shell/sync-dialog.html',
})
export class ShellSyncDialogComponent {
  constructor(public dialogRef: MatDialogRef<ShellSyncDialogComponent>) {
  }
}
