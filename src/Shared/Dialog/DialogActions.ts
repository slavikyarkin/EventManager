import { createAction } from "typesafe-actions";
import { DialogCloseAction, DialogOpenAction } from "./DialogData";

export const openDialog = createAction('dialog/OPEN_DIALOG')<DialogOpenAction>();

// export const closeDialog = createAction('dialog/CLOSE_DIALOG')<DialogCloseAction>();
export const closeDialog = createAction('dialog/CLOSE_DIALOG')<undefined>();