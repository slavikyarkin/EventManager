import { combineReducers } from "redux";
import { ApplicationState } from "./applicationState";
import { companyReducer } from "./Company/CompanyReducer";

import { routerReducer } from 'react-router-redux'

export const rootReducer = combineReducers<ApplicationState>({
    company: companyReducer,
    routing: routerReducer
})