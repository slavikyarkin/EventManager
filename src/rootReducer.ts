import { combineReducers } from "redux";
import { ApplicationState } from "./applicationState";
import { companyReducer } from "./Company/CompanyReducer";
import { eventReducer } from "./Event/EventReducer";
import { routerReducer } from "./Shared/Router/routerReducer";
import { loginReducer } from './Shared/Login/LoginReducer';
import { logupReducer } from "./Shared/Signup/SignupReducer";
import { snackbarReducer } from "./Shared/Snackbar/SnackbarReducer";

export const rootReducer = combineReducers<ApplicationState>({
    companyState: companyReducer,
    eventState: eventReducer,
    routerState: routerReducer,
    loginState: loginReducer,
    logupState: logupReducer,
    snackbarState: snackbarReducer,
})