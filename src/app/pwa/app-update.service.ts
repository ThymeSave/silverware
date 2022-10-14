import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { createLogger } from "@helper/log";
import { filter, first, from, tap } from "rxjs";

import { AppUpdateDialogComponent } from "@/pwa/app-update-dialog/app-update-dialog.component";
import { openActionDialog } from "@/shared/util/dialog";

@Injectable({
  providedIn: 'root',
})
export class AppUpdateService {
  private logger = createLogger("AppUpdateService");

  constructor(private readonly swUpdate: SwUpdate,
              public dialog: MatDialog) {
    this.swUpdate.versionUpdates
      .pipe(
        filter(event => event.type == "VERSION_READY"),
        tap(event => {
          let readyEvent = (event as VersionReadyEvent);
          this.logger.debug("Update available from", readyEvent.currentVersion, "to", readyEvent.latestVersion);
        }),
        first(),
      )
      .subscribe(_ => this.showUpdateDialog());
  }

  private showUpdateDialog() {
    openActionDialog({
      actionCallback: () => {
        from(this.swUpdate.activateUpdate())
          .pipe(filter(updated => updated))
          .subscribe(() => location.reload());
      },
      component: AppUpdateDialogComponent,
      dialog: this.dialog,
    });
  }
}
