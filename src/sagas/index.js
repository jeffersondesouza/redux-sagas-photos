import { all } from 'redux-saga/effects';

import imageSaga from './imageSaga';
import authSaga from './authSaga';
import tokenSaga from './tokenSaga';

export default function* rootSaga() {
  yield all([imageSaga(), authSaga(), tokenSaga()]);
}
