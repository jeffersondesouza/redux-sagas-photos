import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import pageReducer from './pageReducer';
import authReducer from './authReducer';

const appReducer = combineReducers({
  images: imagesReducer,
  load: loadingReducer,
  nextPage: pageReducer,
  auth: authReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'auth:LOGOUT_REQUEST') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
