import {
  takeEvery,
  takeLatest,
  put,
  call,
  take,
  all,
  select,
  fork
} from 'redux-saga/effects';

import { getPage, loadImage } from '../imageSaga';
import HttpFetch from '../../services/HttpFetch';
import action from '../../actions';

describe('ImageSagas', () => {
  it('Shold select the nextPage state value', () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);
    expect(res).toBe(nextPage);
  });

  it('Shold load images and then case sucess', () => {
    const generator = loadImage();
    const page = select(getPage);
    expect(generator.next().value).toEqual(select(getPage));
    expect(generator.next().value).toEqual(
      call(HttpFetch.get, 'photos', page.value)
    );

    expect(generator.next().value).toEqual(put(action.loadImagesSuccess(undefined)));
    const error = {};

    expect(generator.throw(error).value).toEqual(
      put(action.loadImagesFailure(error))
    );

    expect(generator.next().done).toEqual(true);

  });
});
