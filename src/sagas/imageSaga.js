import {
  takeEvery,
  takeLatest,
  put,
  call,
  take,
  all,
  select, 
  fork
} from 'redux-saga/effects';
import { IMAGES } from '../constants';
import action from '../actions';

import HttpFetch from '../services/HttpFetch';

const getPage = state => state.nextPage;

function* loadImage() {
  
  try {
    const page = yield select(getPage);
    const res = yield call(HttpFetch.get, 'photos', page);
    yield put(action.loadImagesSuccess(res));
  } catch (error) {
    yield put(action.loadImagesFailure(error));
  }
}


function* watchLoadImages() {
  yield takeEvery(IMAGES.LOAD_REQUEST, loadImage);
}





function* reloadImage() {
  try {
    const page = yield select(getPage);
    const res = yield call(HttpFetch.get, 'photos', page);
    yield put(action.reloadImagesSuccess(res));
  } catch (error) {
    yield put(action.loadImagesFailure(error));
  }
}

function* watchReloadImages() {
  while(true){
    yield take(IMAGES.RELOAD_REQUEST);
    yield fork(reloadImage);
    yield take(IMAGES.RELOAD_SUCCESS);
  }
}

function* rootSaga() {
  yield all([watchLoadImages(), watchReloadImages()]);
}

export default rootSaga;
