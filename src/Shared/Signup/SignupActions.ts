import { createAction } from "typesafe-actions";
import { SignupRequestData, UserData } from "./SignupData";
import { SignupModel } from "./SignupModel";

export const signUp = createAction('Signup/SIGN_UP')<SignupRequestData>();

export const signUpSuccess = createAction('Signup/SIGN_UP_SUCCESS')<UserData>();
export const signUpFail = createAction('Signup/SIGN_UP_FAIL')<Error>();
