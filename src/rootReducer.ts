import { combineReducers } from "redux";
import { ApplicationState } from "./applicationState";
import { companyReducer } from "./Company/CompanyReducer";
import { eventReducer } from "./Event/EventReducer";

export const rootReducer = combineReducers<ApplicationState>({
    company: companyReducer,
    event: eventReducer
})