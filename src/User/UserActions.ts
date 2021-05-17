import { createAction } from "typesafe-actions";
import { UserModel } from "./UserModel";

export const createUser = createAction('user/CREATE_USER')<UserModel>();
export const createUserSuccess = createAction('user/CREATE_USER_SUCCESS')<UserModel>();
export const createUserFail = createAction('user/CREATE_USER_FAIL')<Error>();