import { AppSettings } from "../AppSettings";
import { EventData } from "./eventData";

declare const appSettings : AppSettings;

export const getEvent = (id : number): Promise<EventData> => {
    return fetch(appSettings.baseApiUrl + `/event/${id}`)
    .then(response => response.json());
}