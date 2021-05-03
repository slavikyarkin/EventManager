import { ComponentState } from './ComponentState';
import { EventModel } from './EventModel';

export const eventSelector = (state: ComponentState) : EventModel | undefined => {
    return state.event.event;
}