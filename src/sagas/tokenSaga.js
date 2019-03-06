import { put, takeEvery, call, all } from 'redux-saga/effects';
import { AUTH } from '../constants';
import action from '../actions/auth';

import HttpFetch from '../services/HttpFetch';

function* validateToken() {
  try {
    const token = yield call(HttpFetch.login);
    // the execution order really metters!
    yield call(HttpFetch.storeToken, token);
    yield put(action.validateTokenSuccess(token));
  } catch (error) {
    yield put(action.validateTokenFailure(error));
  }
}

export function* watchValidateToken() {
  yield takeEvery(AUTH.VALIDATE_TOKEN_REQUEST, validateToken);
}

function* rootSaga() {
  yield all([watchValidateToken()]);
}

export default rootSaga;
