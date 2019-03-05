import React from 'react';

import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import configureStore from './../../store';

import ConnectedHome from '../ImageGrid/ImageGrid';
import HttpFetch from '../../services/HttpFetch';

configure({ adapter: new Adapter() });
const store = configureStore();

HttpFetch.get = jest.fn();

describe('when Image Grid mount', () => {
  it('should call photos from server', () => {
    HttpFetch.get.mockResolvedValue([]);

    const component = (
      <Provider store={store}>
        <ConnectedHome />
      </Provider>
    );

    mount(component);

    expect(HttpFetch.get).toHaveBeenCalled();
  });
});
