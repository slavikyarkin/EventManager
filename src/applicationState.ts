import { RouterState } from './Shared/Router/RouterState';
import { CompanyState } from './Company/CompanyState';
import { EventState } from './Event/EventState';

export interface ApplicationState {
    companyState: CompanyState,
    eventState: EventState,
    routerState: RouterState
}