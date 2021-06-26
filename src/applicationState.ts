import { RouterState } from './Shared/Router/RouterState';
import { CompanyState } from './Company/CompanyState';
import { EventState } from './Event/EventState';
import { LoginState } from './Shared/Login/LoginState';
import { SignupState } from './Shared/Signup/SignupState';
import { SnackbarState } from './Shared/Snackbar/SnackbarState';

export interface ApplicationState {
    companyState: CompanyState,
    eventState: EventState,
    routerState: RouterState,
    loginState: LoginState,
    logupState: SignupState,
    snackbarState: SnackbarState,
}