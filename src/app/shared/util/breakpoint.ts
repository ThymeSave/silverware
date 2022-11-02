import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs";

export const createMobileBreakpointObserver = (breakpointObserver: BreakpointObserver) =>
  breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.Medium])
    .pipe(map(result => result.matches));
