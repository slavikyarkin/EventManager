import { AppSettings } from "../../AppSettings";
import { LoginData, TokenData } from "./LoginData";
import * as baseApi from "../baseApi";

declare const appSettings: AppSettings;

export function* postLogin(data: LoginData) {

    let exDate = new Date();
    exDate.setFullYear(2022);
    const result = Promise.resolve({
        token: 'dummy-token-string',
        experationDate: exDate
    });

    const resultD: TokenData = yield result;

    return resultD;

    // const result: TokenData = yield baseApi.post<LoginData, TokenData>(appSettings.baseApiUrl + `/user/authenticate`, data);
    // return result;



}
