import { LogupModel, LogupRequestModel } from "./LogupModel";

export const mapToRequestModel = (data: LogupModel): LogupRequestModel => {
    return {
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        email: data.email,
        password: data.password,
    };
}