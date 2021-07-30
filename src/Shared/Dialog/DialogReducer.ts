import * as dialogActions from "./DialogActions";
import { ActionType, getType } from "typesafe-actions";
import { DialogState } from "./DialogState";

export type DialogAction = ActionType<typeof dialogActions>;

const initialState: DialogState = {
    show: false,
    content: '',
    result: false,
}

export function dialogReducer(state: DialogState = initialState, action: DialogAction): DialogState {
    switch (action.type) {
        case (getType(dialogActions.openDialog)):
            return {
                ...state,
                show: true,
                content: action.payload.content
            };
        case (getType(dialogActions.closeDialog)):
            return {
                ...state,
                show: false,
                // result: action.payload.result
            };
        default:
            return {
                ...state
            };
    }
}



