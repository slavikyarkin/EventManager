import { createAction } from "typesafe-actions";
import { LoginModel } from "./LoginModel";

export const logIn = createAction('login/LOG_IN')<LoginModel>();

export const logOut = createAction('login/LOG_OUT')<LoginModel>();
