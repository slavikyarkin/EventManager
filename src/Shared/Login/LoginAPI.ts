import { AppSettings } from "../../AppSettings";
import { LoginData, TokenData } from "./LoginData";
import * as baseApi from "../baseApi";

declare const appSettings: AppSettings;

export function* postLogin(data: LoginData) {
    const result: TokenData = yield baseApi.post<LoginData, TokenData>(appSettings.baseApiUrl + `/user/authenticate`, data);
    return result;
}

export function* postValidateUser(params: string) {
    const result: string = yield baseApi.post<undefined, string>(appSettings.baseApiUrl + `/user/validateUser` + params, undefined);
    return result;
}