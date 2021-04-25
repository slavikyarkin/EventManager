import { CompanyData } from './CompanyData';
import { AppSettings } from "../AppSettings";


declare const appSettings: AppSettings;


export const getCompany = (id: number): Promise<CompanyData> => {
    return fetch(appSettings.baseApiUrl + `/company/${id}`)
        .then(response => response.json());
};


export const createCompany = (data: CompanyData): Promise<CompanyData> => {
    return fetch(appSettings.baseApiUrl + `/company`, )
        .then(response => response.json());
};