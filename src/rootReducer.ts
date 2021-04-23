import { combineReducers } from "redux";
import { ApplicationState } from "./applicationState";
import { companyReducer } from "./company/companyReducer";

export const rootReducer = combineReducers<ApplicationState>({
    company: companyReducer
})