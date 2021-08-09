export interface EventModel {
    id?: number;
    name: string;
    createDate: Date;
    holdingDate: string;
    type: number;
    email: string;
    description: string;
    companyId?: number;
}

export interface EventEditModel {
    id?: number;
    name: string;
    createDate: Date;
    holdingDate: Date;
    type: number;
    email: string;
    description: string;
    companyId?: number;
}