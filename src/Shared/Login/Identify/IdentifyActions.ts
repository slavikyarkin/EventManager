import { createAction } from "typesafe-actions";
import { IdentifyModel } from "./IdentifyModel";

export const identify = createAction('identify/IDENTIFY')<IdentifyModel>();
export const identifySuccess = createAction('identify/IDENTIFY_SUCCESS')<IdentifyModel>();
export const identifyFail = createAction('identify/IDENTIFY_FAIL')<Error>();