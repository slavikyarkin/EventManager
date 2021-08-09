import { fork } from "redux-saga/effects";
import { companySaga } from "./Company/CompanySaga";
import { eventSaga } from "./Event/EventSaga";
import { identifySaga } from "./Shared/Login/Identify/IdentifySaga";
import { loginSaga } from "./Shared/Login/LoginSaga";
import { resetPasswordSaga } from "./Shared/Login/ResetPassword/ResetPasswordSaga";
import { logupSaga } from "./Shared/Signup/SignupSaga";

export function* rootSaga() {
    yield fork(companySaga);
    yield fork(eventSaga);
    yield fork(loginSaga);
    yield fork(logupSaga);
    yield fork(identifySaga);
    yield fork(resetPasswordSaga);
}