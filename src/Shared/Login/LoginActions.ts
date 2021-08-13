import { createAction } from "typesafe-actions";
import { LoginModel, TokenModel } from "./LoginModel";

export const logIn = createAction('login/LOG_IN')<LoginModel>();

export const logInSuccess = createAction('login/LOG_IN_SUCCESS')<TokenModel>();
export const logInFail = createAction('login/LOG_IN_FAIL')<Error>();

export const validateUser = createAction('login/VALIDATE_USER')<string>();

export const logInGoogle = createAction('login/LOG_IN_GOOGLE')<string>();
export const logInFacebook = createAction('login/LOG_IN_FACEBOOK')<string>();