import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import pageReducer from './pageReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  load: loadingReducer,
  nextPage: pageReducer,
  auth: authReducer
});

export default rootReducer;
