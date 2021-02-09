import { all, call, put, takeLatest } from 'redux-saga/effects';
import { apiSuccess, apiFailure, API_REQUEST } from './actions';
import { covidFetch, countryNames } from "./report";

export function* rootSaga() {
  yield all([takeLatest(API_REQUEST, apiSaga)]);
}

export function* apiSaga(payload) {
  console.log('payload:', payload);
  try {
    const covid = yield call(covidFetch, payload.country, payload.from, payload.to);
    const names = yield call(countryNames);
    const data = {countries_case:covid,countries_name:names.Countries};

    yield put(apiSuccess(data));
  } catch (error) {
    yield put(apiFailure(error));
  }
}

