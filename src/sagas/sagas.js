// @flow
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { getAllCompaniesApi } from 'api';
import {
    // getAllCompaniesFromApiAction,
    setAllCompaniesToStore
} from 'actions';

// Workers
function* getAllCompaniesFromApi() {
    const companies = yield call(getAllCompaniesApi);
    yield put(setAllCompaniesToStore(), companies);
}

// Watchers
function* watchGetAllCompaniesFromApi() {
    yield takeEvery('GET_ALL_COMPANIES', getAllCompaniesFromApi);
}

export function* rootSaga() {
    yield all([
        watchGetAllCompaniesFromApi()
    ]);
}
