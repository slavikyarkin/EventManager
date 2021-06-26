import * as snackbarActions from "./SnackbarActions";
import { ActionType, getType } from "typesafe-actions";
import { SnackbarState } from "./SnackbarState";

export type SnackbarAction = ActionType<typeof snackbarActions>;

const initialState: SnackbarState = {
  open: false,
  message: '',
  severity: "error"
}

export function snackbarReducer(state: SnackbarState = initialState, action: SnackbarAction): SnackbarState {
  switch (action.type) {
    case (getType(snackbarActions.showSnackbar)):
      return {
        ...state,
        open: true,
        message: action.payload.message,
        severity: action.payload.severity
      };
    case (getType(snackbarActions.hideSnackbar)):
      return initialState;
    default:
      return {
        ...state
      };
  }
}