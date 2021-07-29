import { AppSettings } from "../../../AppSettings";
import { ResetPasswordRequestModel } from "./ResetPasswordModel";
import * as baseApi from "../../baseApi"

declare const appSettings : AppSettings;

export function* postResetPassword(data: ResetPasswordRequestModel) {
    const result: string = yield baseApi.post<ResetPasswordRequestModel, string>(appSettings.baseApiUrl + `/user/RestorePassword`, data);
    return result;
}


