import { createAction } from "typesafe-actions";
import { LogupModel } from "./LogupModel";

export const logUp = createAction('logup/LOG_UP')<LogupModel>();

export const logUpSuccess = createAction('logup/LOG_UP_SUCCESS')<LogupModel>();
export const logUpFail = createAction('logup/LOG_UP_FAIL')<Error>();
