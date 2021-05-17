import { AppSettings } from "../AppSettings";
import { UserData } from "./UserData";

declare const appSettings: AppSettings;

export const createUser = (data: UserData): Promise<UserData> => {
    return fetch(appSettings.baseApiUrl + `/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
};