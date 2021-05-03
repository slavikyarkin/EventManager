import { CompanyState } from './Company/CompanyState';
import { EventState } from './Event/EventState';

export interface ApplicationState {
    company: CompanyState
    event: EventState
}