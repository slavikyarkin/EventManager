import { createAction } from "typesafe-actions";

export const snackbar = createAction('snackbar/SNACKBAR')<string>();

export const snackbarSuccess = createAction('snackbar/SNACKBAR_SUCCESS')<string>();

export const snackbarFail = createAction('snackbar/SNACKBAR_FAILE')<Error>();
