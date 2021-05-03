import { createAction } from "typesafe-actions";
import { EventModel } from "./EventModel";

export const loadEvent = createAction('event/LOAD_EVENT')<number>();
export const loadEventSuccess= createAction('event/LOAD_EVENT_SUCCESS')<EventModel>();
export const loadEventFail = createAction('event/LOAD_EVENT_FAIL')<Error>();