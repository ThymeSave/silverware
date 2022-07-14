import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter, first, from, switchMap, tap } from "rxjs";

import { AppUpdateDialogComponent } from "@/pwa/app-update-dialog/app-update-dialog.component";

@Injectable({
  providedIn: 'root',
})
export class AppUpdateService {

  constructor(private readonly swUpdate: SwUpdate,
              public dialog: MatDialog) {
    this.swUpdate.versionUpdates
      .pipe(
        filter(event => event.type == "VERSION_READY"),
        tap(event => {
          let readyEvent = (event as VersionReadyEvent);
          console.debug("Update available from", readyEvent.currentVersion, "to", readyEvent.latestVersion);
        }),
        first(),
      )
      .subscribe(_ => this.showUpdateDialog());
  }

  private showUpdateDialog() {
    const ref = this.dialog.open(AppUpdateDialogComponent, {
      width: "500px",
      data: {
        "update": false,
      },
    });

    // TODO Add user notification via central message service, driven by observable
    ref.afterClosed()
      .pipe(
        filter(doUpdate => doUpdate === true),
        switchMap(() => from(this.swUpdate.activateUpdate())),
        tap(res => console.debug("Update result", res)),
        filter(updated => updated === true),
      )
      .subscribe(_ => location.reload());
  }

}
