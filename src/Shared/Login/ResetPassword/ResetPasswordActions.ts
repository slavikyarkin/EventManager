import { createAction } from "typesafe-actions";
import { ResetPasswordRequestData } from "./ResetPasswordData";

export const resetPassword = createAction('resetPassword/RESET_PASSWORD')<ResetPasswordRequestData>();
export const resetPasswordSuccess = createAction('resetPassword/RESET_PASSWORD_SUCCESS')<string>();
export const resetPasswordFail = createAction('resetPassword/RESET_PASSWORD_FAIL')<Error>();