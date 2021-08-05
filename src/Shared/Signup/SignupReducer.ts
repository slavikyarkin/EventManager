import * as SignupActions from "./SignupActions";
import { ActionType, getType } from "typesafe-actions";
import { SignupState } from "./SignupState";

export type SignupAction = ActionType<typeof SignupActions>;

const initialState: SignupState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  },
  errors: new Map,
  isLoading: false,
}

export function singupReducer(state: SignupState = initialState, action: SignupAction): SignupState {
  switch (action.type) {
    case (getType(SignupActions.signUpSuccess)):
      return {
        ...state,
        formData: action.payload,
      };
    case (getType(SignupActions.signUpFail)):
      return {
        ...state,
        formData: action.payload,
        isLoading: false,
      };
    default:
      return {
        ...state
      };
  }
}