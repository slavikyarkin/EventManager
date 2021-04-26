import { CompanyState } from "./CompanyState";

export const companySelector = (state: CompanyState) => {
    return state.company;
}