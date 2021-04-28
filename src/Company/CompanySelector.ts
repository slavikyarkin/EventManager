import { CompanyModel } from './CompanyModel';
import { CompanyState } from "./CompanyState";
import { ComponentState } from "./ComponentState";

export const companySelector = (state: ComponentState) : CompanyModel | undefined => {
    return state.company.company;
}