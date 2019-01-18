// @flow
import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

// Workers
function* getDataAsync() {
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' });
}

// Watchers
function* watchGetDataAsync() {
    yield takeEvery('INCREMENT_ASYNC', getDataAsync);
}

export default function* rootSaga() {
    yield all([
        watchGetDataAsync()
    ]);
}
