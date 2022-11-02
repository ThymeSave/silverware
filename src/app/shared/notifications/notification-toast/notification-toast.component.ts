import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { createLogger } from "@helper/log";
import {
  delayWhen,
  timer,
} from "rxjs";

import { Notification, NotificationService, NotificationType } from "@/shared/notifications/notification.service";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-notification-toast',
  styleUrls: ['./notification-toast.component.scss'],
  templateUrl: './notification-toast.component.html',
})
export class NotificationToastComponent implements OnInit {

  @ViewChild('panelTemplate', {static: true}) public panelTemplate !: TemplateRef<any>;
  public notification !: Notification;
  public messageOpened: Date | null = null;

  private logger = createLogger("NotificationToastComponent");

  private readonly VISIBILITY_TIMEOUT_SECONDS = 5;

  private calcClose() {
    if (this.messageOpened == null) {
      this.logger.debug("No notification open, can be displayed immediately");
      return 0;
    }

    const closeDate = new Date(this.messageOpened.getTime());
    // Add the visibility timeout in seconds again and 1 second for smooth fade out
    closeDate?.setSeconds(this.messageOpened.getSeconds() + this.VISIBILITY_TIMEOUT_SECONDS + 1);
    this.logger.debug("Show notification at", closeDate);
    return closeDate;
  }

  constructor(private notificationService: NotificationService,
              private snackBar: MatSnackBar) {

  }

  public panelClassFromType(type: NotificationType) {
    switch (type) {
      case "Error":
        return "status-error";

      case "Warning":
        return "status-warning";

      case "Success":
        return "status-success";
    }
  }

  public get icon() {
    switch (this.notification.type) {
      case "Warning":
        return "warning";

      case "Error":
        return "error";

      case "Success":
        return "done";
    }
  }

  ngOnInit(): void {
    this.notificationService.notifications$
      .pipe(delayWhen(_ => timer(this.calcClose())))
      .subscribe(notification => {
        this.messageOpened = new Date();
        this.notification = notification;
        this.snackBar
          .openFromTemplate(this.panelTemplate, {
            duration: this.VISIBILITY_TIMEOUT_SECONDS * 1_000,
            horizontalPosition: "center",
            panelClass: [
              this.panelClassFromType(this.notification.type),
              "global-notification-toast",
            ],
            verticalPosition: "bottom",
          })
          .afterDismissed()
          .subscribe(() => this.messageOpened = null);
      });
  }

  close() {
    this.logger.debug("Manually dismissed");
    this.snackBar._openedSnackBarRef?.dismiss();
  }
}
