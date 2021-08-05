export interface CompanyModel {
    id?: number;
    name: string;
    email?: string;
    description: string;
    type: number;
}

export interface CompanyInviteModel {
    companyId: number;
    email: string;
}


