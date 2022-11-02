import { Injectable } from '@angular/core';
import { createLogger } from "@helper/log";
import {
  interval, map,
  Subject,
  zip,
} from "rxjs";

export type NotificationType = "Error" | "Warning" | "Success";
export type NotificationMessage = `notifications.${string}`

export interface Notification {
  type: NotificationType;
  message: NotificationMessage;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new Subject<Notification>();
  private logger = createLogger("NotificationService");

  public readonly notifications$ = zip(
    interval(20),
    this.notificationsSubject.asObservable(),
  ).pipe(map(([_, notification]) => notification));

  /**
   * Adds a new notification to the message queue
   */
  public sendNotification(notification: Notification) {
    this.logger.debug("Send notification", notification);
    this.notificationsSubject.next(notification);
  }
}
