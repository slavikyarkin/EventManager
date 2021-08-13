import { AppSettings } from "../../AppSettings";
import { LoginData, LoginFacebookData, LoginGoogleData, TokenData } from "./LoginData";
import * as baseApi from "../baseApi";

declare const appSettings: AppSettings;

export function* postLogin(data: LoginData) {
    const result: TokenData = yield baseApi.post<LoginData, TokenData>(appSettings.baseApiUrl + `/authenticate/auth`, data);
    return result;
}

export function* postValidateUser(params: string) {
    const result: string = yield baseApi.post<undefined, string>(appSettings.baseApiUrl + `/authenticate/validateUser` + params, undefined);
    return result;
}

export function* postLoginGoogle(data: LoginGoogleData) {
    const result: TokenData = yield baseApi.post<LoginGoogleData, TokenData>(appSettings.baseApiUrl + `/authenticate/google-login`, data);
    return result;
}

export function* postLoginFacebook(data: LoginFacebookData) {
    const result: TokenData = yield baseApi.post<LoginFacebookData, TokenData>(appSettings.baseApiUrl + `/authenticate/facebook-login`, data);
    return result;
}