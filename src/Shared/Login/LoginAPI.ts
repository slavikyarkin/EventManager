import { AppSettings } from "../../AppSettings";
import { LoginData } from "./LoginData";

declare const appSettings: AppSettings;

export const logIn = (data: LoginData): Promise<LoginData> => {
    return fetch(appSettings.baseApiUrl + `/user/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());  
};