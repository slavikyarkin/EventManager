import { EventEditModel, EventModel } from './EventModel';
import { EventData } from './EventData';

export const mapToModel = (data: EventData): EventModel => {
    return {
        ...data
    };
}

export const mapToEditModel = (data: EventModel): EventEditModel => {
    return {
        name: data.name,
        createDate: data.createDate,
        holdingDate: new Date(data.holdingDate),
        type: data.type,
        email: data.email,
        description: data.description
    }
}