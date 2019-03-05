import React from 'react';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import ConnectedHome, { ImageGrid } from '../ImageGrid/ImageGrid';


const IMAGES = [
  {
    id: 'ZiFm4vs4ih4',
    created_at: '2019-03-04T10:50:15-05:00',
    updated_at: '2019-03-05T13:05:50-05:00',
    width: 2653,
    height: 3833,
    color: '#170E0C',
    description: null,
    urls: {
      raw:
        'https://images.unsplash.com/photo-1551714457-aabc6bbcff28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMzMTYwfQ',
      full:
        'https://images.unsplash.com/photo-1551714457-aabc6bbcff28?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMzMTYwfQ',
      regular:
        'https://images.unsplash.com/photo-1551714457-aabc6bbcff28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ',
      small:
        'https://images.unsplash.com/photo-1551714457-aabc6bbcff28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ',
      thumb:
        'https://images.unsplash.com/photo-1551714457-aabc6bbcff28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ'
    },
    links: {
      self: 'https://api.unsplash.com/photos/ZiFm4vs4ih4',
      html: 'https://unsplash.com/photos/ZiFm4vs4ih4',
      download: 'https://unsplash.com/photos/ZiFm4vs4ih4/download',
      download_location: 'https://api.unsplash.com/photos/ZiFm4vs4ih4/download'
    },
    categories: [],
    sponsored: false,
    sponsored_by: null,
    sponsored_impressions_id: null,
    likes: 6,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: '-myGpytHnPo',
      updated_at: '2019-03-05T04:08:17-05:00',
      username: 'jontyson',
      name: 'Jon Tyson',
      first_name: 'Jon',
      last_name: 'Tyson',
      twitter_username: 'jontyson',
      portfolio_url: 'http://church.nyc',
      bio: 'My cup overflows.',
      location: "Hell's Kitchen New York",
      links: {
        self: 'https://api.unsplash.com/users/jontyson',
        html: 'https://unsplash.com/@jontyson',
        photos: 'https://api.unsplash.com/users/jontyson/photos',
        likes: 'https://api.unsplash.com/users/jontyson/likes',
        portfolio: 'https://api.unsplash.com/users/jontyson/portfolio',
        following: 'https://api.unsplash.com/users/jontyson/following',
        followers: 'https://api.unsplash.com/users/jontyson/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1528230399047-c8d0d832ed9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1528230399047-c8d0d832ed9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1528230399047-c8d0d832ed9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
      },
      instagram_username: 'jontyson',
      total_collections: 0,
      total_likes: 93,
      total_photos: 1246,
      accepted_tos: true
    }
  },
  {
    id: 'U7jr4ZE7reQ',
    created_at: '2019-03-04T08:37:58-05:00',
    updated_at: '2019-03-05T13:34:40-05:00',
    width: 4640,
    height: 3480,
    color: '#F3E491',
    description: null,
    urls: {
      raw:
        'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMzMTYwfQ',
      full:
        'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMzMTYwfQ',
      regular:
        'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ',
      small:
        'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ',
      thumb:
        'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjMzMTYwfQ'
    },
    links: {
      self: 'https://api.unsplash.com/photos/U7jr4ZE7reQ',
      html: 'https://unsplash.com/photos/U7jr4ZE7reQ',
      download: 'https://unsplash.com/photos/U7jr4ZE7reQ/download',
      download_location: 'https://api.unsplash.com/photos/U7jr4ZE7reQ/download'
    },
    categories: [],
    sponsored: false,
    sponsored_by: null,
    sponsored_impressions_id: null,
    likes: 37,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: 'LvXU18LiWfk',
      updated_at: '2019-03-05T11:56:33-05:00',
      username: 'wurmloch',
      name: 'Dominik M\u00fcller',
      first_name: 'Dominik',
      last_name: 'M\u00fcller',
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/wurmloch',
        html: 'https://unsplash.com/@wurmloch',
        photos: 'https://api.unsplash.com/users/wurmloch/photos',
        likes: 'https://api.unsplash.com/users/wurmloch/likes',
        portfolio: 'https://api.unsplash.com/users/wurmloch/portfolio',
        following: 'https://api.unsplash.com/users/wurmloch/following',
        followers: 'https://api.unsplash.com/users/wurmloch/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1551705482667-585db2c773a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1551705482667-585db2c773a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1551705482667-585db2c773a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
      },
      instagram_username: 'domemue',
      total_collections: 0,
      total_likes: 13,
      total_photos: 7,
      accepted_tos: true
    }
  }
];

describe('test Image Grid', () => {
  describe('test DUMB component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <ImageGrid
          images={IMAGES}
          loadImages={() => {}}
          reloadImages={() => {}}
        />
      );
    });

    it('+++ render the DUMB component', () => {
      expect(wrapper.length).toEqual(1);
    });

    /* it('render ImageGrid on snapShot', () => {
      const tree = renderer
        .create(
          <ImageGrid
            images={IMAGES}
            loadImages={() => {}}
            reloadImages={() => {}}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    }); */
  });

  describe('test SMART component', () => {
    const images = IMAGES;
    let initalState = {
      images: { images },
      load: { loading: false }
    };
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(initalState);
      wrapper = mount(
        <Provider store={store}>
          <ConnectedHome />
        </Provider>
      );
    });

    it('+++ render the connected(SMART) component', () => {
      expect(wrapper.find(ConnectedHome).length).toEqual(1);
    });

    it('render ImageGrid on snapShot', () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <ConnectedHome />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('test SMART component 2', () => {
    let initalState = {
      images: { images: [] },
      load: { loading: true }
    };
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(initalState);
      wrapper = mount(
        <Provider store={store}>
          <ConnectedHome />
        </Provider>
      );
    });

    it('+++ render the connected(SMART) component', () => {
      expect(wrapper.find(ConnectedHome).length).toEqual(1);
    });

    it('render ImageGrid on snapShot', () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <ConnectedHome />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
