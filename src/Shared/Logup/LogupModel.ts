export interface LogupModel {
    email : string;
    password : string;
}

export interface LogupFormModel {
    formData: LogupModel;
    errors: Map<string, string>;
    isLoading: boolean;
}