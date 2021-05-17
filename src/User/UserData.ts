export interface UserData {
    id : number;
    firstName : string;
    lastName : string;
    middleName? : string;
    birthDate? : Date;
    phone? : string;
    email : string;
    sex : 1 | 2;
    password : string;
}
