import {
  put,
  take,
  call,
  all,
  fork,
  cancel,
  cancelled,
  select
} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { AUTH } from '../constants';
import action from '../actions/auth';

import HttpFetch from '../services/HttpFetch';

export const getPage = state => state.nextPage;

function* authorize(user, password) {
  try {
    const token = yield call(HttpFetch.login);
    yield put(action.loginSuccess({token}));
    yield call(HttpFetch.storeToken, token);
    return token;
  } catch (error) {
    yield put(action.loginFailure(error));
  } finally {
    if (yield cancelled()) {
      console.log('cancel');
      // ... put special cancellation handling code here
    }
  }
}

function* logout() {
  yield put(action.logoutSuccess());
}

export function* loginFlow() {
  while (true) {
    const { payload } = yield take(AUTH.LOGIN_REQUEST);
    // const { user, password } = payload;

    const task = yield fork(authorize, payload);
    const action = yield take(AUTH.LOGOUT_REQUEST, AUTH.LOGIN_FAILURE);

    if (action.type === AUTH.LOGOUT_REQUEST) {
      yield cancel(task);
    }
    yield call(HttpFetch.logout);
    yield fork(logout);
    yield call(HttpFetch.cleanToken);
    
  }
}

function* rootSaga() {
  yield all([loginFlow()]);
}

export default rootSaga;
