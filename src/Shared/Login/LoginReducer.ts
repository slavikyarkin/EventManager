import * as loginActions from "./LoginActions";
import { ActionType, getType } from "typesafe-actions";
import { LoginState } from "./LoginState";

export type LoginAction = ActionType<typeof loginActions>;

const initialState: LoginState = {
}

export function loginReducer(state: LoginState = initialState, action: LoginAction): LoginState {
  switch (action.type) {
    case (getType(loginActions.logInSuccess)):
      return {
        login: action.payload
      };
    default:
      return {
        ...state
      };
  }
}