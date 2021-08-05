import * as SignupActions from "./SignupActions";
import { ActionType, getType } from "typesafe-actions";
import { SignupState } from "./SignupState";

export type SignupAction = ActionType<typeof SignupActions>;

const initialState: SignupState = {
}

export function logupReducer(state: SignupState = initialState, action: SignupAction): SignupState {
  switch (action.type) {
    case (getType(SignupActions.signUpSuccess)):
      return {
        ...state,
        company: action.payload
        
      };
    default:
      return {
        ...state
      };
  }
}