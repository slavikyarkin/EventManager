import { AppSettings } from "../../../AppSettings";
import * as baseApi from "../../baseApi";
import { IdentifyData } from "./IdentifyData";

declare const appSettings: AppSettings;

export function* postIdentify(data: IdentifyData) {
    const result: string = yield baseApi.post<IdentifyData, string>(appSettings.baseApiUrl + `/authenticate/sendRestoreEmail`, data);
    return result;
}
