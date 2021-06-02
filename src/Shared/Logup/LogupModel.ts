export interface LogupModel {
    firstName : string;
    lastName : string;
    dateOfBirth? : Date;
    email : string;
    password : string;
}

export interface LogupFormModel {
    formData: LogupModel;
    errors: Map<string, string>;
    isLoading: boolean;
}