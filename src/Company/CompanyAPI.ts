import { CompanyData } from './CompanyData';
import { AppSettings } from "../AppSettings";


declare const appSettings: AppSettings;


export const getCompany = (id: number): Promise<CompanyData> => {
    return fetch(appSettings.baseApiUrl + `/company/${id}`)
        .then(response => response.json());
};

export const createCompany = (data: CompanyData): Promise<CompanyData> => {
    return fetch(appSettings.baseApiUrl + `/company`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
    // .then(result => 
};

export const editCompany = (id: number, data: CompanyData): Promise<CompanyData> => {
    return fetch(appSettings.baseApiUrl + `/company/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
    // .then(result => 
};

export const deleteCompany = (id: number): Promise<CompanyData> => {
    return fetch(appSettings.baseApiUrl + `/company/${id}`,
        {
            method: 'DELETE'
        }
    )
        .then(response => response.json());
};
