import { SignupModel, SignupRequestModel } from "./SignupModel";

export const mapToRequestModel = (data: SignupModel): SignupRequestModel => {
    return {
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: new Date(data.dateOfBirth!),
        email: data.email,
        password: data.password,
    };
}