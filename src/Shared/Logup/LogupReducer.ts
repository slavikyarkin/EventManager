import * as logupActions from "./LogupActions";
import { ActionType, getType } from "typesafe-actions";
import { LogupState } from "./LogupState";

export type LogupAction = ActionType<typeof logupActions>;

const initialState: LogupState = {
}

export function logupReducer(state: LogupState = initialState, action: LogupAction): LogupState {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
}