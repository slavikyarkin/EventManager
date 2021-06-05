import { RouterState } from './Shared/Router/RouterState';
import { CompanyState } from './Company/CompanyState';
import { EventState } from './Event/EventState';
import { LoginState } from './Shared/Login/LoginState';
import { LogupState } from './Shared/Logup/LogupState';

export interface ApplicationState {
    companyState: CompanyState,
    eventState: EventState,
    routerState: RouterState,
    loginState: LoginState,
    logupState: LogupState,
}