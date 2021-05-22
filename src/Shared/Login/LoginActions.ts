import { createAction } from "typesafe-actions";
import { LoginModel } from "./LoginModel";

export const logIn = createAction('login/LOG_IN')<LoginModel>();

export const logInSuccess = createAction('login/LOG_IN_SUCCESS')<LoginModel>();
export const logInFail = createAction('login/LOG_IN_FAIL')<Error>();
