import { CompanyModel } from './companyModel';
import { CompanyData } from './companyData';

export const mapToModel = (data: CompanyData): CompanyModel => {
    return {
        ...data
    };
}