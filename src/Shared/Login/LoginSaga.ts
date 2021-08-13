import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./LoginAPI";
import * as actions from "./LoginActions";
import { LoginModel, TokenModel } from './LoginModel';
import { LoginData, TokenData } from './LoginData';
import * as errorActions from "../ErrorMessages/errorActions";
import * as snackbarActions from "../Snackbar/SnackbarActions";
import { BadRequestError } from '../exceptions';
import * as routerActions from "../Router/routerActions";

export function* loginSaga() {
    yield takeLatest(getType(actions.logIn), logIn);
    yield takeLatest(getType(actions.validateUser), validateUser);
    yield takeLatest(getType(actions.logInGoogle), logInGoogle);
}

function* logIn(action: ActionType<typeof actions.logIn>) {
    try {
        const data: TokenData = yield call(Api.postLogin, action.payload);
        const model: TokenModel = { ...data }
        yield put(routerActions.redirect('/'));
        localStorage.setItem('token', JSON.stringify(model));
        yield put(actions.logInSuccess(model));
    } catch (e) {
        yield put(actions.logInFail(e));
        yield put(errorActions.error(e));
        if (e instanceof BadRequestError) {
            yield put(snackbarActions.showSnackbar({ message: e.message, severity: 'error' }))
        } 
    }
}

function* validateUser(action: ActionType<typeof actions.validateUser>) {
    try {
        const data: string = yield call(Api.postValidateUser, action.payload);

        yield put(snackbarActions.showSnackbar({ message: data, severity: 'success' }))
    } catch (e) {
        yield put(errorActions.error(e));
        if (e instanceof BadRequestError) {
            yield put(snackbarActions.showSnackbar({ message: e.message, severity: 'error' }))
        } 
    }
}

function* logInGoogle(action: ActionType<typeof actions.logInGoogle>) {
    try {
        const data: TokenData = yield call(Api.postLoginGoogle, {idToken: action.payload});
        const model: TokenModel = { ...data }
        yield put(routerActions.redirect('/'));
        localStorage.setItem('token', JSON.stringify(model));
    } catch (e) {
        yield put(actions.logInFail(e));
        if (e instanceof BadRequestError) {
            yield put(snackbarActions.showSnackbar({ message: e.message, severity: 'error' }))
        } 
    }
}