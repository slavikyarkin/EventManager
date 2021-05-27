import { fork } from "redux-saga/effects";
import { companySaga } from "./Company/CompanySaga";
import { loginSaga } from "./Shared/Login/LoginSaga";

export function* rootSaga() {
    yield fork(companySaga);
    yield fork(loginSaga);
}