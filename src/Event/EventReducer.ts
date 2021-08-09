import * as eventActions from "./EventActions";
import { ActionType, getType } from "typesafe-actions";
import { EventState } from "./EventState";

export type EventAction = ActionType<typeof eventActions>;

const initialState: EventState = {
  event: {
    id: 0,
    name: '',
    createDate: new Date,
    holdingDate: '',
    type: 1,
    email: '',
    description: '',
  }
}

export function eventReducer(state: EventState = initialState, action: EventAction): EventState {
  switch (action.type) {
    case (getType(eventActions.loadEventSuccess)):
      return {
        event: action.payload
      };
    default:
      return {
        ...state
      };
  }
}