import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';

import configureStore from './store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <ImageGrid />
      </Provider>
    );
  }
}

export default App;
