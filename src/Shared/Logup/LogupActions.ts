import { createAction } from "typesafe-actions";
import { LogupRequestData, UserData } from "./LogupData";
import { LogupModel } from "./LogupModel";

export const logUp = createAction('logup/LOG_UP')<LogupRequestData>();

export const logUpSuccess = createAction('logup/LOG_UP_SUCCESS')<UserData>();
export const logUpFail = createAction('logup/LOG_UP_FAIL')<Error>();
