import { combineReducers } from "redux";
import { ApplicationState } from "./applicationState";
import { companyReducer } from "./Company/CompanyReducer";
import { eventReducer } from "./Event/EventReducer";
import { routerReducer } from "./Shared/Router/routerReducer";

export const rootReducer = combineReducers<ApplicationState>({
    company: companyReducer,
    event: eventReducer,
    router: routerReducer
})