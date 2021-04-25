import { combineReducers } from "redux";
import { ApplicationState } from "./applicationState";
import { companyReducer } from "./Company/CompanyReducer";

export const rootReducer = combineReducers<ApplicationState>({
    company: companyReducer
})