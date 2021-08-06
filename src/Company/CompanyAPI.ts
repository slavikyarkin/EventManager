import { CompanyData, CompanyInviteData } from './CompanyData';
import { AppSettings } from "../AppSettings";
import * as baseApi from "../Shared/baseApi";

declare const appSettings: AppSettings;

export function*  getCompany(id: number) {
    const result: CompanyData = yield baseApi.get(appSettings.baseApiUrl + `/company/${id}`);
    return result;
};

export function* createCompany(data: CompanyData) {
    const result: CompanyData = yield baseApi.post<CompanyData, CompanyData>(appSettings.baseApiUrl + `/company`, data);
    return result;
}

export function* editCompany(data: CompanyData) {
    const result: CompanyData = yield baseApi.put<CompanyData, CompanyData>(appSettings.baseApiUrl + `/company/Update?${data.id}`, data);
    return result;
}

export function* deleteCompany(id: number) {
    const result: string = yield baseApi.put<undefined, string>(appSettings.baseApiUrl + `/company/MakeCompanyDel/${id}`, undefined);
    return result;
}

export function* getAllCompanies() {
    const result: CompanyData[] = yield baseApi.get(appSettings.baseApiUrl + `/company/all`);
    return result;
}

export function* inviteCompany(data: CompanyInviteData) {
    const result: string = yield baseApi.post<CompanyInviteData, string>(appSettings.baseApiUrl + `/company/sendInviteEmail`, data);
    return result;
}

export function* inviteAcceptCompany(data: CompanyInviteData) {
    const result: string = yield baseApi.post<CompanyInviteData, string>(appSettings.baseApiUrl + `/company/acceptInvitation`, data);
    return result;
}