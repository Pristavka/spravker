// @flow
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { getAllCompaniesApi } from 'api';
// TODO: Move async action types to constants folder
import {
    GET_ALL_COMPANIES_FROM_API_ACTION,
    setAllCompaniesToStoreAction
} from 'actions';

// Workers
function* getAllCompaniesFromApi() {
    const companies = yield call(getAllCompaniesApi);
    yield put(setAllCompaniesToStoreAction(companies));
}

// Watchers
function* watchGetAllCompaniesFromApi() {
    yield takeEvery(
        GET_ALL_COMPANIES_FROM_API_ACTION,
        getAllCompaniesFromApi
    );
}

export function* rootSaga() {
    yield all([
        watchGetAllCompaniesFromApi()
    ]);
}
