import { MatDialog } from "@angular/material/dialog";
import { filter } from "rxjs";

type ActionDialogConfig<T> = {
  /**
   * Dialog API
   */
  dialog: MatDialog,
  /**
   * Component to instantiate
   */
  component: { new(...args: any[]): T },
  /**
   * Action to run when to user clicks on okay, assuming the dialoog result is a boolean and was true
   */
  actionCallback: Function,
  /**
   * Data to pass to component
   */
  data?: any,

  width?: string
}

/**
 * Open action dialog with specified config
 * @param config
 */
export const openActionDialog = <T>(config: ActionDialogConfig<T>) => {
  const {dialog, component, data, actionCallback, width} = config;
  const ref = dialog.open(component, {
    data,
    width: width ?? "600px",
  });
  ref.afterClosed()
    .pipe(
      filter(res => res === true),
    )
    .subscribe(() => actionCallback());
};
