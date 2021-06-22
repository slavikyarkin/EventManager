export interface SignupModel {
    firstName : string;
    lastName : string;
    dateOfBirth? : string;
    email : string;
    password : string;
    repeatPassword : string;
}

export interface SignupFormModel {
    formData: SignupModel;
    errors: Map<string, string>;
    isLoading: boolean;
}

export interface SignupRequestModel {
    firstName : string;
    lastName : string;
    dateOfBirth? : Date;
    email : string;
    password : string;
}

export interface UserModel {
    id : number;
    firstName : string;
    lastName : string;
    middleName? : string;
    birthDate? : Date;
    email : string;
    phone? : string;
    sex? : number;
    username? : string;
}