import * as snackbarActions from "./SnackbarActions";
import { ActionType, getType } from "typesafe-actions";
import { SnackbarState } from "./SnackbarState";

export type SnackbarAction = ActionType<typeof snackbarActions>;

const initialState: SnackbarState = {
}

export function SnackbarReducer(state: SnackbarState = initialState, action: SnackbarAction): SnackbarState {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
}