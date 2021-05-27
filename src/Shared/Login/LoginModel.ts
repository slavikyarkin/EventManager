export interface LoginModel {
    email: string;
    password: string;
}

export interface LoginFormModel {
    formData: LoginModel;
    errors: Map<string, string>;
    isLoading: boolean;
}

export interface TokenModel {
    token : string;
    experationDate : Date;
}