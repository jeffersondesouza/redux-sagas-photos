import {
  takeEvery,
  takeLatest,
  put,
  call,
  take,
  all
} from 'redux-saga/effects';
import { IMAGES } from '../constants';
import action from '../actions';

import HttpFetch from '../services/HttpFetch';

function* loadImage() {
  try {
    const res = yield call(HttpFetch.get, 'photos');
    yield put(action.loadImagesSuccess(res));
  } catch (error) {
    yield put(action.loadImagesFailure(error));
  }
}

function* watchLoadImages() {
  yield takeEvery(IMAGES.LOAD_REQUEST, loadImage);
}

function* watchReloadImages() {
  yield takeEvery(IMAGES.RELOAD_REQUEST, loadImage);

  /*   while (true) {
    yield take(IMAGES.RELOAD_REQUEST);
    yield call(loadImage);
    yield take(IMAGES.LOAD_SUCCESS);
  } */
}

function* rootSaga() {
  yield all([watchLoadImages(), watchReloadImages()]);
}

export default rootSaga;
