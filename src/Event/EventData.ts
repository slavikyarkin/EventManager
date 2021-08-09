export interface EventData {
    id?: number;
    name: string;
    createDate: Date;
    holdingDate: string;
    type: number;
    email: string;
    description: string;
    companyId?: number;
}