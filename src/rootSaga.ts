import { fork } from "redux-saga/effects";
import { companySaga } from "./Company/CompanySaga";
import { identifySaga } from "./Shared/Login/Identify/IdentifySaga";
import { loginSaga } from "./Shared/Login/LoginSaga";
import { logupSaga } from "./Shared/Signup/SignupSaga";

export function* rootSaga() {
    yield fork(companySaga);
    yield fork(loginSaga);
    yield fork(logupSaga);
    yield fork(identifySaga);
}