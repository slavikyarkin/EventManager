import { CompanyModel } from './CompanyModel';
import { CompanyData } from './CompanyData';

export const mapToModel = (data: CompanyData): CompanyModel => {
    return {
        ...data
    };
}