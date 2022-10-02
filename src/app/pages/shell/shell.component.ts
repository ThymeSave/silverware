import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSidenav } from "@angular/material/sidenav";
import {
  ActivatedRoute, ChildActivationEnd,
  ChildActivationStart,
  ChildrenOutletContexts,
  NavigationEnd,
  RouteConfigLoadStart,
  Router,
} from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { filter, first, firstValueFrom, map, of, startWith, switchMap, tap } from "rxjs";

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
      icon: "list",
      link: "/shopping-lists/",
      title: "nav.all_shopping_lists",
    },
    {
      icon: "settings",
      link: '/settings',
      title: 'nav.settings',
    },
  ];

  public online = true;
  public loading = true;
  public isMobile = false;

  public logoutURL : string = window.location.origin;

  @ViewChild("sidenav") public sidenav !: MatSidenav;

  public isFullWidth = this.router
    .events.pipe(
      filter(e => e instanceof NavigationEnd || e instanceof ChildActivationEnd),
      startWith(null),
      map(_ => this.contexts.getContext("primary")?.route?.snapshot.data),
      map(d => d ? ('fullWidth' in d ? (d as any).fullWidth : false) : null),
    );

  constructor(
    private contexts: ChildrenOutletContexts,
    public authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    public storageService: StorageService,
    public appUpdateService: AppUpdateService,
    private onlineService: OnlineService,
    private _breakpointObserver: BreakpointObserver,
  ) {
    onlineService.networkStatus$.subscribe(status => this.online = status);
    this._breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Small,Breakpoints.Medium])
      .subscribe((result: BreakpointState) => {
        this.isMobile = result.matches;
      });
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
      .subscribe(_ => {
        this.closeSyncDialog();
        this.router.navigate([
          "/recipes",
        ]);
      });
  }

  public ngOnInit() {
    this.authService.isAuthenticated$
      .pipe(
        first(),
        filter(auth => auth),
        switchMap(_ => this.storageService.db$),
        switchMap(() => this.storageService.initSync()),
      )
      .subscribe();
  }

  public goToHome() {
    this.router.navigate([
      "/recipes",
    ]);
  }

  closeNavOnMobile() {
    if(this.isMobile) {
      this.sidenav.close();
    }
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
