import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./LoginAPI";
import * as actions from "./LoginActions";
import { LoginModel } from './LoginModel';
import { LoginData } from './LoginData';

export function* loginSaga() {
    yield takeLatest(getType(actions.logIn), logIn);
}

function* logIn(action: ActionType<typeof actions.logIn>) {
    try {   


        //sessionStorage.setItem('token', JSON.stringify(userToken));

    } catch (e) {
        yield put({ type: "login/LOG_IN_FAIL", message: e.message });
    }
}
