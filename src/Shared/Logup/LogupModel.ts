export interface LogupModel {
    firstName : string;
    lastName : string;
    dateOfBirth? : Date;
    email : string;
    password : string;
    repeatPassword : string;
}

export interface LogupFormModel {
    formData: LogupModel;
    errors: Map<string, string>;
    isLoading: boolean;
}

export interface LogupRequestModel {
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