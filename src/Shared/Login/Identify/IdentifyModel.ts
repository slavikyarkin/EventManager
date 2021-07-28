export interface IdentifyModel {
    email : string;
}

export interface IdentifyFormModel {
    formData: IdentifyModel;
    errors: Map<string, string>;
    isLoading: boolean;
}