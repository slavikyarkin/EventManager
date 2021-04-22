import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./companyAPI";
import * as actions from "./companyActions";


export function* companySaga() {
    yield takeLatest(getType(actions.loadCompany), loadCompany);
}

function loadCompany(action : ActionType<typeof actions.loadCompany>) {
    try {
        // const company = yield call(Api.getCompany )
        // yield put({type: "company/LOAD_COMPANY_SUCCEEDED", company: company});
    } catch (e) {
        // yield put({type: "company/LOAD_COMPANY_FAILED", message: e.message});
    }
}

