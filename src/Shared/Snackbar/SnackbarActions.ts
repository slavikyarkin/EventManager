import { createAction } from "typesafe-actions";
import { SnackbarShowAction } from "./SnackbarData";
import { SnackbarModel } from "./SnackbarModel";

export const showSnackbar = createAction('snackbar/SHOW_SNACKBAR')<SnackbarShowAction>();

export const hideSnackbar = createAction('snackbar/HIDE_SNACKBAR')<undefined>();