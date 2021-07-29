import * as resetPasswordActions from "./ResetPasswordActions"
import { ActionType, getType } from "typesafe-actions";
import { ResetPasswordState } from "./ResetPasswordState";

export type ResetPasswordAction = ActionType<typeof resetPasswordActions>;

const initialState: ResetPasswordState = {
}

export function resetPasswordReducer(state: ResetPasswordState = initialState, action: ResetPasswordAction): ResetPasswordState {
    switch (action.type) {
        default:
            return {
                ...state
            };
    }
}