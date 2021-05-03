import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { action, ActionType, getType } from 'typesafe-actions'
import * as Api from "./EventAPI";
import * as actions from "./EventActions";
import * as mapper from "./EventMapper";
import { EventModel } from './EventModel';
import { EventData } from './EventData';

export function* eventSaga() {
    yield takeLatest(getType(actions.loadEvent), loadEvent);
}

function* loadEvent(action: ActionType<typeof actions.loadEvent>) {
    try {
        const data: EventData = yield call(Api.getEvent, action.payload);
        const model: EventModel = mapper.mapToModel(data);
        yield put(actions.loadEventSuccess(model));
    } catch (e) {
        yield put(actions.loadEventFail(e));
    }
}
