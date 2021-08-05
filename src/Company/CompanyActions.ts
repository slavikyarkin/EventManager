import { createAction } from "typesafe-actions";
import { CompanyInviteModel, CompanyModel } from "./CompanyModel";

export const loadAll = createAction('company/LOAD_ALL')();
export const loadAllSuccess = createAction('company/LOAD_ALL_SUCCESS')<CompanyModel[]>();

export const loadCompany = createAction('company/LOAD_COMPANY')<number>();
export const loadCompanySuccess= createAction('company/LOAD_COMPANY_SUCCESS')<CompanyModel>();
export const loadCompanyFail = createAction('company/LOAD_COMPANY_FAIL')<Error>();

export const createCompany = createAction('company/CREATE_COMPANY')<CompanyModel>();
export const createCompanySuccess = createAction('company/CREATE_COMPANY_SUCCESS')<CompanyModel>();
export const createCompanyFail = createAction('company/CREATE_COMPANY_FAIL')<Error>();

export const deleteCompany = createAction('company/DELETE_COMPANY')<number>();
export const deleteCompanySuccess = createAction('company/DELETE_COMPANY_SUCCESS')<CompanyModel>();
export const deleteCompanyFail = createAction('company/DELETE_COMPANY_FAIL')<Error>();

export const editCompany = createAction('company/EDIT_COMPANY')<CompanyModel>();
export const editCompanySuccess = createAction('company/EDIT_COMPANY_SUCCESS')<CompanyModel>();
export const editCompanyFail = createAction('company/EDIT_COMPANY_FAIL')<Error>();

export const inviteCompany = createAction('company/INVITE_COMPANY')<CompanyInviteModel>();
export const inviteCompanySuccess = createAction('company/INVITE_COMPANY_SUCCESS')<CompanyInviteModel>();
export const inviteCompanyFail = createAction('company/INVITE_COMPANY_FAIL')<Error>();

export const inviteAcceptCompany = createAction('company/INVITE_ACCEPT_COMPANY')<CompanyInviteModel>();
export const inviteAcceptCompanySuccess = createAction('company/INVITE_ACCEPT_COMPANY_SUCCESS')<CompanyInviteModel>();
export const inviteAcceptCompanyFail = createAction('company/INVITE_ACCEPT_COMPANY_FAIL')<Error>();