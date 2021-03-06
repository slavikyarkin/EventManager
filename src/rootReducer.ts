import { combineReducers } from "redux";
import { ApplicationState } from "./applicationState";
import { companyReducer } from "./Company/CompanyReducer";
import { eventReducer } from "./Event/EventReducer";
import { routerReducer } from "./Shared/Router/routerReducer";
import { loginReducer } from './Shared/Login/LoginReducer';
import { singupReducer } from "./Shared/Signup/SignupReducer";
import { snackbarReducer } from "./Shared/Snackbar/SnackbarReducer";
import { identifyReducer } from "./Shared/Login/Identify/IdentifyReducer";
import { resetPasswordReducer } from "./Shared/Login/ResetPassword/ResetPasswordReducer";
import { dialogReducer } from "./Shared/Dialog/DialogReducer";

export const rootReducer = combineReducers<ApplicationState>({
    companyState: companyReducer,
    eventState: eventReducer,
    routerState: routerReducer,
    loginState: loginReducer,
    singupState: singupReducer,
    snackbarState: snackbarReducer,
    identifyState: identifyReducer,
    resetPasswordState: resetPasswordReducer,
    dialogState: dialogReducer,
})