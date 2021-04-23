import { CompanyModel } from './companyModel';
import { CompanyData } from './companyData';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./companyAPI";
import * as actions from "./companyActions";
import * as mapper from "./companyMapper";

export function* companySaga() {
    yield takeLatest(getType(actions.loadCompany), loadCompany);
    yield takeLatest(getType(actions.createCompany), createCompany);
}

function* loadCompany(action: ActionType<typeof actions.loadCompany>) {
    try {
        const data: CompanyData = yield call(Api.getCompany, action.payload);
        const model: CompanyModel = mapper.mapToModel(data);
        yield put(actions.loadCompanySuccess(model));
    } catch (e) {
        yield put(actions.loadCompanyFail(e));
    }
}



function* createCompany(action: ActionType<typeof actions.createCompany>) {
    try {
        const company: CompanyData = yield call(Api.createCompany, action.payload)
        //yield put({type: "company/LOAD_COMPANY_SUCCEEDED", company: company});
    } catch (e) {
        //yield put({type: "company/LOAD_COMPANY_FAILED", message: e.message});
    }
}