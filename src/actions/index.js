import { IMAGES } from '../constants';

const loadImagesRequest = () => ({
  type: IMAGES.LOAD_REQUEST
});

const reloadImagesRequest = () => ({
  type: IMAGES.RELOAD_REQUEST
});

const loadImagesSuccess = images => ({
  type: IMAGES.LOAD_SUCCESS,
  payload: images
});

const loadImagesFailure = error => ({
  type: IMAGES.LOAD_FAILURE,
  error
});

export default {
  loadImagesRequest,
  loadImagesSuccess,
  loadImagesFailure,
  reloadImagesRequest
};
