import { IMAGES } from '../constants';

const initialState = {
  loading: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case IMAGES.LOAD_FAILURE:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default loadingReducer;
