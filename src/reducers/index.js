import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  load: loadingReducer,
  nextPage: pageReducer
});

export default rootReducer;
