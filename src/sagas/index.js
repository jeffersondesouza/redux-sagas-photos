import { takeEvery, put } from 'redux-saga/effects';


function* workerSaga() {
  console.log('hello worlds');
  yield put({type: 'ACTION_FROM_SAGA'})
}





function* rootSaga() {
  yield takeEvery('HELLO', workerSaga);
  
}

export default rootSaga;
