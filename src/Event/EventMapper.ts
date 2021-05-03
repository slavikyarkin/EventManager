import { EventModel } from './EventModel';
import { EventData } from './EventData';

export const mapToModel = (data: EventData): EventModel => {
    return {
        ...data
    };
}