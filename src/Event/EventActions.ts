import { createAction } from "typesafe-actions";
import { EventEditModel, EventModel } from "./EventModel";

export const loadEvent = createAction('event/LOAD_EVENT')<number>();
export const loadEventSuccess= createAction('event/LOAD_EVENT_SUCCESS')<EventModel>();
export const loadEventFail = createAction('event/LOAD_EVENT_FAIL')<Error>();

export const editEvent = createAction('event/EDIT_EVENT')<EventEditModel>();
export const editEventSuccess= createAction('event/EDIT_EVENT_SUCCESS')<EventModel>();
export const editEventFail = createAction('event/EDIT_EVENT_FAIL')<Error>();