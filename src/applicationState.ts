import { CompanyState } from './Company/CompanyState';
import { RouterState } from 'react-router-redux'

export interface ApplicationState {
    company: CompanyState,
    // events: 
    routing: RouterState
};