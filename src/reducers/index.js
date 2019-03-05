import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  load: loadingReducer
});

export default rootReducer;
