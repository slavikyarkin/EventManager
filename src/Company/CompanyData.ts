export interface CompanyData {
    id?: number;
    name: string;
    email?: string;
    description: string;
    type: number;
}

export interface CompanyInviteData {
    companyId: number;
    email: string;
}