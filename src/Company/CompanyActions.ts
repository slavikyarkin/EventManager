import { createAction } from "typesafe-actions";
import { CompanyModel } from "./CompanyModel";

export const loadCompany = createAction('company/LOAD_COMPANY')<number>();
export const loadCompanySuccess= createAction('company/LOAD_COMPANY_SUCCESS')<CompanyModel>();
export const loadCompanyFail = createAction('company/LOAD_COMPANY_FAIL')<Error>();

export const createCompany = createAction('company/CREATE_COMPANY')<CompanyModel>();
export const createCompanySuccess = createAction('company/CREATE_COMPANY_SUCCESS')<CompanyModel>();
export const createCompanyFail = createAction('company/CREATE_COMPANY_FAIL')<Error>();