export interface LoginModel {
    email: string;
    password: string;
}

export interface LoginFormModel {
    formData: LoginModel;
    errors: Map<string, string>;
    isLoading: boolean;
}