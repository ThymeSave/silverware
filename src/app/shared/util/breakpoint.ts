import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { map, switchMap } from "rxjs";

export const createMobileBreakpointObserver = (breakpointObserver: BreakpointObserver) =>
  breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.Medium])
    .pipe(map(result => result.matches));
