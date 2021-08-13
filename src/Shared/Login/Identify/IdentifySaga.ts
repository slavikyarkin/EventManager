import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./IdentifyAPI";
import * as actions from "./IdentifyActions";
import { IdentifyModel } from './IdentifyModel';
import { IdentifyData } from './IdentifyData';
import * as errorActions from "../../ErrorMessages/errorActions";
import * as snackbarActions from "../../Snackbar/SnackbarActions";
import { BadRequestError } from '../../exceptions';
import * as routerActions from "../../Router/routerActions";


export function* identifySaga() {
    yield takeLatest(getType(actions.identify), identify);
}

function* identify(action: ActionType<typeof actions.identify>) {
    try {
        const data: string = yield call(Api.postIdentify, action.payload);
        yield put(routerActions.redirect('/signin'));
        yield put(snackbarActions.showSnackbar({message: data, severity: 'success'}))
    } catch (e) {
        yield put(actions.identifyFail(e));
        yield put(errorActions.error(e));
        if (e instanceof BadRequestError) {
            yield put(snackbarActions.showSnackbar({ message: e.message, severity: 'error' }))
        } 
    }
}
