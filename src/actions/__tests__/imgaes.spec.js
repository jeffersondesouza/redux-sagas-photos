import actions from '../index';
import { IMAGES } from '../../constants';

describe('test actions', () => {
  it('should test actions', () => {
    expect(actions.reloadImagesRequest()).toEqual({
      type: IMAGES.RELOAD_REQUEST
    });
  });

  it('should test actions reloadImagesSuccess', () => {
    const payload = [{ id: 1 }];
    expect(actions.reloadImagesSuccess(payload)).toEqual({
      type: IMAGES.RELOAD_SUCCESS,
      payload
    });
  });
});
