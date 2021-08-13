import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./ResetPasswordAPI";
import * as actions from "./ResetPasswordActions"

import * as errorActions from "../../ErrorMessages/errorActions";
import * as snackbarActions from "../../Snackbar/SnackbarActions";
import * as routerActions from "../../Router/routerActions";
import { BadRequestError } from '../../exceptions';

export function* resetPasswordSaga() {
    yield takeLatest(getType(actions.resetPassword), resetPassword);
}

function* resetPassword(action: ActionType<typeof actions.resetPassword>) {
    try {
        const data: string = yield call(Api.postResetPassword, action.payload);
        yield put(routerActions.redirect('/signin'));
        yield put(snackbarActions.showSnackbar({message: data, severity: 'success'}))
    } catch (e) {
        yield put(actions.resetPasswordFail(e));
        yield put(errorActions.error(e));
        if (e instanceof BadRequestError) {
            yield put(snackbarActions.showSnackbar({ message: e.message, severity: 'error' }));
        }
    }
}