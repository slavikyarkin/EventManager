import { AppSettings } from "../../AppSettings";
import { SignupData, SignupRequestData, UserData } from "./SignupData";
import * as baseApi from "../baseApi";

declare const appSettings: AppSettings;

export function* postSignup(data: SignupRequestData) {
    const result: UserData = yield baseApi.post<SignupRequestData, UserData>(appSettings.baseApiUrl + `/authenticate`, data);
    return result;
}
