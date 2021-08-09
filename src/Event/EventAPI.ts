import { AppSettings } from "../AppSettings";
import { EventData } from "./EventData";
import { EventEditModel } from "./EventModel";
import * as baseApi from "../Shared/baseApi";

declare const appSettings : AppSettings;

export const getEvent = (id : number): Promise<EventData> => {
    return fetch(appSettings.baseApiUrl + `/event/${id}`)
    .then(response => response.json());
}

export function* createEvent(data: EventEditModel) {
    const result: EventData = yield baseApi.post<EventEditModel, EventData>(appSettings.baseApiUrl + `/event`, data);
    return result;
}