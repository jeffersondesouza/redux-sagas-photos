import { IMAGES } from '../constants';

const initialState = {
  images: []
};

const imagesReducer = (state = initialState, action) => {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return {
      ...state,
      images: [...action.payload]
    };
  }

  return state;
};

export default imagesReducer;


