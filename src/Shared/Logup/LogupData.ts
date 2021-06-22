export interface LogupData {
    firstName : string;
    lastName : string;
    dateOfBirth? : string;
    email : string;
    password : string;
    repeatPassword : string;
}

export interface LogupRequestData {
    firstName : string;
    lastName : string;
    dateOfBirth? : Date;
    email : string;
    password : string;
}

export interface UserData {
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
