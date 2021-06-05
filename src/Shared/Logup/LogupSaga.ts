import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./LogupAPI";
import * as actions from "./LogupActions";
import { LogupModel, UserModel } from './LogupModel';
import { LogupData, UserData } from './LogupData';
import * as errorActions from "../ErrorMessages/errorActions";

export function* logupSaga() {
    yield takeLatest(getType(actions.logUp), logUp);
}

function* logUp(action: ActionType<typeof actions.logUp>) {
    try {
        const data: UserData = yield call(Api.postLogup, action.payload);
        const model: UserModel = { ...data }

        yield put(actions.logUpSuccess(model));
    } catch (e) {
        yield put(actions.logUpFail(e));
        yield put(errorActions.error(e));
    }
}
