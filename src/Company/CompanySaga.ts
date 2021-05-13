import { CompanyModel } from './CompanyModel';
import { CompanyData } from './CompanyData';

import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./CompanyAPI";
import * as actions from "./CompanyActions";
import * as mapper from "./CompanyMapper";
import * as routerActions from "../Shared/Router/routerActions";

export function* companySaga() {
    yield takeLatest(getType(actions.loadCompany), loadCompany);
    yield takeEvery(getType(actions.createCompany), createCompany);
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
        yield put(routerActions.redirect('/company/' + company.id));
        // yield put({type: "company/LOAD_COMPANY_SUCCEEDED", company: company});
    } catch (e) {
        yield put({type: "company/LOAD_COMPANY_FAILED", message: e.message});
    }
}