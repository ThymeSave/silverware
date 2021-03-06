import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map, merge, of, Subscription } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class OnlineService {
  private networkStatus = new BehaviorSubject<boolean>(navigator.onLine);
  public networkStatus$ = this.networkStatus.asObservable();

  constructor() {
    this.registerNetworkCheck();
  }

  registerNetworkCheck() {
    merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline'),
    )
      .pipe(map(() => navigator.onLine))
      .subscribe(status => {
        this.networkStatus.next(status);
      });
  }
}
