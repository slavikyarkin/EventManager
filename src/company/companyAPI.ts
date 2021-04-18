import { AppSettings } from "../AppSettings";
import { CompanyData } from "./companyData";

declare const appSettings : AppSettings;

export const getCompany = (id : number): Promise<CompanyData> => {
    return fetch(appSettings.baseApiUrl + `/company/${id}`)
    .then(response => response.json());
}