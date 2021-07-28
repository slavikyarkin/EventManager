import * as identifyActions from "./IdentifyActions"
import { ActionType, getType } from "typesafe-actions";
import { IdentifyState } from "./IdentifyState";


export type IdentifyAction = ActionType<typeof identifyActions>;

const initialState: IdentifyState = {
  email: '',
}

export function identifyReducer(state: IdentifyState = initialState, action: IdentifyAction): IdentifyState {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
}