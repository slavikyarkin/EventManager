import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./LoginAPI";
import * as actions from "./LoginActions";
import { LoginModel, TokenModel } from './LoginModel';
import { LoginData, TokenData } from './LoginData';

export function* loginSaga() {
    yield takeLatest(getType(actions.logIn), logIn);
}

function* logIn(action: ActionType<typeof actions.logIn>) {
    try {   
        const data: TokenData = yield call(Api.logIn, action.payload);
        const model: TokenModel = {...data}

        sessionStorage.setItem('token', model.token);
        
        // yield put(actions.logInSuccess(model));
    } catch (e) {
        yield put(actions.logInFail(e));
    }
}
