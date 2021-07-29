export interface ResetPasswordModel {
    newPassword: string;
    confirmNewPassword: string;
}

export interface ResetPasswordRequestModel {
    email?: string;
    validTo?: string;
    code?: string;
    password: string;
} 

export interface ResetPasswordFormModel {
    formData: ResetPasswordModel;
    errors: Map<string, string>;
    isLoading: boolean;
}