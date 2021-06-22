import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./SignupAPI";
import * as actions from "./SignupActions";
import { SignupModel, UserModel } from './SignupModel';
import { SignupData, UserData } from './SignupData';
import * as errorActions from "../ErrorMessages/errorActions";

export function* logupSaga() {
    yield takeLatest(getType(actions.signUp), signUp);
}

function* signUp(action: ActionType<typeof actions.signUp>) {
    try {
        const data: UserData = yield call(Api.postSignup, action.payload);
        const model: UserModel = { ...data }

        yield put(actions.signUpSuccess(model));
    } catch (e) {
        yield put(actions.signUpFail(e));
        yield put(errorActions.error(e));
    }
}
