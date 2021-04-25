import * as companyActions from "./CompanyActions";
import { ActionType, getType } from "typesafe-actions";
import { CompanyState } from "./CompanyState";

export type CompanyAction = ActionType<typeof companyActions>;

const initialState: CompanyState = {
}

export function companyReducer(state: CompanyState = initialState, action: CompanyAction): CompanyState {
  switch (action.type) {
    case (getType(companyActions.loadCompanySuccess)):
      return {
        company: action.payload
      };
    default:
      return {
        ...state
      };
  }
}