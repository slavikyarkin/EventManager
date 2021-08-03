import { CompanyModel } from './CompanyModel';
import { CompanyData } from './CompanyData';

import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./CompanyAPI";
import * as actions from "./CompanyActions";
import * as mapper from "./CompanyMapper";
import * as routerActions from "../Shared/Router/routerActions";
import { BadRequestError } from '../Shared/exceptions';
import * as snackbarActions from "../Shared/Snackbar/SnackbarActions";
import { NavigateBefore } from '@material-ui/icons';


export function* companySaga() {
    yield takeLatest(getType(actions.loadCompany), loadCompany);
    yield takeEvery(getType(actions.createCompany), createCompany);
    yield takeLatest(getType(actions.loadAll), loadAll);
    yield takeLatest(getType(actions.deleteCompany), deleteCompany);
    yield takeLatest(getType(actions.editCompany), editCompany);
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
        yield put(actions.createCompanyFail(e));
        if (e instanceof BadRequestError) {
            yield put(snackbarActions.showSnackbar({ message: e.message, severity: 'error' }))
        }
    }
}

function* loadAll(action: ActionType<typeof actions.loadAll>) {
    try {
        const data: CompanyData[] = yield call(Api.getAllCompanies);
        const model = data.map(x => { return { ...x } });
        //const model: CompanyModel[] = [{id: 1, name: 'C1'}, {id: 2, name: 'C2'}] // data.map(mapper.mapToModel);
        yield put(actions.loadAllSuccess(model));
    } catch (e) {
        yield put(actions.loadCompanyFail(e));
    }
}

function* deleteCompany(action: ActionType<typeof actions.deleteCompany>) {
    try {
        const res: string = yield call(Api.deleteCompany, action.payload)
        yield put(routerActions.redirect('/'));
        yield put(snackbarActions.showSnackbar({ message: res, severity: 'success' }))
    } catch (e) {
        yield put(actions.deleteCompanyFail(e));
        if (e instanceof BadRequestError) {
            yield put(snackbarActions.showSnackbar({ message: e.message, severity: 'error' }))
        }
    }
}

function* editCompany(action: ActionType<typeof actions.editCompany>) {
    try {
        const company: CompanyData = yield call(Api.editCompany, action.payload)
        yield put(routerActions.redirect('/company/' + company.id));
        // yield put({type: "company/LOAD_COMPANY_SUCCEEDED", company: company});
    } catch (e) {
        yield put(actions.editCompanyFail(e));
        if (e instanceof BadRequestError) {
            yield put(snackbarActions.showSnackbar({ message: e.message, severity: 'error' }))
        }
    }
}