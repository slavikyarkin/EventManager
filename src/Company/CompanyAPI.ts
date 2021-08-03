import { CompanyData } from './CompanyData';
import { AppSettings } from "../AppSettings";
import * as baseApi from "../Shared/baseApi";

declare const appSettings: AppSettings;

export const getCompany = (id: number): Promise<CompanyData> => {
    return fetch(appSettings.baseApiUrl + `/company/${id}`)
        .then(response => response.json());
};

export function* createCompany(data: CompanyData) {
    const result: CompanyData = yield baseApi.post<CompanyData, CompanyData>(appSettings.baseApiUrl + `/company`, data);
    return result;
}

export function* editCompany(data: CompanyData) {
    const result: CompanyData = yield baseApi.put<CompanyData, CompanyData>(appSettings.baseApiUrl + `/UpdateCompany`, data);
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