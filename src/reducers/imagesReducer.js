import { IMAGES } from '../constants';

const initialState = {
  images: [],
  total: 0
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_REQUEST:
      return {
        ...state,
        images: initialState.images
      };
    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        images: [...action.payload],
        total: action.payload.length
      };
    case IMAGES.RELOAD_SUCCESS:
      const images = [...state.images, ...action.payload];
      return {
        ...state,
        total: images.length,
        images
      };
    default:
      return state;
  }
};

export default imagesReducer;
