import { AppSettings } from "../../AppSettings";
import { LogupData, LogupRequestData, UserData } from "./LogupData";
import * as baseApi from "../baseApi";

declare const appSettings: AppSettings;

export function* postLogup(data: LogupRequestData) {
    const result: UserData = yield baseApi.post<LogupRequestData, UserData>(appSettings.baseApiUrl + `/user`, data);
    return result;
}
