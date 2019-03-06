import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import configureStore from './store';

import SiteLayout from './layouts/SiteLayout';
import PanelLayout from './layouts/PanelLayout';

import './App.css';
import NotFound from './pages/NotFound';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/panel" component={PanelLayout} />
            <Route path="/" component={SiteLayout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
