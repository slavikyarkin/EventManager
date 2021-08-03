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

export const editCompany = (id: number, data: CompanyData): Promise<CompanyData> => {
    const token = sessionStorage['authToken'];
    return fetch(appSettings.baseApiUrl + `/company/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
    // .then(result => 
};

export function* deleteCompany(id: number) {
    const result: string = yield baseApi.put<undefined, string>(appSettings.baseApiUrl + `/company/MakeCompanyDel/${id}`, undefined);
    return result;
}

export function* getAllCompanies() {

    const result: CompanyData[] = yield baseApi.get(appSettings.baseApiUrl + `/company/all`);
    return result;

    // return fetch(appSettings.baseApiUrl + `/company/all`)
    //     .then(response => response.json());
}